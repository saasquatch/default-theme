// src/global/myObj.ts

export default (function() {
  return {
    preview: false,
    locale: null,
    tenantAlias: "aio2kni24zlqr",
    companyName: "Eric - New Program Project",
    user: {
      id: "12341",
      accountId: "abcd1",
      referralCode: "BOBTESTERSON2",
      email: "test@example.com",
      imageUrl: "",
      firstName: "Bob",
      lastName: "Testerson"
    },
    referredBy: null,
    referrals: [],
    rewardBalances: [],
    isSecureUrl: false,
    shareLinks: {
      shareLink: "http://ssqt.co/m5eg7NA",
      facebookShareLink: "http://ssqt.co/m9eg7NA",
      twitterShareLink: "http://ssqt.co/mMeg7NA",
      emailShareLink: "http://ssqt.co/moeg7NA",
      linkedinShareLink: "http://ssqt.co/m7eg7NA",
      mobileShareLink: "http://ssqt.co/meeg7NA",
      mobileFacebookShareLink: "http://ssqt.co/mneg7NA",
      mobileTwitterShareLink: "http://ssqt.co/mCeg7NA",
      mobileEmailShareLink: "http://ssqt.co/mEeg7NA",
      EMBED: {
        shareLink: "http://ssqt.co/mQeg7NA",
        facebookShareLink: "http://ssqt.co/mweg7NA",
        twitterShareLink: "http://ssqt.co/mceg7NA",
        emailShareLink: "http://ssqt.co/mJeg7NA",
        linkedinShareLink: "http://ssqt.co/mHeg7NA"
      },
      POPUP: {
        shareLink: "http://ssqt.co/m5eg7NA",
        facebookShareLink: "http://ssqt.co/m9eg7NA",
        twitterShareLink: "http://ssqt.co/mMeg7NA",
        emailShareLink: "http://ssqt.co/moeg7NA",
        linkedinShareLink: "http://ssqt.co/m7eg7NA"
      },
      HOSTED: {
        shareLink: "http://ssqt.co/mteg7NA",
        facebookShareLink: "http://ssqt.co/mueg7NA",
        twitterShareLink: "http://ssqt.co/mSeg7NA",
        emailShareLink: "http://ssqt.co/mleg7NA",
        linkedinShareLink: "http://ssqt.co/mYeg7NA"
      },
      MOBILE: {
        shareLink: "http://ssqt.co/meeg7NA",
        facebookShareLink: "http://ssqt.co/mneg7NA",
        twitterShareLink: "http://ssqt.co/mCeg7NA",
        emailShareLink: "http://ssqt.co/mEeg7NA",
        linkedinShareLink: "http://ssqt.co/m3eg7NA"
      },
      EMAIL: {
        shareLink: "http://ssqt.co/mPeg7NA",
        facebookShareLink: "http://ssqt.co/mTeg7NA",
        twitterShareLink: "http://ssqt.co/mGeg7NA",
        emailShareLink: "http://ssqt.co/mbeg7NA",
        linkedinShareLink: "http://ssqt.co/m1eg7NA"
      }
    },
    mode: "POPUP",
    rewardLimitReached: false,
    programDetails: {
      referrerRewardDetails: {
        rewardType: "CREDIT",
        name: "Dollar Credit",
        unit: "CENTS",
        credit: 1000
      },
      referredRewardDetails: {
        rewardType: "CREDIT",
        name: "Dollar Credit",
        unit: "CENTS",
        credit: 1500
      }
    },
    newReferral: null,
    convertedReferral: null,
    rewards: [],
    convertedReferralsCount: 0,
    unconvertedReferralsCount: 0,
    totalRewardsEarnedCounT: 0,
    totalRewardsPendingCount: 0,
    assetVersion: "Q4nHgme3",
    includeSquatchHeaderScripts: true,
    headerVersion: "29",
    timeCreditRewardBalance: null,
    dollarCreditRewardBalance: null,
    discountRewardBalance: null,
    referralsLength: 0,
    rewardsLength: 0,
    referralAndRewardListLength: 0,
    nonCancelledReferralAndRewardsListLength: 0,
    rewardsBySource: {},
    hasNonCancelledReferralsOrRewards: false,
    totalConvertedValues: {
      TIME_CREDIT: 0,
      CREDIT: 0,
      GIFTCODE: 0,
      PCT_DISCOUNT: 0,
      INTEGRATION: 0,
      FEATURE: 0,
      FUELTANK: 0
    },
    variablesSchema: {
      title: "root",
      self: {
        vendor: "referral-saasquatch",
        name: "rs_schema",
        format: "jsonschema",
        version: "1-3-0"
      },
      type: "object",
      properties: {
        jsOptions: {
          type: "object",
          properties: {
            widget: {
              type: "object",
              properties: {
                defaultWidgetType: {
                  type: "string",
                  title: "Default Widget Type",
                  default: "REFERRER_WIDGET",
                  enum: ["REFERRER_WIDGET", "CONVERSION_WIDGET"],
                  options: {
                    enum_titles: ["Referrer's Widget", "Referred User Widget"]
                  }
                }
              }
            },
            conversionUrls: { type: "array", items: { type: "string" } },
            widgetUrlMappings: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  url: { type: "string" },
                  showAsCTA: { type: "boolean" },
                  displayOnLoad: { type: "boolean" },
                  widgetType: {
                    type: "string",
                    enum: ["REFERRER_WIDGET", "CONVERSION_WIDGET"],
                    options: {
                      enum_titles: ["Referrer's Widget", "Referred User Widget"]
                    }
                  }
                }
              }
            },
            fuelTankAutofillUrls: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  url: { type: "string" },
                  formSelector: { type: "string" }
                }
              }
            }
          }
        },
        widget: {
          type: "object",
          properties: {
            REFERRER_WIDGET: {
              type: "object",
              properties: {
                configuration: {
                  properties: { themeMapping: { default: "widget" } }
                },
                content: {
                  properties: {
                    widgetCustomization: {
                      allOf: [
                        {
                          title: "Customize Referral Widget",
                          properties: {
                            widgetFont: {
                              default:
                                '"Helvetica Neue",Helvetica,Arial,sans-serif'
                            },
                            headerColor: { default: "#4486E1" },
                            heading: {
                              default:
                                "Give {{format-reward 'REFERRED' includeUni:true}} and Get {{format-reward 'REFERRER' includeUni:true}}!"
                            },
                            headerDetails: {
                              default:
                                "Give a friend {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}} and receive {{format-reward 'REFERRER' includeUni:true includeContextualTex:true}} for yourself when they pay their first bill."
                            },
                            shareCodeDetails: {
                              type: "string",
                              format: "markdown",
                              title: "Call To Action Text",
                              default:
                                "Share the link below or use the code **{{user.referralCode}}**",
                              options: {
                                input_height: "100px",
                                validate: ["handlebars"]
                              }
                            },
                            registrationHeader: {
                              type: "string",
                              format: "markdown",
                              title: "Registration Header",
                              default:
                                "Thanks for sending your first referral!<br>Give us your email to ensure you get rewarded when your referral is used.",
                              options: {
                                input_height: "100px",
                                validate: ["handlebars"]
                              }
                            },
                            registrationFields: {
                              title: "Required Registration Fields",
                              type: "object",
                              properties: {
                                firstName: {
                                  title: "First Name",
                                  type: "boolean",
                                  format: "checkbox",
                                  default: true
                                },
                                lastName: {
                                  title: "Last Name",
                                  type: "boolean",
                                  format: "checkbox",
                                  default: true
                                },
                                email: {
                                  title: "Email",
                                  type: "boolean",
                                  format: "checkbox",
                                  default: true
                                }
                              }
                            },
                            referralsPanel: {
                              title: "Rewards Panel Options",
                              type: "object",
                              properties: {
                                showReferrer: {
                                  title: 'Show "Referred You" entry',
                                  type: "boolean",
                                  format: "checkbox",
                                  default: true
                                }
                              }
                            }
                          }
                        },
                        {
                          $ref:
                            "#/definitions/widget/definitions/content/definitions/generalBody"
                        }
                      ]
                    },
                    sharingOptions: {
                      allOf: [
                        {
                          $ref:
                            "#/definitions/widget/definitions/content/definitions/shareContent"
                        }
                      ]
                    },
                    textVariables: {
                      allOf: [
                        {
                          title: "Text Variables",
                          type: "object",
                          properties: {
                            lang: { default: "en" },
                            attribution: { default: "Powered By Saasquatch" },
                            panelClose: { default: "Close" },
                            registerButton: { default: "Continue" },
                            panelTitle: { default: "Rewards Dashboard" },
                            statsDescriptions: {
                              title: "Referral Stat Descriptions",
                              type: "object",
                              properties: {
                                referralsNumber: {
                                  default: "Friends Referred"
                                },
                                rewardsNumber: { default: "Rewards Earned" },
                                rewardsPending: { default: "Rewards Pending" }
                              }
                            },
                            referralsTitle: { default: "Referral Details" },
                            referralsScroll: {
                              title: "Referral Scroll Actions",
                              type: "object",
                              properties: {
                                showReferrals: { default: "Show Details" },
                                hideReferrals: { default: "Hide Details" },
                                scrollPrevious: { default: "Previous" },
                                scrollNext: { default: "View More" }
                              }
                            },
                            shareNotificationSuccess: { default: "Copied!" },
                            shareNotificationFailure: {
                              default: "Press Ctrl+C to copy"
                            },
                            shareButtons: {
                              title: "Share Buttons",
                              type: "object",
                              properties: {
                                copy: { default: "Copy" },
                                email: { default: "Email" },
                                twitter: { default: "Tweet" },
                                sms: { default: "SMS" },
                                facebookMessenger: { default: "Messenger" },
                                facebook: { default: "Share" },
                                whatsapp: { default: "WhatsApp" },
                                linkedin: { default: "LinkedIn" }
                              }
                            },
                            referredByUser: {
                              properties: {
                                description: { default: "Referring User" },
                                heading: { default: "Referred You" },
                                referred: { default: "Referred User" }
                              }
                            },
                            arbitraryReward: {
                              properties: {
                                description: { default: "No Referral" },
                                heading: { default: "Applied" }
                              }
                            },
                            referralReward: {
                              properties: {
                                credit: {
                                  properties: {
                                    value: {
                                      default: "${{math reward.value ' / 100'}}"
                                    },
                                    description: { default: "Free Credit" }
                                  }
                                },
                                fuelTank: {
                                  properties: {
                                    value: {
                                      default: "CODE: {{reward.fuelTankCode}}"
                                    }
                                  }
                                },
                                time: {
                                  properties: {
                                    value: {
                                      default:
                                        "{{reward.value}} month<span clas:\"hidden-{{math reward.value '== 1'}}\">s</span>"
                                    },
                                    description: { default: "Free Time" }
                                  }
                                },
                                giftcard: {
                                  properties: {
                                    description: { default: "Gift card" }
                                  }
                                },
                                percent: {
                                  properties: {
                                    value: { default: "{{reward.value}}%" },
                                    title: { default: "Discount" },
                                    description: { default: "Discount Earned" }
                                  }
                                }
                              }
                            },
                            uncompletedReferral: {
                              properties: {
                                user: { default: "Trial User" },
                                title: { default: "Referred" }
                              }
                            },
                            completedReferral: {
                              properties: {
                                user: { default: "Paid User" },
                                title: { default: "Signed Up" }
                              }
                            },
                            pendingReward: {
                              properties: {
                                referredReward: {
                                  default:
                                    "{{format-reward 'REFERRED' includeUni:true}} Pending"
                                },
                                referrerReward: {
                                  default:
                                    "{{format-reward 'REFERRER' includeUni:true}} Pending"
                                },
                                title: { default: "Trial Signup" },
                                credit: { default: "Credit Pending" },
                                giftcard: { default: "Gift card Pending" },
                                percent: { default: "Discount Pending" }
                              }
                            },
                            noReferrals: { default: "No Referrals Yet..." },
                            nonReferralReward: {
                              properties: {
                                manualTitle: { default: "Reward" },
                                programTitle: { default: "Reward" },
                                creditReward: {
                                  default: "${{math value '/ 100'}}"
                                },
                                timeReward: {
                                  default:
                                    "{{value}} Month<span clas:\"hidden-{{math value '== 1'}}\">s</span>"
                                },
                                description: { default: "Reward Given" },
                                percentDescription: {
                                  default: "Discount Earned"
                                }
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                cta: {
                  type: "object",
                  properties: {
                    configuration: {
                      $ref:
                        "#/definitions/widget/definitions/cta/definitions/configuration"
                    },
                    content: {
                      allOf: [
                        {
                          properties: {
                            buttonText: { default: "Refer Friends For Rewards" }
                          }
                        },
                        {
                          $ref:
                            "#/definitions/widget/definitions/cta/definitions/content"
                        }
                      ]
                    }
                  }
                }
              }
            },
            CONVERSION_WIDGET: {
              type: "object",
              properties: {
                configuration: {
                  properties: { themeMapping: { default: "conversion-widget" } }
                },
                content: {
                  properties: {
                    widgetCustomization: {
                      allOf: [
                        {
                          title: "Customize Referred Widget",
                          properties: {
                            widgetHeaderImage: {
                              type: "string",
                              format: "text",
                              minLength: 1,
                              title: "Heading Image Url:",
                              default: "{{assets 'images/conversion.png'}}"
                            },
                            widgetFont: {
                              default:
                                '"Helvetica Neue",Helvetica,Arial,sans-serif'
                            },
                            headerColor: { default: "#444" },
                            heading: {
                              default:
                                "You were Successfully Referred to {{companyName}}"
                            },
                            headerDetails: {
                              default:
                                'Use the Referral Code<br><span i:"squatch-share-code">{{referredBy.referredByUser.referralCode}}</span><br>at checkout to receive your referral reward'
                            },
                            headerDetailsFuelTank: {
                              type: "string",
                              minLength: 1,
                              format: "markdown",
                              default:
                                'Use the Referral Code<br><span i:"squatch-share-code">{{referredBy.referredReward.fuelTankCode}}</span><br>at checkout to receive your referral reward',
                              title: "FuelTank Body Text:",
                              options: {
                                input_height: "100px",
                                validate: ["handlebars"]
                              }
                            },
                            registrationHeader: {
                              type: "string",
                              format: "markdown",
                              title: "Registration Header",
                              default:
                                "Thanks for sending your first referral!<br>Give us your email to ensure you get rewarded when your referral is used.",
                              options: {
                                input_height: "100px",
                                validate: ["handlebars"]
                              }
                            },
                            registrationFields: {
                              title: "Required Registration Fields",
                              type: "object",
                              properties: {
                                firstName: {
                                  title: "First Name",
                                  type: "boolean",
                                  format: "checkbox",
                                  default: true
                                },
                                lastName: {
                                  title: "Last Name",
                                  type: "boolean",
                                  format: "checkbox",
                                  default: true
                                },
                                email: {
                                  title: "Email",
                                  type: "boolean",
                                  format: "checkbox",
                                  default: true
                                }
                              }
                            },
                            buttonCopy: {
                              type: "string",
                              format: "text",
                              minLength: 1,
                              title: "Button Copy",
                              default: "COPY CODE"
                            }
                          }
                        },
                        {
                          $ref:
                            "#/definitions/widget/definitions/content/definitions/generalBody"
                        }
                      ]
                    }
                  }
                },
                cta: {
                  type: "object",
                  properties: {
                    configuration: {
                      $ref:
                        "#/definitions/widget/definitions/cta/definitions/configuration"
                    },
                    content: {
                      allOf: [
                        {
                          properties: {
                            buttonText: { default: "Get Rewarded" }
                          }
                        },
                        {
                          $ref:
                            "#/definitions/widget/definitions/cta/definitions/content"
                        }
                      ]
                    }
                  }
                }
              }
            }
          }
        },
        email: {
          type: "object",
          properties: {
            REFERRER_REWARD_LIMIT_REACHED: {
              type: "object",
              properties: {
                configuration: {
                  allOf: [
                    {
                      properties: {
                        subject: { default: "You have hit the reward limit!" },
                        themeMapping: {
                          default: "emails/referrer-reward-limit"
                        }
                      }
                    },
                    { $ref: "#/definitions/email/definitions/configuration" }
                  ]
                },
                content: {
                  allOf: [
                    {
                      properties: {
                        headerImageUrl: {
                          default:
                            "{{assets 'images/email/reward-limit-header.png'}}"
                        },
                        headerContent: {
                          default:
                            "#Reward Limit\nYou have successfully referred the maximum!"
                        },
                        bodyContent: {
                          default:
                            "Thanks for spreading the word about {{companyName}}. You've referred so many new people that you've earned the maximum number  of available rewards."
                        },
                        shareCTA: {
                          default:
                            "However, you can keep referring new users and giving {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}} with your code. - **{{user.referralCode}}**"
                        }
                      }
                    },
                    { $ref: "#/definitions/email/definitions/generalContent" },
                    { $ref: "#/definitions/email/definitions/shareContent" }
                  ]
                }
              }
            },
            REFERRAL_CONVERTED: {
              type: "object",
              properties: {
                configuration: {
                  allOf: [
                    {
                      properties: {
                        subject: {
                          default:
                            "Congrats! You have earned {{format-reward 'REFERRER' includeUni:true}} of free credit with {{companyName}}"
                        },
                        themeMapping: { default: "emails/referral-converted" }
                      }
                    },
                    { $ref: "#/definitions/email/definitions/configuration" }
                  ]
                },
                content: {
                  allOf: [
                    {
                      properties: {
                        headerImageUrl: {
                          default:
                            "{{assets 'images/email/referral-converted-header.png'}}"
                        },
                        headerContent: {
                          default:
                            "#Congratulations\nYour friend has signed up for a {{companyName}} Account!"
                        },
                        bodyContent: {
                          default:
                            "You have now earned {{format-reward 'REFERRER' includeUni:true includeContextualTex:true}} with {{companyName}}. Refer more friends to save even more!",
                          options: {
                            hideFor: {
                              programSettingsReferrerRewardTypes: [
                                "INTEGRATION"
                              ]
                            }
                          }
                        },
                        giftcardBodyContent: {
                          type: "string",
                          title: "Body Content",
                          format: "markdown",
                          propertyOrder: 3,
                          default:
                            "You have now earned {{format-reward 'REFERRER' includeUni:true includeContextualTex:true}}. You should receive an email shortly with instructions for redemption. Refer more friends to save even more!",
                          options: {
                            hidden: true,
                            validate: ["handlebars"],
                            input_height: "50px",
                            showFor: {
                              programSettingsReferrerRewardTypes: [
                                "INTEGRATION"
                              ]
                            }
                          }
                        }
                      }
                    },
                    { $ref: "#/definitions/email/definitions/generalContent" },
                    { $ref: "#/definitions/email/definitions/shareContent" }
                  ]
                }
              }
            },
            REFERRAL_STARTED: {
              type: "object",
              properties: {
                configuration: {
                  allOf: [
                    {
                      properties: {
                        subject: {
                          default:
                            "​{{stringEmptyHandler newReferral.referredUser.firstName onEmpt:'A friend'}}​ helped you get one step closer to {{format-reward 'REFERRER' includeUni:true includeContextualTex:true}}!"
                        },
                        themeMapping: { default: "emails/referral-started" }
                      }
                    },
                    { $ref: "#/definitions/email/definitions/configuration" }
                  ]
                },
                content: {
                  allOf: [
                    {
                      properties: {
                        headerImageUrl: {
                          default:
                            "{{assets 'images/email/referral-started-header.png'}}"
                        },
                        headerContent: {
                          default:
                            "#Good News!\nYour friend has signed up for a free account with {{companyName}}!"
                        },
                        bodyContent: {
                          default:
                            "{{stringEmptyHandler newReferral.referredUser.firstName onEmpt:'A friend'}}​ is currently trying out {{companyName}}. As a thank you from us, if they become a paying user, you will automatically receive {{format-reward 'REFERRER' includeUni:true includeContextualTex:true}}"
                        }
                      }
                    },
                    { $ref: "#/definitions/email/definitions/generalContent" },
                    { $ref: "#/definitions/email/definitions/shareContent" }
                  ]
                }
              }
            },
            REFERRED_REWARD_EARNED: {
              type: "object",
              properties: {
                configuration: {
                  allOf: [
                    {
                      properties: {
                        subject: {
                          default:
                            "Congrats! You have earned {{format-reward 'REFERRED' includeUni:true}} of free credit with {{companyName}}"
                        },
                        themeMapping: {
                          default: "emails/referred-reward-earned"
                        }
                      }
                    },
                    { $ref: "#/definitions/email/definitions/configuration" }
                  ]
                },
                content: {
                  allOf: [
                    {
                      properties: {
                        headerImageUrl: {
                          default:
                            "{{assets 'images/email/referral-started-header.png'}}"
                        },
                        headerContent: {
                          default:
                            "#Congratulations\nYou have earned a reward with {{companyName}}!"
                        },
                        bodyContent: {
                          default:
                            "You have now earned {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}} with {{companyName}}.",
                          options: {
                            hideFor: {
                              programSettingsReferredRewardTypes: [
                                "INTEGRATION"
                              ]
                            }
                          }
                        },
                        giftcardBodyContent: {
                          type: "string",
                          title: "Body Content",
                          format: "markdown",
                          propertyOrder: 3,
                          default:
                            "You have now earned {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}. You should receive an email shortly with instructions for redemption.",
                          options: {
                            hidden: true,
                            validate: ["handlebars"],
                            input_height: "50px",
                            showFor: {
                              programSettingsReferredRewardTypes: [
                                "INTEGRATION"
                              ]
                            }
                          }
                        }
                      }
                    },
                    { $ref: "#/definitions/email/definitions/generalContent" },
                    { $ref: "#/definitions/email/definitions/shareContent" }
                  ]
                }
              }
            }
          }
        }
      },
      definitions: {
        widget: {
          definitions: {
            content: {
              definitions: {
                generalBody: {
                  type: "object",
                  properties: {
                    widgetFont: {
                      type: "string",
                      title: "Widget Font:",
                      enum: [
                        '"Helvetica Neue",Helvetica,Arial,sans-serif',
                        "'Lato',sans-serif",
                        "'Times New Roman'",
                        "Arial",
                        "Courier",
                        "Tahoma",
                        "Verdana",
                        "Georgia"
                      ],
                      options: {
                        enum_titles: [
                          "Helvetica Neue",
                          "Lato",
                          "Times New Roman",
                          "Arial",
                          "Courier",
                          "Tahoma",
                          "Verdana",
                          "Georgia"
                        ]
                      }
                    },
                    headerColor: {
                      type: "string",
                      format: "text",
                      minLength: 1,
                      title: "Heading Text Color (hex code):",
                      options: { validate: ["hex-color"] }
                    },
                    heading: {
                      type: "string",
                      minLength: 1,
                      format: "markdown",
                      title: "Heading Text:",
                      options: {
                        input_height: "100px",
                        validate: ["handlebars"]
                      }
                    },
                    headerDetails: {
                      type: "string",
                      minLength: 1,
                      format: "markdown",
                      title: "Body Text:",
                      options: {
                        input_height: "100px",
                        validate: ["handlebars"]
                      }
                    }
                  }
                },
                shareContent: {
                  title: "Share Messaging",
                  type: "object",
                  properties: {
                    EMAIL: {
                      type: "object",
                      title: "Email",
                      properties: {
                        emailShareSubject: {
                          type: "string",
                          title: "Email share subject",
                          minLength: 4,
                          format: "textarea",
                          default:
                            "Get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}} from {{companyName}}",
                          options: {
                            validate: ["handlebars"],
                            input_height: "100px"
                          }
                        },
                        emailShareBody: {
                          type: "string",
                          title: "Email share body",
                          minLength: 4,
                          format: "textarea",
                          default:
                            "Sign up for a {{companyName}} account and we both get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}. Use this link {{shareLinks.emailShareLink}}",
                          options: {
                            validate: ["handlebars"],
                            input_height: "100px"
                          }
                        },
                        emailDisplayRule: {
                          type: "string",
                          title: "Display rule",
                          default: "mobile-and-desktop",
                          enum: [
                            "mobile-and-desktop",
                            "hidden",
                            "mobile-only",
                            "desktop-only"
                          ],
                          options: {
                            enum_titles: [
                              "Show",
                              "Hide",
                              "Mobile Only",
                              "Desktop Only"
                            ]
                          }
                        }
                      }
                    },
                    OPENGRAPH: {
                      title: "Open Graph Rich Links",
                      type: "object",
                      properties: {
                        ogSettings: {
                          type: "object",
                          title: "Link Metadata Source",
                          oneOf: [
                            {
                              title: "SaaSquatch Hosted",
                              type: "object",
                              properties: {
                                source: {
                                  type: "string",
                                  default: "HOSTED",
                                  enum: ["HOSTED"],
                                  options: { hidden: true }
                                },
                                "og:title": {
                                  type: "string",
                                  title: "Title",
                                  minLength: 4,
                                  format: "textarea",
                                  default:
                                    "Get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}} from {{companyName}}",
                                  options: {
                                    validate: ["handlebars"],
                                    input_height: "100px"
                                  }
                                },
                                "og:description": {
                                  type: "string",
                                  title: "Description",
                                  minLength: 4,
                                  format: "textarea",
                                  default:
                                    "Sign up for a {{companyName}} account and we both get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}.",
                                  options: {
                                    validate: ["handlebars"],
                                    input_height: "100px"
                                  }
                                },
                                "og:image": {
                                  type: "string",
                                  title: "image",
                                  default: ""
                                }
                              }
                            },
                            {
                              title: "Use Referral Landing Page",
                              type: "object",
                              properties: {
                                source: {
                                  type: "string",
                                  default: "LANDINGPAGE",
                                  enum: ["LANDINGPAGE"],
                                  options: { hidden: true }
                                },
                                "og:title": {
                                  type: "string",
                                  title: "Title",
                                  default: "",
                                  options: { hidden: true }
                                },
                                "og:description": {
                                  type: "string",
                                  title: "Description",
                                  default: "",
                                  options: { hidden: true }
                                },
                                "og:image": {
                                  type: "string",
                                  title: "image",
                                  default: "",
                                  options: { hidden: true }
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    FACEBOOK: {
                      type: "object",
                      title: "Facebook",
                      properties: {
                        facebookShareImageURL: {
                          type: "string",
                          title: "Facebook URL Image",
                          default: "",
                          options: { hidden: true }
                        },
                        facebookShareSubject: {
                          type: "string",
                          title: "Facebook share subject",
                          minLength: 4,
                          format: "textarea",
                          default:
                            "Get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}",
                          options: {
                            validate: ["handlebars"],
                            input_height: "100px",
                            hidden: true
                          }
                        },
                        facebookShareBody: {
                          type: "string",
                          title: "Facebook share body",
                          minLength: 4,
                          format: "textarea",
                          default:
                            "Sign up for a {{companyName}} account and we both get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}. Use this link {{shareLinks.facebookShareLink}}",
                          options: {
                            validate: ["handlebars"],
                            input_height: "100px",
                            hidden: true
                          }
                        },
                        facebookDisplayRule: {
                          type: "string",
                          title: "Display rule",
                          default: "mobile-and-desktop",
                          enum: [
                            "mobile-and-desktop",
                            "hidden",
                            "mobile-only",
                            "desktop-only"
                          ],
                          options: {
                            enum_titles: [
                              "Show",
                              "Hide",
                              "Mobile Only",
                              "Desktop Only"
                            ]
                          }
                        }
                      }
                    },
                    FBMESSENGER: {
                      type: "object",
                      title: "Messenger",
                      properties: {
                        facebookDisplayRule: {
                          type: "string",
                          title: "Display rule",
                          default: "desktop-only",
                          enum: [
                            "mobile-and-desktop",
                            "hidden",
                            "mobile-only",
                            "desktop-only"
                          ],
                          options: {
                            enum_titles: [
                              "Show",
                              "Hide",
                              "Mobile Only",
                              "Desktop Only"
                            ]
                          }
                        }
                      }
                    },
                    TWITTER: {
                      type: "object",
                      title: "Twitter",
                      properties: {
                        twitterShareBody: {
                          type: "string",
                          title: "Twitter share body",
                          minLength: 4,
                          format: "textarea",
                          default:
                            "Sign up for a {{companyName}} account and we both get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}. Use this link {{shareLinks.twitterShareLink}}",
                          options: {
                            validate: ["handlebars"],
                            input_height: "100px"
                          }
                        },
                        twitterDisplayRule: {
                          type: "string",
                          title: "Display rule",
                          default: "hidden",
                          enum: [
                            "mobile-and-desktop",
                            "hidden",
                            "mobile-only",
                            "desktop-only"
                          ],
                          options: {
                            enum_titles: [
                              "Show",
                              "Hide",
                              "Mobile Only",
                              "Desktop Only"
                            ]
                          }
                        }
                      }
                    },
                    SMS: {
                      type: "object",
                      title: "SMS",
                      properties: {
                        smsShareBody: {
                          type: "string",
                          title: "SMS share body",
                          minLength: 4,
                          format: "textarea",
                          default:
                            "Sign up for a {{companyName}} account and we both get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}. Use this link {{share-link 'SMS'}}",
                          options: {
                            validate: ["handlebars"],
                            input_height: "100px"
                          }
                        },
                        smsDisplayRule: {
                          type: "string",
                          title: "Display rule",
                          default: "mobile-only",
                          enum: ["hidden", "mobile-only"],
                          options: { enum_titles: ["Hide", "Mobile Only"] }
                        }
                      }
                    },
                    WHATSAPP: {
                      type: "object",
                      title: "WhatsApp",
                      properties: {
                        whatsAppShareBody: {
                          type: "string",
                          title: "WhatsApp share body",
                          minLength: 4,
                          format: "textarea",
                          default:
                            "Sign up for a {{companyName}} account and we both get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}. Use this link {{share-link 'WHATSAPP'}}",
                          options: {
                            validate: ["handlebars"],
                            input_height: "100px"
                          }
                        },
                        whatsappDisplayRule: {
                          type: "string",
                          title: "Display rule",
                          default: "mobile-only",
                          enum: ["hidden", "mobile-only"],
                          options: { enum_titles: ["Hide", "Mobile Only"] }
                        }
                      }
                    },
                    LINKEDIN: {
                      type: "object",
                      title: "LinkedIn",
                      properties: {
                        linkedinShareImageURL: {
                          type: "string",
                          title: "LinkedIn URL Image",
                          default: ""
                        },
                        linkedinShareSubject: {
                          type: "string",
                          title: "LinkedIn share subject",
                          minLength: 4,
                          default:
                            "Get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}} from {{companyName}}"
                        },
                        linkedinShareBody: {
                          type: "string",
                          title: "LinkedIn share body",
                          minLength: 4,
                          default:
                            "Sign up for a {{companyName}} account and we both get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}. Use this link {{share-link 'LINKEDIN'}}"
                        },
                        linkedinDisplayRule: {
                          type: "string",
                          title: "Display rule",
                          default: "hidden",
                          enum: [
                            "mobile-and-desktop",
                            "hidden",
                            "mobile-only",
                            "desktop-only"
                          ],
                          options: {
                            enum_titles: [
                              "Show",
                              "Hide",
                              "Mobile Only",
                              "Desktop Only"
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            cta: {
              definitions: {
                configuration: {
                  type: "object",
                  properties: { themeMapping: { default: "cta-widget" } }
                },
                content: {
                  type: "object",
                  title: "Customize CTA Button",
                  properties: {
                    buttonSide: {
                      type: "string",
                      title: "Button Side:",
                      default: "right",
                      enum: ["left", "right", "center"],
                      options: {
                        enum_titles: ["Left Side", "Right Side", "Center"]
                      }
                    },
                    buttonPosition: {
                      type: "string",
                      title: "Button Position:",
                      default: "bottom",
                      enum: ["top", "bottom", "middle"],
                      options: { enum_titles: ["Top", "Bottom", "Middle"] }
                    },
                    buttonColor: {
                      type: "string",
                      format: "text",
                      minLength: 1,
                      title: "Button Color (hex code):",
                      default: "#4486E1",
                      options: { validate: ["hex-color"] }
                    },
                    buttonText: {
                      type: "string",
                      title: "Button Text",
                      format: "markdown",
                      propertyOrder: 4,
                      options: {
                        validate: ["handlebars"],
                        input_height: "50px"
                      }
                    },
                    buttonWidth: {
                      type: "integer",
                      title: "Button Width",
                      format: "number",
                      default: 230
                    }
                  }
                }
              }
            }
          }
        },
        email: {
          definitions: {
            configuration: {
              type: "object",
              title: "Email Defaults",
              properties: {
                fromName: {
                  type: "string",
                  title: "From Name",
                  default: "{{companyName}}",
                  propertyOrder: 1,
                  minLength: 1,
                  options: { validate: ["handlebars"] }
                },
                fromAddress: {
                  type: "string",
                  title: "From Address",
                  format: "email",
                  default: "referral@mail.saasquat.ch",
                  propertyOrder: 2,
                  minLength: 5,
                  options: { validate: ["email"] }
                },
                subject: {
                  type: "string",
                  title: "Subject",
                  format: "textarea",
                  default: "Referral Update",
                  propertyOrder: 3,
                  minLength: 1,
                  options: { validate: ["handlebars"], input_height: "50px" }
                },
                themeMapping: { options: { hidden: true } }
              }
            },
            generalContent: {
              type: "object",
              properties: {
                headerImageUrl: {
                  type: "string",
                  title: "Header Image URL",
                  propertyOrder: 1,
                  options: { validate: ["handlebars"] }
                },
                headerContent: {
                  type: "string",
                  title: "Header Content",
                  format: "markdown",
                  propertyOrder: 2,
                  options: { validate: ["handlebars"], input_height: "50px" }
                },
                bodyContent: {
                  type: "string",
                  title: "Body Content",
                  format: "markdown",
                  propertyOrder: 3,
                  options: { validate: ["handlebars"], input_height: "50px" }
                },
                footer: {
                  type: "string",
                  title: "Footer",
                  format: "markdown",
                  propertyOrder: 1001,
                  options: { validate: ["handlebars"], input_height: "50px" }
                }
              }
            },
            shareContent: {
              type: "object",
              properties: {
                shareCTA: {
                  type: "string",
                  title: "Share Code CTA",
                  format: "markdown",
                  propertyOrder: 4,
                  default:
                    "Keep sharing your code and earn more discounts - **{{user.referralCode}}**",
                  options: { validate: ["handlebars"], input_height: "50px" }
                },
                hasShareLink: {
                  type: "boolean",
                  format: "checkbox",
                  title: "Enable Share Link",
                  propertyOrder: 5,
                  default: true
                },
                shareButtonHeader: {
                  type: "string",
                  title: "Share Button Header",
                  format: "markdown",
                  propertyOrder: 6,
                  default:
                    "Refer and Earn {{format-reward 'REFERRER' includeUni:true includeContextualTex:true}}",
                  options: { validate: ["handlebars"], input_height: "50px" }
                }
              }
            }
          }
        }
      },
      required: ["jsOptions", "widget", "email"]
    },
    variables: {
      jsOptions: { widget: { defaultWidgetType: "REFERRER_WIDGET" } },
      widget: {
        REFERRER_WIDGET: {
          configuration: { themeMapping: "widget" },
          content: {
            widgetCustomization: {
              widgetFont: '"Helvetica Neue",Helvetica,Arial,sans-serif',
              headerColor: "#4486E1",
              heading: "Give and get",
              headerDetails:
                "Give a friend {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}} and receive {{format-reward 'REFERRER' includeUni:true includeContextualTex:true}} for yourself when they pay their first bill.\n\nCode is here:\n\n<pre>\n{{#each this}}\n{{.}}\n{{/each}}\n</pre>",
              shareCodeDetails:
                "Share the link below or use the code **{{user.referralCode}}**",
              registrationHeader:
                "Thanks for sending your first referral!<br>Give us your email to ensure you get rewarded when your referral is used.",
              registrationFields: {
                firstName: true,
                lastName: true,
                email: true
              },
              referralsPanel: { showReferrer: true }
            },
            sharingOptions: {
              EMAIL: {
                emailShareSubject:
                  "Get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}} from {{companyName}}",
                emailShareBody:
                  "Sign up for a {{companyName}} account and we both get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}. Use this link {{shareLinks.emailShareLink}}",
                emailDisplayRule: "mobile-and-desktop"
              },
              OPENGRAPH: {
                ogSettings: {
                  source: "HOSTED",
                  "og:title":
                    "Get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}} from {{companyName}}",
                  "og:description":
                    "Sign up for a {{companyName}} account and we both get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}.",
                  "og:image": ""
                }
              },
              FACEBOOK: {
                facebookShareImageURL: "",
                facebookShareSubject:
                  "Get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}",
                facebookShareBody:
                  "Sign up for a {{companyName}} account and we both get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}. Use this link {{shareLinks.facebookShareLink}}",
                facebookDisplayRule: "mobile-and-desktop"
              },
              FBMESSENGER: { facebookDisplayRule: "desktop-only" },
              TWITTER: {
                twitterShareBody:
                  "Sign up for a {{companyName}} account and we both get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}. Use this link {{shareLinks.twitterShareLink}}",
                twitterDisplayRule: "hidden"
              },
              SMS: {
                smsShareBody:
                  "Sign up for a {{companyName}} account and we both get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}. Use this link {{share-link 'SMS'}}",
                smsDisplayRule: "mobile-only"
              },
              WHATSAPP: {
                whatsAppShareBody:
                  "Sign up for a {{companyName}} account and we both get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}. Use this link {{share-link 'WHATSAPP'}}",
                whatsappDisplayRule: "mobile-only"
              },
              LINKEDIN: {
                linkedinShareImageURL: "",
                linkedinShareSubject:
                  "Get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}} from {{companyName}}",
                linkedinShareBody:
                  "Sign up for a {{companyName}} account and we both get {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}. Use this link {{share-link 'LINKEDIN'}}",
                linkedinDisplayRule: "hidden"
              }
            },
            textVariables: {
              lang: "en",
              attribution: "Powered By Saasquatch",
              panelClose: "Close",
              registerButton: "Continue",
              panelTitle: "Rewards Dashboard",
              statsDescriptions: {
                referralsNumber: "Friends Referred",
                rewardsNumber: "Rewards Earned",
                rewardsPending: "Rewards Pending"
              },
              referralsTitle: "Referral Details",
              referralsScroll: {
                showReferrals: "Show Details",
                hideReferrals: "Hide Details",
                scrollPrevious: "Previous",
                scrollNext: "View More"
              },
              shareNotificationSuccess: "Copied!",
              shareNotificationFailure: "Press Ctrl+C to copy",
              shareButtons: {
                copy: "Copy",
                email: "Email",
                twitter: "Tweet",
                sms: "SMS",
                facebookMessenger: "Messenger",
                facebook: "Share",
                whatsapp: "WhatsApp",
                linkedin: "LinkedIn"
              },
              referredByUser: {
                description: "Referring User",
                heading: "Referred You",
                referred: "Referred User"
              },
              arbitraryReward: {
                description: "No Referral",
                heading: "Applied"
              },
              referralReward: {
                credit: {
                  value: "${{math reward.value ' / 100'}}",
                  description: "Free Credit"
                },
                fuelTank: { value: "CODE: {{reward.fuelTankCode}}" },
                time: {
                  value:
                    "{{reward.value}} month<span clas:\"hidden-{{math reward.value '== 1'}}\">s</span>",
                  description: "Free Time"
                },
                giftcard: { description: "Gift card" },
                percent: {
                  value: "{{reward.value}}%",
                  title: "Discount",
                  description: "Discount Earned"
                }
              },
              uncompletedReferral: { user: "Trial User", title: "Referred" },
              completedReferral: { user: "Paid User", title: "Signed Up" },
              pendingReward: {
                referredReward:
                  "{{format-reward 'REFERRED' includeUni:true}} Pending",
                referrerReward:
                  "{{format-reward 'REFERRER' includeUni:true}} Pending",
                title: "Trial Signup",
                credit: "Credit Pending",
                giftcard: "Gift card Pending",
                percent: "Discount Pending"
              },
              noReferrals: "No Referrals Yet...",
              nonReferralReward: {
                manualTitle: "Reward",
                programTitle: "Reward",
                creditReward: "${{math value '/ 100'}}",
                timeReward:
                  "{{value}} Month<span clas:\"hidden-{{math value '== 1'}}\">s</span>",
                description: "Reward Given",
                percentDescription: "Discount Earned"
              }
            }
          },
          cta: {
            configuration: { themeMapping: "cta-widget" },
            content: {
              buttonSide: "right",
              buttonPosition: "bottom",
              buttonColor: "#4486E1",
              buttonWidth: 230,
              buttonText: "Refer Friends For Rewards"
            }
          }
        },
        CONVERSION_WIDGET: {
          configuration: { themeMapping: "conversion-widget" },
          content: {
            widgetCustomization: {
              widgetHeaderImage: "{{assets 'images/conversion.png'}}",
              widgetFont: '"Helvetica Neue",Helvetica,Arial,sans-serif',
              headerColor: "#444",
              heading: "You were Successfully Referred to {{companyName}}",
              headerDetails:
                'Use the Referral Code<br><span i:"squatch-share-code">{{referredBy.referredReward.referralCode}}</span><br>at checkout to receive your referral reward',
              headerDetailsFuelTank:
                'Use the Referral Code<br><span i:"squatch-share-code">{{referredBy.referredReward.fuelTankCode}}</span><br>at checkout to receive your referral reward',
              registrationHeader:
                "Thanks for sending your first referral!<br>Give us your email to ensure you get rewarded when your referral is used.",
              registrationFields: {
                firstName: true,
                lastName: true,
                email: true
              },
              buttonCopy: "COPY CODE"
            }
          },
          cta: {
            configuration: { themeMapping: "cta-widget" },
            content: {
              buttonSide: "right",
              buttonPosition: "bottom",
              buttonColor: "#4486E1",
              buttonWidth: 230,
              buttonText: "Get Rewarded"
            }
          }
        }
      },
      email: {
        REFERRER_REWARD_LIMIT_REACHED: {
          configuration: {
            fromName: "{{companyName}}",
            fromAddress: "referral@mail.saasquat.ch",
            subject: "You have hit the reward limit!",
            themeMapping: "emails/referrer-reward-limit"
          },
          content: {
            shareCTA:
              "However, you can keep referring new users and giving {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}} with your code. - **{{user.referralCode}}**",
            hasShareLink: true,
            shareButtonHeader:
              "Refer and Earn {{format-reward 'REFERRER' includeUni:true includeContextualTex:true}}",
            headerImageUrl: "{{assets 'images/email/reward-limit-header.png'}}",
            headerContent:
              "#Reward Limit\nYou have successfully referred the maximum!",
            bodyContent:
              "Thanks for spreading the word about {{companyName}}. You've referred so many new people that you've earned the maximum number  of available rewards."
          }
        },
        REFERRAL_CONVERTED: {
          configuration: {
            fromName: "{{companyName}}",
            fromAddress: "referral@mail.saasquat.ch",
            subject:
              "Congrats! You have earned {{format-reward 'REFERRER' includeUni:true}} of free credit with {{companyName}}",
            themeMapping: "emails/referral-converted"
          },
          content: {
            shareCTA:
              "Keep sharing your code and earn more discounts - **{{user.referralCode}}**",
            hasShareLink: true,
            shareButtonHeader:
              "Refer and Earn {{format-reward 'REFERRER' includeUni:true includeContextualTex:true}}",
            headerImageUrl:
              "{{assets 'images/email/referral-converted-header.png'}}",
            headerContent:
              "#Congratulations\nYour friend has signed up for a {{companyName}} Account!",
            bodyContent:
              "You have now earned {{format-reward 'REFERRER' includeUni:true includeContextualTex:true}} with {{companyName}}. Refer more friends to save even more!",
            giftcardBodyContent:
              "You have now earned {{format-reward 'REFERRER' includeUni:true includeContextualTex:true}}. You should receive an email shortly with instructions for redemption. Refer more friends to save even more!"
          }
        },
        REFERRAL_STARTED: {
          configuration: {
            fromName: "{{companyName}}",
            fromAddress: "referral@mail.saasquat.ch",
            subject:
              "​{{stringEmptyHandler newReferral.referredUser.firstName onEmpt:'A friend'}}​ helped you get one step closer to {{format-reward 'REFERRER' includeUni:true includeContextualTex:true}}!",
            themeMapping: "emails/referral-started"
          },
          content: {
            shareCTA:
              "Keep sharing your code and earn more discounts - **{{user.referralCode}}**",
            hasShareLink: true,
            shareButtonHeader:
              "Refer and Earn {{format-reward 'REFERRER' includeUni:true includeContextualTex:true}}",
            headerImageUrl:
              "{{assets 'images/email/referral-started-header.png'}}",
            headerContent:
              "#Good News!\nYour friend has signed up for a free account with {{companyName}}!",
            bodyContent:
              "{{stringEmptyHandler newReferral.referredUser.firstName onEmpt:'A friend'}}​ is currently trying out {{companyName}}. As a thank you from us, if they become a paying user, you will automatically receive {{format-reward 'REFERRER' includeUni:true includeContextualTex:true}}"
          }
        },
        REFERRED_REWARD_EARNED: {
          configuration: {
            fromName: "{{companyName}}",
            fromAddress: "referral@mail.saasquat.ch",
            subject:
              "Congrats! You have earned {{format-reward 'REFERRED' includeUni:true}} of free credit with {{companyName}}",
            themeMapping: "emails/referred-reward-earned"
          },
          content: {
            shareCTA:
              "Keep sharing your code and earn more discounts - **{{user.referralCode}}**",
            hasShareLink: true,
            shareButtonHeader:
              "Refer and Earn {{format-reward 'REFERRER' includeUni:true includeContextualTex:true}}",
            headerImageUrl:
              "{{assets 'images/email/referral-started-header.png'}}",
            headerContent:
              "#Congratulations\nYou have earned a reward with {{companyName}}!",
            bodyContent:
              "You have now earned {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}} with {{companyName}}.",
            giftcardBodyContent:
              "You have now earned {{format-reward 'REFERRED' includeUni:true includeContextualTex:true}}. You should receive an email shortly with instructions for redemption."
          }
        }
      }
    }
  };
})();
