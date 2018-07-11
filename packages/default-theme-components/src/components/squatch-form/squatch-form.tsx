import { Component, Prop } from "@stencil/core";

@Component({
  tag: "squatch-form",
  shadow: true
})
export class MyComponent {
  @Prop({ context: "data" })
  private data: any;

  render() {
    return <div/>;
  }
}
