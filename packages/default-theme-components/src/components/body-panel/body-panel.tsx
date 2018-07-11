import { Component, Prop } from "@stencil/core";

@Component({
  tag: "body-panel"
})
export class MyComponent {
  @Prop({ context: "data" })
  private data: any;

  render() {
    return (
      <div class="squatch-body">
        <h1 class="squatch-title">
          {
            this.data.variables.widget.REFERRER_WIDGET.content
              .widgetCustomization.heading
          }
        </h1>

        <button
          class="close squatch-header-close"
          data-close-panel="#squatch-panel"
        >
          {
            this.data.variables.widget.REFERRER_WIDGET.content.textVariables
              .panelClose
          }
        </button>

        <div class="squatch-lead">
          {
            this.data.variables.widget.REFERRER_WIDGET.content
              .widgetCustomization.headerDetails
          }
        </div>
        <div class="squatch-cta">
          {
            this.data.variables.widget.REFERRER_WIDGET.content
              .widgetCustomization.shareCodeDetails
          }
        </div>
        <share-panel />
      </div>
    );
  }
}

// <div class="squatch-body">
// {{> title}}

// <button class="close squatch-header-close" data-close-panel="#squatch-panel">{{variables 'widget.REFERRER_WIDGET.content.textVariables.panelClose'}}</button>

// {{> lead}}
// {{> cta}}
// {{> share}}
// </div>
