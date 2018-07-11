import { Component, Prop } from "@stencil/core";

@Component({
  tag: "attribution-panel"
})
export class MyComponent {
  @Prop({ context: "data" })
  private data: any;

  render() {
    const url =
      "https://get.referralsaasquatch.com/powered-by/?co=" +
      encodeURIComponent(this.data.companyName);
    const text = this.data.variables.widget.REFERRER_WIDGET.content
      .textVariables.attribution;

    return (
      <div class="squatch-attribution">
        <a href={url} target="_blank">
          {text}
        </a>
      </div>
    );

    // <div class="squatch-attribution">
    //   <a href="{{stringFormat "https://get.referralsaasquatch.com/powered-by/?co=%s" (urlencode companyName space="%20")}}" target="_blank">{{variables 'widget.REFERRER_WIDGET.content.textVariables.attribution'}}</a>
    // </div>
  }
}
