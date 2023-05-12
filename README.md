<p align="center"><img height="180" src="https://github.com/ligdy7/axios-min/assets/26371465/a438f5f4-283a-4343-b782-53ce37d3dc12"></p>

<p align="center">
  <a href="https://www.npmjs.com/package/swr-min"><img src="https://img.shields.io/badge/LICENSE-MIT-blue"></a>
</p>

## Installing

### Package manager

Using npm:

```bash
$ npm install axiosmin
```

Using bower:

```bash
$ bower install axiosmin
```

Using yarn:

```bash
$ yarn add axiosmin
```

Using pnpm:

```bash
$ pnpm add axiosmin
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import axiosmin from "axiosmin";
```

You can also use the default export, since the named export is just a re-export from the axiosmin factory:

```js
import axiosmin from "axiosmin";

console.log(axiosmin.isCancel("something"));
```

If you use `require` for importing, **only default export is available**:

```js
const axiosmin = require("axiosmin");

console.log(axiosmin.isCancel("something"));
```
