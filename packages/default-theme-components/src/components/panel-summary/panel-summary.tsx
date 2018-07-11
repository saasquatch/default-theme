import { Component, Prop } from "@stencil/core";

@Component({
  tag: "panel-summary"
})
export class MyComponent {
  @Prop({ context: "data" })
  private data: any;

  render() {
    return [
      <h2 class="squatch-panel-title">
        {
          this.data.variables.widget.REFERRER_WIDGET.content.textVariables
            .panelTitle
        }
      </h2>,

      <div class="squatch-stats">
        <div class="squatch-stats-item">
          <div class="squatch-stats-title">
            {this.data.convertedReferralsCount +
              this.data.unconvertedReferralsCount}
          </div>

          <span class="squatch-stats-description">
            {
              this.data.variables.widget.REFERRER_WIDGET.content.textVariables
                .statsDescriptions.referralsNumber
            }
          </span>
        </div>

        <div class="squatch-stats-item">
          <div class="squatch-stats-title text-green">
            {this.data.totalRewardsEarnedCount}
          </div>

          <span class="squatch-stats-description">
            {
              this.data.variables.widget.REFERRER_WIDGET.content.textVariables
                .statsDescriptions.rewardsNumber
            }
          </span>
        </div>

        <div class="squatch-stats-item">
          <div class="squatch-stats-title">
            {this.data.totalRewardsPendingCount}
          </div>

          <span class="squatch-stats-description">
            {
              this.data.variables.widget.REFERRER_WIDGET.content.textVariables
                .statsDescriptions.rewardsPending
            }
          </span>
        </div>
      </div>
    ];
  }
}
/**
 * 
 * <h2 class="squatch-panel-title">
  {{variables 'widget.REFERRER_WIDGET.content.textVariables.panelTitle'}}
</h2>

<div class="squatch-stats">
  <div class="squatch-stats-item">
    <div class="squatch-stats-title">{{math convertedReferralsCount '+' unconvertedReferralsCount}}</div>

    <span class="squatch-stats-description">{{variables 'widget.REFERRER_WIDGET.content.textVariables.statsDescriptions.referralsNumber'}}</span>
  </div>

  <div class="squatch-stats-item">
    <div class="squatch-stats-title text-green">{{totalRewardsEarnedCount}}</div>

    <span class="squatch-stats-description">{{variables 'widget.REFERRER_WIDGET.content.textVariables.statsDescriptions.rewardsNumber'}}</span>
  </div>

  <div class="squatch-stats-item">
    <div class="squatch-stats-title">{{totalRewardsPendingCount}}</div>

    <span class="squatch-stats-description">{{variables 'widget.REFERRER_WIDGET.content.textVariables.statsDescriptions.rewardsPending'}}</span>
  </div>
</div>

 */
