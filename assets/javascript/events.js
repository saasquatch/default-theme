function invalidInput(element, fn) {
  my_addClass(element, 'invalid');
  element.onkeypress = function() {
    if (fn(element.value)) {
      my_removeClass(this, 'invalid');
      my_addClass(this, 'valid');
    }
  }
}

function getEmailList(element) {
  var emails = element.value;
  emails = emails.split(',');
  for (var i = 0; i < emails.length; i++) {
    emails[i] = emails[i].replace(/[<>]/g, '');
  }
  return emails;
}

function invalidEmails(emails) {
  // validate a provided list of emails and return true if any are invalid
  for (var i = 0; i < emails.length; i++) {
    if(!/\S+@\S+\.\S+/.test(emails[i])) {
      return true;
    }
  }
  return false;
}

function contactsHandler() {
  // setup invitation sending click handler
  var sendInvitesBtn = document.getElementById('squatch-send-invites');
  handleClicks(sendInvitesBtn, function(e) {
    var emails = getEmailList(document.getElementById('contact-list'));
    var updateInvitesBtn = function(addClass, removeClass, btnText) {
      my_removeClass(sendInvitesBtn, removeClass);
      my_addClass(sendInvitesBtn, addClass);
      sendInvitesBtn.value = btnText;
    }

    if (window.frameElement && window.frameElement.squatchJsApi) {
      window.frameElement.squatchJsApi._inviteContacts(window.squatch, emails);
      updateInvitesBtn('btn-success', 'btn-primary', 'Invites Sent!');
      sendInvitesBtn.blur();
      setTimeout(function(){
        updateInvitesBtn('btn-primary', 'btn-success', 'Send Invites');
        document.getElementById('contact-list').value = ''; // reset email list to empty
        my_addClass(sendInvitesBtn, 'disabled');
      }, 2000);
    }
  });

  // setup invite input handler
  var inviteInput = document.getElementById('contact-list');
  inviteInput.oninput = function() {
    if(inviteInput.value) {
      // enable if valid email list input is found
      var emails = getEmailList(document.getElementById('contact-list'));
      if(invalidEmails(emails)) {
        my_addClass(sendInvitesBtn, 'disabled');
      } else {
        my_removeClass(sendInvitesBtn, 'disabled');
      }
    } else {
      // disabled by default
      my_addClass(sendInvitesBtn, 'disabled');
    }
  };
  inviteInput.onpropertychange = inviteInput.oninput; // for IE8 - see https://stackoverflow.com/a/26202266
}

function emailFormHandler() {
  var sendEmailBtn = document.getElementById('squatch-send-email');
  var firstName = document.getElementById('squatch-user-firstname');
  var lastName = document.getElementById('squatch-user-lastname');
  var emailInput = document.getElementById('squatch-user-email');

  handleClicks(sendEmailBtn, function() {
    var noErrors = true;

    if (firstName && firstName.value.length < 1) {
      noErrors = false;
      invalidInput(firstName, function(e) { return e.length < 1; });
    }

    if (lastName && lastName.value.length < 1) {
      noErrors = false;
      invalidInput(lastName, function(e) { return e.length < 1; });
    }

    if (!isValidEmail(emailInput.value)) {
      noErrors = false;
      invalidInput(emailInput, function(e) { return isValidEmail(e); });
    }

    if (noErrors) {
      var paramsObj = {};

      if (firstName) {
        my_removeClass(firstName, 'invalid');
        paramsObj.firstName = firstName.value;
      }

      if (lastName) {
         my_removeClass(lastName, 'invalid');
         paramsObj.lastName = lastName.value;
      }

      if (emailInput) {
        my_removeClass(emailInput, 'invalid');
        paramsObj.email = emailInput.value;
      }

      if (window.frameElement && window.frameElement.squatchJsApi) {
        var widget = window.frameElement.squatchJsApi;

        if (window.parent.squatch && window.parent.squatch.widgets().eventBus) {
          window.parent.squatch.widgets().eventBus.dispatch('submit_email', this, widget, paramsObj);
        } else {
          window.frameElement.squatchJsApi.reload(paramsObj);
        }
      }
    }
  });
}

function messengerHandler() {
  var messengerBtn = document.getElementsByClassName('messengerShare')[0];

  if (!messengerBtn) return;

  var messengerUrl = 'https://www.facebook.com/dialog/send?app_id=' + squatch.user.facebook.appId + '&link=' + squatch.user.facebook.link + '&redirect_uri=' + squatch.user.facebook.redirectUrl;
  messengerBtn.href = messengerUrl;

  handleClicks(messengerBtn, function(e) {
    // If it's not mobile, don't use href link
    if (e.type != 'touchstart') {
      e.preventDefault();

      var url = messengerUrl + "&display=popup";
      window.open(url, 'fb-messenger', 'status=0,width=620,height=400');
    }

    if (window.frameElement && window.frameElement.squatchJsApi) {
      window.frameElement.squatchJsApi._shareEvent(window.squatch, 'FBMESSENGER');
    }
  });
}

function smsHandler() {
  var smsBtn = document.getElementsByClassName('smsShare')[0];

  if (!smsBtn) return;

  // Test url
  var smsUrl = 'sms:?&body=' + squatch.user.sms.body;
  smsBtn.href = smsUrl;

  var md = new MobileDetect('Version/4.0 Mobile Safari/534.30');
  var UA = md.userAgent();

  if (UA === 'Safari') {
    smsBtn.target = '_parent';
  }

  handleClicks(smsBtn, function(e) {
    if (window.frameElement && window.frameElement.squatchJsApi) {
      window.frameElement.squatchJsApi._shareEvent(window.squatch, 'SMS');
    }
  });
}

function whatsappHandler() {
  var whatsappBtn = document.getElementsByClassName('whatsappShare')[0];

  if (!whatsappBtn) return;

  var whatsappUrl = 'whatsapp://send?text=' + squatch.user.whatsapp.body;
  whatsappBtn.href = whatsappUrl;

  handleClicks(whatsappBtn, function(e) {
    if (window.frameElement && window.frameElement.squatchJsApi) {
      window.frameElement.squatchJsApi._shareEvent(window.squatch, 'WHATSAPP');
    }
  });
}

function facebookHandler() {
  var facebookBtn = document.getElementsByClassName('fbShare')[0];

  if (!facebookBtn) return;

  var pictureString = (squatch.user.facebook.shareImage == "" || squatch.user.facebook.shareImage === null) ? "" : "&picture="+squatch.user.facebook.shareImage;
  var fbUrl = "https://www.facebook.com/dialog/feed?app_id=" + squatch.user.facebook.appId + "&link=" + squatch.user.facebook.link + "&name=" + squatch.user.facebook.title + "&description=" + squatch.user.facebook.summary + pictureString+ "&redirect_uri=" + squatch.user.facebook.redirectUrl;
  facebookBtn.href = fbUrl;

  handleClicks(facebookBtn, function(e) {
    // If it's not mobile, don't use href link
    if (e.type != 'touchstart') {
      e.preventDefault();

      var url = fbUrl + "&display=popup";
      window.open(url, 'fb', 'status=0,width=620,height=400');
    }

    if (window.frameElement && window.frameElement.squatchJsApi) {
      window.frameElement.squatchJsApi._shareEvent(window.squatch, 'FACEBOOK');
    }
  });
}

function twitterHandler() {
  var twitterBtn = document.getElementsByClassName('twShare')[0];
  var twUrl = "https://twitter.com/intent/tweet?source=webclient&text=" + squatch.user.twitter.message;

  if (!twitterBtn) return;
  twitterBtn.href = twUrl;

  handleClicks(twitterBtn, function(e) {
    if (e.type != 'touchstart') {
      e.preventDefault();
      window.open(twUrl, 'twitter', 'status=1,width=575,height=400');
    }

    if (window.frameElement && window.frameElement.squatchJsApi) {
      window.frameElement.squatchJsApi._shareEvent(window.squatch, 'TWITTER');
    }
  });
}

function emailHandler() {
  var emailBtn = document.getElementsByClassName('emailShare')[0];
  var emailUrl = squatch.user.email.share.mailToLink;

  if(!emailBtn) return;
  // emailBtn.href = emailUrl;

  var md = new MobileDetect('Version/4.0 Mobile Safari/534.30');
  var UA = md.userAgent();

  emailBtn.href = emailUrl;

  if (UA === 'Safari') {
    emailBtn.target = '_parent';

    handleClicks(emailBtn, function(e) {
      if (window.frameElement && window.frameElement.squatchJsApi) {
        window.frameElement.squatchJsApi._shareEvent(window.squatch, 'EMAIL');
      }
    });
  } else {
    handleClicks(emailBtn, function(e) {
      if (e.type != 'touchstart') {
        e.preventDefault();

        var mailurl = emailUrl;
        mailTo(mailurl);
      }

      if (window.frameElement && window.frameElement.squatchJsApi) {
        window.frameElement.squatchJsApi._shareEvent(window.squatch, 'EMAIL');
      }
    });
  }
}
