import { Component, Prop } from "@stencil/core";

@Component({
  tag: "squatch-panel",
  shadow: true
})
export class MyComponent {
  @Prop({ context: "data" })
  private data: any;

  render() {
    return [
      <div id="squatch-panel">
        <panel-summary />
        <referrals
          options={
            this.data.variables.widget.REFERRER_WIDGET.content
              .widgetCustomization.referralsPanel
          }
        />
        <attribution-panel />
      </div>,
      <actions-panel />
    ];
  }
}

/***
 * 
 * <div id="squatch-panel">
  {{> panel_summary}}
  {{> referrals options=(variables-object 'widget.REFERRER_WIDGET.content.widgetCustomization.referralsPanel')}}
  {{> attribution}}
</div>

{{> actions}}
 */
