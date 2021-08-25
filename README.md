Hybrid Theme
===================

A hybrid between our classic theme and GA theme technologies. Used to develop custom themes using new technologies on classic tenants

Setup
-----

There should be a corresponding `freshest-themes` project to the hybrid theme and it should be published as an npm package.

In `widget.hbs`, link to the npm package along with any other dependency packages (mint/vanilla components). You can then build the widget in `widget.hbs` from the custom HTML elements from the theme packages.

In `theme_messages.hbs`, make sure it includes the following:
```js
window.widgetIdent = {
    engagementMedium: "{{mode}}",
    tenantAlias: "{{tenantAlias}}",
    programId: "classic",
    appDomain: "https://{{appDomain}}",
    userId: "{{user.id}}",
    accountId: "{{user.accountId}}",
    token: "{{token}}"
  };
```

Note, for `programId: "classic"` to work for classic programs, it must be using `mint-components@1.1.2` or higher, otherwise use `programId: null`.

**IMPORTANT**: Make sure to update the version numbers of the imported packages to bring in the changes into the hybrid theme. This includes mint/vanilla component packages. It sometimes takes a few refreshes until a hybrid widget pulls in the most up to date packages after an update.