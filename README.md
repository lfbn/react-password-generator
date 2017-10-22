An password input with a configurable generator.

# Props

The component takes the following props.

| Prop         | Type       | Description  |
|--------------|------------|--------------|
| `onFocus`    | _function_ | Callback function to invoke when the input password field has focus. The function signature should be the following: `function(e) { }`. |
| `onBlur`     | _function_ | Callback function to invoke when field loses focus. The function signature should be the following: `function(e) { }`. |
| `className`  | _string_   | Class name to be added to the wrapper div |
| `messages`   | _object_   | You could define the string messages to be shown for `messages={{inputPlaceholder: 'Define the password', generateButtonLabel: 'Generate one!'}}` |
| `passwordCustomLength` | _integer_ | The length of the password to be generated |
| `passwordNotMemorable` | _boolean_ | If the password generated should be memorable. Default is false. |
| `passwordShouldMatchPattern` | _string_ | The pattern to match for the generated password |
| `passwordPrefix` | _string_ | Customize the generated password prefix |

# Installation

```bash
npm install react-password-with-generator
```

# Usage

If you want the default styling include the components' [CSS](./style.css) with

```javascript
import "react-password-with-generator/style.css" // for ES6 modules
// or
require("react-password-with-generator/style.css") // for CommonJS
````

# Development

```javascript
npm install
npm run dev
````

# Build

```javascript
npm run build
```

# License

MIT
