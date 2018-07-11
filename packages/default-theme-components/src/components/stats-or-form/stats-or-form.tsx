import { Component, Prop } from "@stencil/core";

@Component({
  tag: "stats-or-form",
  shadow: true
})
export class MyComponent {
  @Prop({ context: "data" })
  private data: any;

  render() {
    const squatchPanel = <squatch-panel />;
    const squatchForm = <squatch-form />;

    if (
      this.data.variables.widget.REFERRER_WIDGET.content.widgetCustomization
        .registrationFields.email
    ) {
      if (
        this.data.variables.widget.REFERRER_WIDGET.content.widgetCustomization
          .registrationFields.firstName
      ) {
        if (
          this.data.variables.widget.REFERRER_WIDGET.content.widgetCustomization
            .registrationFields.lastName
        ) {
          if (this.data.user.email) {
            if (this.data.user.firstName) {
              if (this.data.user.lastName) {
                return squatchPanel;
              } else {
                return squatchForm;
              }
            } else {
              return squatchForm;
            }
          } else {
            return squatchForm;
          }
        } else {
          if (this.data.user.email) {
            if (this.data.user.firstName) {
              return squatchPanel;
            } else {
              return squatchForm;
            }
          } else {
            return squatchForm;
          }
        }
      } else {
        if (this.data.user.email) {
          return squatchPanel;
        } else {
          return squatchForm;
        }
      }
    } else {
      if (
        this.data.variables.widget.REFERRER_WIDGET.content.widgetCustomization
          .registrationFields.firstName
      ) {
        if (
          this.data.variables.widget.REFERRER_WIDGET.content.widgetCustomization
            .registrationFields.lastName
        ) {
          if (this.data.user.firstName) {
            if (this.data.user.lastName) {
              return squatchPanel;
            } else {
              return squatchForm;
            }
          } else {
            return squatchForm;
          }
        } else {
          if (this.data.user.firstName) {
            return squatchPanel;
          } else {
            return squatchForm;
          }
        }
      } else {
        if (
          this.data.variables.widget.REFERRER_WIDGET.content.widgetCustomization
            .registrationFields.lastName
        ) {
          if (this.data.user.lastName) {
            return squatchPanel;
          } else {
            return squatchForm;
          }
        } else {
          return squatchPanel;
        }
      }
    }
  }
}

/**
 * 
 * if (this.data.variables.widget.REFERRER_WIDGET.content.widgetCustomization.registrationFields.email){
        if (this.data.variables.widget.REFERRER_WIDGET.content.widgetCustomization.registrationFields.firstName){
          if (this.data.variables.widget.REFERRER_WIDGET.content.widgetCustomization.registrationFields.lastName){
            if (this.data.user.email){
              if (this.data.user.firstName){
                if (this.data.user.lastName){
                  return squatchPanel
                }else{ return squatchForm }
              }else{ return squatchForm }
            }else{ return squatchForm }
          }else{
            if (this.data.user.email){
              if (this.data.user.firstName){
                return squatchPanel
              }else{ return squatchForm }
            }else{ return squatchForm }
          }
        }else{
          if (this.data.user.email){
            return squatchPanel
          }else{ return squatchForm }
        }
      }else{
        if (this.data.variables.widget.REFERRER_WIDGET.content.widgetCustomization.registrationFields.firstName){
          if (this.data.variables.widget.REFERRER_WIDGET.content.widgetCustomization.registrationFields.lastName){
            if (this.data.user.firstName){
              if (this.data.user.lastName){
                return squatchPanel
              }else{ return squatchForm }
            }else{ return squatchForm }
          }else{
            if (this.data.user.firstName){
              return squatchPanel
            }else{ return squatchForm }
          }
        }else{
          if (this.data.variables.widget.REFERRER_WIDGET.content.widgetCustomization.registrationFields.lastName){
            if (this.data.user.lastName){
              return squatchPanel
            }else{ return squatchForm }
          }else{ return squatchPanel }
        }
      }
 * 
 * 
 */
