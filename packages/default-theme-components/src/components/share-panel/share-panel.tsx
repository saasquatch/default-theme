import { Component, Prop } from "@stencil/core";

@Component({
  tag: "share-panel",
  shadow: true
})
export class MyComponent {
  @Prop({ context: "data" })
  private data: any;

  render() {
    const target = (() => {
      // {{#if (stringCompare mode "POPUP" emptyOnFalse=true)}}
      //  _blank
      // {{else}}
      //     {{#if (stringCompare mode "EMBED" emptyOnFalse=true)}}
      //         _blank
      //     {{else}}
      //         _self
      //     {{/if}}
      // {{/if}}"
      if (this.data.mode === "POPUP") return "_blank";
      if (this.data.mode === "EMBED") return "_blank";
      return "_self";
    })();
    return (
      <main>
        <div class="squatch-share">
          <div class="form-group">
            <div class="input-group">
              <input
                class="form-control"
                id="squatch-share-link"
                value="{{shareLinks.shareLink}}"
                readonly="readonly"
              />

              <span
                class="label label-default fade"
                id="squatch-share-notification"
              >
                {
                  this.data.variables.widget.REFERRER_WIDGET.content
                    .textVariables.shareNotificationSuccess
                }
              </span>

              <span class="input-group-btn">
                <button
                  class="btn btn-primary icon-btn copy"
                  data-clipboard-target="#squatch-share-link"
                  data-clipboard-notification="#squatch-share-notification"
                >
                  <i class="icon icon-link" />
                  <span class="hidden-sm">
                    {
                      this.data.variables.widget.REFERRER_WIDGET.content
                        .textVariables.shareButtons.copy
                    }
                  </span>
                </button>
              </span>
            </div>
          </div>
        </div>

        <div class="clearfix">
          <div class="share-btn-container">
            <a
              class="btn btn-email squatch-share-btn emailShare {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.EMAIL.emailDisplayRule}"
              target={target}
            >
              <i class="icon icon-mail" />
              {
                this.data.variables.widget.REFERRER_WIDGET.content.textVariables
                  .shareButtons.email
              }
            </a>

            <a
              class="btn btn-twitter squatch-share-btn twShare {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.TWITTER.twitterDisplayRule}"
              target={target}
            >
              <i class="icon icon-twitter" />
              {
                this.data.variables.widget.REFERRER_WIDGET.content.textVariables
                  .shareButtons.twitter
              }
            </a>

            <a
              class="btn btn-twitter squatch-share-btn twMobile {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.TWITTER.twitterDisplayRule}"
              target={target}
            >
              <i class="icon icon-twitter" />
              {
                this.data.variables.widget.REFERRER_WIDGET.content.textVariables
                  .shareButtons.twitter
              }
            </a>

            <a
              class="btn btn-sms squatch-share-btn smsShare {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.SMS.smsDisplayRule}"
              target={target}
            >
              <i class="icon icon-chat" />
              {
                this.data.variables.widget.REFERRER_WIDGET.content.textVariables
                  .shareButtons.sms
              }
            </a>

            <a
              class="btn btn-messenger squatch-share-btn messengerShare {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.FBMESSENGER.facebookDisplayRule}"
              target={target}
            >
              <i class="icon icon-messenger" />
              {
                this.data.variables.widget.REFERRER_WIDGET.content.textVariables
                  .shareButtons.facebookMessenger
              }
            </a>

            <a
              class="btn btn-messenger squatch-share-btn messengerMobile {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.FBMESSENGER.facebookDisplayRule}"
              target={target}
            >
              <i class="icon icon-messenger" />
              {
                this.data.variables.widget.REFERRER_WIDGET.content.textVariables
                  .shareButtons.facebookMessenger
              }
            </a>

            <a
              class="btn btn-facebook squatch-share-btn fbShare {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.FACEBOOK.facebookDisplayRule}"
              target={target}
            >
              <i class="icon icon-facebook" />
              {
                this.data.variables.widget.REFERRER_WIDGET.content.textVariables
                  .shareButtons.facebook
              }
            </a>

            <a
              class="btn btn-facebook squatch-share-btn fbMobile {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.FACEBOOK.facebookDisplayRule}"
              target={target}
            >
              <i class="icon icon-facebook" />
              {
                this.data.variables.widget.REFERRER_WIDGET.content.textVariables
                  .shareButtons.facebook
              }
            </a>

            <a
              class="btn btn-whatsapp squatch-share-btn whatsappShare {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.WHATSAPP.whatsappDisplayRule}"
              target={target}
            >
              <i class="icon icon-whatsapp" />
              {
                this.data.variables.widget.REFERRER_WIDGET.content.textVariables
                  .shareButtons.whatsapp
              }
            </a>

            <a
              class="btn btn-linkedin squatch-share-btn linkedinShare {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.LINKEDIN.linkedinDisplayRule}"
              target={target}
            >
              <i class="icon icon-linkedin" />
              {
                this.data.variables.widget.REFERRER_WIDGET.content.textVariables
                  .shareButtons.linkedin
              }
            </a>

            <a
              class="btn btn-linkedin squatch-share-btn linkedinMobile {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.LINKEDIN.linkedinDisplayRule}"
              target={target}
            >
              <i class="icon icon-linkedin" />
              {
                this.data.variables.widget.REFERRER_WIDGET.content.textVariables
                  .shareButtons.linkedin
              }
            </a>
          </div>
        </div>
      </main>
    );
  }
}

/*
<div class="squatch-share">
  <div class="form-group">
    <div class="input-group">
      <input class="form-control" id="squatch-share-link" value="{{shareLinks.shareLink}}" readonly="readonly">

      <span class="label label-default fade" id="squatch-share-notification">{this.data.variables.widget.REFERRER_WIDGET.content.textVariables.shareNotificationSuccess}</span>

      <span class="input-group-btn">
        <button class="btn btn-primary icon-btn copy" data-clipboard-target="#squatch-share-link" data-clipboard-notification="#squatch-share-notification">
          <i class="icon icon-link"></i>
          <span class="hidden-sm">{this.data.variables.widget.REFERRER_WIDGET.content.textVariables.shareButtons.copy}</span>
        </button>
      </span>
    </div>
  </div>

  <div class="clearfix">
    <div class="share-btn-container">
      <a class="btn btn-email squatch-share-btn emailShare {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.EMAIL.emailDisplayRule}"
         target={target}>
        <i class="icon icon-mail"></i>
        {this.data.variables.widget.REFERRER_WIDGET.content.textVariables.shareButtons.email}
      </a>

      <a class="btn btn-twitter squatch-share-btn twShare {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.TWITTER.twitterDisplayRule}"
         target={target}>
        <i class="icon icon-twitter"></i>
        {this.data.variables.widget.REFERRER_WIDGET.content.textVariables.shareButtons.twitter}
      </a>

      <a class="btn btn-twitter squatch-share-btn twMobile {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.TWITTER.twitterDisplayRule}"
         target={target}>
        <i class="icon icon-twitter"></i>
        {this.data.variables.widget.REFERRER_WIDGET.content.textVariables.shareButtons.twitter}
      </a>

      <a class="btn btn-sms squatch-share-btn smsShare {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.SMS.smsDisplayRule}"
         target={target}>
        <i class="icon icon-chat"></i>
        {this.data.variables.widget.REFERRER_WIDGET.content.textVariables.shareButtons.sms}
      </a>

      <a class="btn btn-messenger squatch-share-btn messengerShare {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.FBMESSENGER.facebookDisplayRule}"
         target={target}>
        <i class="icon icon-messenger"></i>
        {this.data.variables.widget.REFERRER_WIDGET.content.textVariables.shareButtons.facebookMessenger}
      </a>

      <a class="btn btn-messenger squatch-share-btn messengerMobile {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.FBMESSENGER.facebookDisplayRule}"
         target={target}>
        <i class="icon icon-messenger"></i>
        {this.data.variables.widget.REFERRER_WIDGET.content.textVariables.shareButtons.facebookMessenger}
      </a>

      <a class="btn btn-facebook squatch-share-btn fbShare {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.FACEBOOK.facebookDisplayRule}"
         target={target}>
        <i class="icon icon-facebook"></i>
        {this.data.variables.widget.REFERRER_WIDGET.content.textVariables.shareButtons.facebook}
      </a>

      <a class="btn btn-facebook squatch-share-btn fbMobile {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.FACEBOOK.facebookDisplayRule}"
         target={target}>
        <i class="icon icon-facebook"></i>
        {this.data.variables.widget.REFERRER_WIDGET.content.textVariables.shareButtons.facebook}
      </a>

      <a class="btn btn-whatsapp squatch-share-btn whatsappShare {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.WHATSAPP.whatsappDisplayRule}"
         target={target}>
        <i class="icon icon-whatsapp"></i>
        {this.data.variables.widget.REFERRER_WIDGET.content.textVariables.shareButtons.whatsapp}
      </a>
    
      <a class="btn btn-linkedin squatch-share-btn linkedinShare {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.LINKEDIN.linkedinDisplayRule}"
         target={target}>
        <i class="icon icon-linkedin"></i>
        {this.data.variables.widget.REFERRER_WIDGET.content.textVariables.shareButtons.linkedin}
      </a>

      <a class="btn btn-linkedin squatch-share-btn linkedinMobile {this.data.variables.widget.REFERRER_WIDGET.content.sharingOptions.LINKEDIN.linkedinDisplayRule}"
         target={target}>
        <i class="icon icon-linkedin"></i>
        {this.data.variables.widget.REFERRER_WIDGET.content.textVariables.shareButtons.linkedin}
      </a>
    </div>  
  </div>
</div>
*/
