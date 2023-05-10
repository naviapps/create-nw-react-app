# eslint-config-nw-react-app

This package includes the shareable ESLint configuration used by [Create NW.js React App](https://github.com/naviapps/create-nw-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

## Usage in Create NW.js React App Projects

The easiest way to use this configuration is with [Create NW.js React App](https://github.com/naviapps/create-nw-react-app), which includes it by default.

**You don’t need to install it separately in Create NW.js React App projects.**

## Usage Outside of Create NW.js React App

If you want to use this ESLint configuration in a project not built with Create NW.js React App, you can install it with the following steps.

First, install this package and ESLint.

```sh
npm install --save-dev eslint-config-nw-react-app eslint@^8.0.0
```

Then create a file named `.eslintrc.json` with following contents in the root folder of your project:

```json
{
  "extends": "nw-react-app"
}
```

That's it! You can override the settings from `eslint-config-nw-react-app` by editing the `.eslintrc.json` file. Learn more about [configuring ESLint](https://eslint.org/docs/user-guide/configuring) on the ESLint website.

## Jest rules

This config also ships with optional Jest rules for ESLint (based on [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)).

You can enable these rules by adding the Jest config to the `extends` array in your ESLint config.

```json
{
  "extends": ["nw-react-app", "nw-react-app/jest"]
}
```

## Accessibility Checks

The following rules from the [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) plugin are activated:

- [alt-text](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)
- [anchor-has-content](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md)
- [aria-activedescendant-has-tabindex](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md)
- [aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md)
- [aria-proptypes](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md)
- [aria-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)
- [aria-unsupported-elements](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md)
- [heading-has-content](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md)
- [href-no-hash](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/v5.1.1/docs/rules/href-no-hash.md)
- [iframe-has-title](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md)
- [img-redundant-alt](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)
- [no-access-key](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)
- [no-distracting-elements](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md)
- [no-redundant-roles](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md)
- [role-has-required-aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md)
- [role-supports-aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md)
- [scope](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md)

If you want to enable even more accessibility rules, you can create an `.eslintrc.json` file in the root of your project with this content:

```json
{
  "extends": ["nw-react-app", "plugin:jsx-a11y/recommended"],
  "plugins": ["jsx-a11y"]
}
```

However, if you are using [Create NW.js React App](https://github.com/naviapps/create-nw-react-app) and have not ejected, any additional rules will only be displayed in the [IDE integrations](https://facebook.github.io/create-react-app/docs/setting-up-your-editor#displaying-lint-output-in-the-editor), but not in the browser or the terminal.
