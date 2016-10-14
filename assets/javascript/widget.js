(function() {
  'use strict';

  function listenToClick(element, name, fn) {
    if (document.addEventListener) {
      element.addEventListener(name, fn, false);
    } else {
      element.attachEvent((name === 'click') ? 'onclick' : name, fn);
    }
  }

  function handleClicks(elem, fn) {

    if (document.addEventListener) {
      // For all major browsers, except IE 8 and earlier
      elem.addEventListener("click", fn, false);
      elem.addEventListener("touchstart", fn, false);
    } else if (document.attachEvent) {
      // For IE 8 and earlier versions
      elem.attachEvent("onclick", fn, false);
      elem.attachEvent("touchstart", fn, false);
    }
  };

  function hasClass(el, className) {
    if (el.classList)
      return el.classList.contains(className)
    else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
  }

  function my_addClass(el, className) {
    if (el.classList)
      el.classList.add(className)
    else if (!hasClass(el, className)) el.className += " " + className
  }

  function my_removeClass(el, className) {
    if (el.classList)
      el.classList.remove(className)
    else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
      el.className=el.className.replace(reg, ' ')
    }
  }

  function scrollTop(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function(){
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if(currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }

  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }

  function each(o, cb, s){
    var n;
    if (!o){
      return 0;
    }
    s = !s ? o : s;
    if (o instanceof Array){
      // Indexed arrays, needed for Safari
      for (n=0; n<o.length; n++) {
        if (cb.call(s, o[n], n, o) === false){
          return 0;
        }
      }
    } else {
      // Hashtables
      for (n in o){
        if (o.hasOwnProperty(n)) {
          if (cb.call(s, o[n], n, o) === false){
            return 0;
          }
        }
      }
    }
    return 1;
  }

  domready(function() {
    var
      scrollElements,
      inValidRange,
      setVisibility,
      setVisibilityAll,
      resetScroll;

    scrollElements = document.querySelectorAll('[data-scroll-element]');

    inValidRange = function(offset, limit) {
      return offset >= 0 && offset < limit;
    };

    setVisibility = function(element, nextOffset, limit) {
      if(inValidRange(nextOffset, limit)) {
        my_removeClass(element, 'disabled');
      } else {
        my_addClass(element, 'disabled');
      }
    };

    setVisibilityAll = function(elements, newOffset) {
      var
        scrollElement,
        increment,
        nextOffset,
        limit;

      each(elements, function(el) {
        scrollElement = document.querySelector(el.dataset.scrollElement);
        increment  = parseInt(el.dataset.scrollIncrement);
        nextOffset = newOffset + increment;
        limit      = parseInt(scrollElement.dataset.scrollLimit);

        setVisibility(el, nextOffset, limit);
      });
    };

    resetScroll = function(element) {
      element.scrollTop = 0;
      element.dataset.scrollOffset = 0;
    };

    each(document.querySelectorAll('[data-clipboard-target]'), function(el) {
      var
        clipboard,
        notification;

      clipboard = new Clipboard(el);

      var notify = function(clipboardNotification, notificationText) {
        notification = document.getElementById(clipboardNotification.slice(1));
        notification.textContent = notificationText;
        my_addClass(notification, 'in');
        setTimeout(function() {
          my_removeClass(notification, 'in');
        }, 1400);
      };

      var notifySuccess = function(e) {
        notify(e.trigger.dataset.clipboardNotification, "Copied!");
      };

      var notifyFailure = function(e) {
        //if the copy function failed the text should still be selected, so just ask the user to hit ctrl+c
        notify(e.trigger.dataset.clipboardNotification, "Press Ctrl+C to copy");
      };

      clipboard.on('success', notifySuccess);
      clipboard.on('error', notifyFailure);
    });

    each(scrollElements, function(el) {
      var
        element,
        increment,
        limit,
        offset,
        nextOffset,
        newOffset;

      element = document.querySelector(el.dataset.scrollElement);
      increment = parseInt(el.dataset.scrollIncrement);
      limit     = parseInt(element.dataset.scrollLimit.valueOf());
      offset    = parseInt(element.dataset.scrollOffset.valueOf());

      element.dataset.scrollLimit = limit;

      nextOffset = offset + increment;

      setVisibility(el, nextOffset, limit);

      // Force IE to forget previous scroll top value
      resetScroll(element);

      listenToClick(el, 'click', function() {
        offset = parseInt(element.dataset.scrollOffset);

        newOffset = offset + increment;

        if (inValidRange(newOffset, limit)) {
          scrollTop(element, document.getElementById(newOffset).offsetTop, 400);
          element.dataset.scrollOffset = newOffset;

          setVisibilityAll(scrollElements, newOffset);
        }
      });
    });

    each(document.querySelectorAll('[data-moment]'), function(el) {
      var time = moment(parseInt(el.textContent));
      el.textContent = time.fromNow();
    });

    each(document.querySelectorAll('[data-clipboard-target]'), function(el) {
      el.handleClicks(el, function(e) {
        if (window.parent.squatch.eventBus) {
          window.parent.squatch.eventBus.dispatch('copy_btn_clicked', e.type);
        }
      });

    });
  });

})();
