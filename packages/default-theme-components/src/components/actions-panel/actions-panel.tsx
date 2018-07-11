import { Component, Prop } from "@stencil/core";

@Component({
  tag: "actions-panel"
})
export class MyComponent {
  @Prop({ context: "data" })
  private data: any;

  render() {
    function dataReferredBy() {
      //     {{#if referredBy.hasCancelledReferredReward}}
      //       data-referredBy="0"
      //     {{else}}
      //       {{#unless referredBy.dateReferred}}
      //           data-referredBy="0"
      //       {{/unless}}
      //     {{/if}}
      if (this.data.referredBy.hasCancelledReferredReward) {
        return 0;
      } else {
        if (!this.data.referredBy.dateReferred) {
          return 0;
        }
      }
    }

    // {{#if referredBy.dateReferred}}
    //   {{#if referredBy.hasCancelledReferredReward}}
    //     {{nonCancelledReferralAndRewardsListLength}}
    //   {{else}}
    //     {{math nonCancelledReferralAndRewardsListLength '+ 1'}}
    //   {{/if}}
    // {{else}}
    //   {{nonCancelledReferralAndRewardsListLength}}
    // {{/if}}
    function dataReferrals() {
      if (this.data.referredBy.dateReferred) {
        if (this.data.referredBy.hasCancelledReferredReward) {
          return this.data.nonCancelledReferralAndRewardsListLength;
        } else {
          return this.data.nonCancelledReferralAndRewardsListLength + 1;
        }
      } else {
        return this.data.nonCancelledReferralAndRewardsListLength;
      }
    }

    const isDisabled = !this.data.hasNonCancelledReferralsOrRewards;
    const buttonClass = isDisabled
      ? "btn btn-default disabled"
      : "btn btn-default";

    function buttonText() {
      // {{#if referrals}}
      //       {{variables 'widget.REFERRER_WIDGET.content.textVariables.referralsScroll.showReferrals'}}
      //     {{else}}
      //       {{#if referredBy.dateReferred}}
      //         {{variables 'widget.REFERRER_WIDGET.content.textVariables.referralsScroll.showReferrals'}}
      //       {{else}}
      //         {{#if rewardsBySource.MANUAL}}
      //           {{variables 'widget.REFERRER_WIDGET.content.textVariables.referralsScroll.showReferrals'}}
      //         {{else}}
      //           {{variables 'widget.REFERRER_WIDGET.content.textVariables.noReferrals'}}
      //         {{/if}}
      //       {{/if}}
      //     {{/if}}
      if (this.data.referrals)
        return this.data.variables.widget.REFERRER_WIDGET.content.textVariables
          .referralsScroll.showReferrals;
      if (this.data.referredBy.dateReferred)
        return this.data.variables.widget.REFERRER_WIDGET.content.textVariables
          .referralsScroll.showReferrals;
      if (this.data.rewardsBySource.MANUAL)
        return this.data.variables.widget.REFERRER_WIDGET.content.textVariables
          .referralsScroll.showReferrals;
      return this.data.variables.widget.REFERRER_WIDGET.content.textVariables
        .noReferrals;
    }
    const text = buttonText.apply(this);
    return (
      <div
        class="squatch-actions"
        data-referrals={dataReferrals}
        data-referredBy={dataReferredBy}
      >
        <button data-open-panel="#squatch-panel" class={buttonClass}>
          {text}
        </button>
        <attribution-panel />
      </div>
    );
  }
}