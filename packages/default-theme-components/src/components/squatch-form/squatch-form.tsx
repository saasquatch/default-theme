import { Component, Prop } from "@stencil/core";

@Component({
  tag: "squatch-form"
})
export class MyComponent {
  @Prop({ context: "data" })
  private data: any;

  render() {
    const fields = this.data.variables.widget.REFERRER_WIDGET.content
      .widgetCustomization.registrationFields;

    let classes = ["squatch-register"];

    if(!fields.email && !fields.lastName && !fields.firstName){
      //   {{#unless fields.email}}
      //   {{#unless fields.lastName}}
      //     {{#unless fields.firstName}}
      //       hidden
      //     {{/unless}}
      //   {{/unless}}
      // {{/unless}}">
      classes = [...classes, "hidden"];
    }

    return (
      <div class={classes.join(" ")}>
        {
          this.data.variables.widget.REFERRER_WIDGET.content.widgetCustomization
            .registrationHeader
        }

        <div class="form">
          {fields.firstName && (
            <input
              id="squatch-user-firstname"
              class="form-control input-field"
              placeholder="First Name"
            />
          )}
          {fields.lastName && (
            <input
              id="squatch-user-lastname"
              class="form-control input-field"
              placeholder="Last Name"
            />
          )}
          {fields.email && (
            <input
              id="squatch-user-email"
              class="form-control input-field"
              placeholder="Email"
            />
          )}
          <button id="squatch-send-email" class="btn btn-primary">
            {
              this.data.variables.widget.REFERRER_WIDGET.content.textVariables.registerButton
            }
          </button>
        </div>
      </div>
    );
  }
}
