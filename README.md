<p align="center"><img height="180" src="https://github.com/ligdy7/paces/assets/26371465/8e262420-ca3d-4625-b422-c6751bcd7ed7"></p>

<p align="center">
  <a href="https://www.npmjs.com/package/swr-min"><img src="https://img.shields.io/badge/LICENSE-MIT-blue"></a>
</p>

## Installing

### Package manager

Using npm:

```bash
$ npm install paces
```

Using bower:

```bash
$ bower install paces
```

Using yarn:

```bash
$ yarn add paces
```

Using pnpm:

```bash
$ pnpm add paces
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import axiosmin from "paces";
```

You can also use the default export, since the named export is just a re-export from the axiosmin factory:

```js
import axiosmin from "paces";

console.log(axiosmin.isCancel("something"));
```

If you use `require` for importing, **only default export is available**:

```js
const axiosmin = require("paces");

console.log(axiosmin.isCancel("something"));
```
