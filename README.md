react-app
=========

Skeleton React app for client-side rendering.

## Why?

[create-react-app](https://github.com/facebookincubator/create-react-app) and [Next.js](https://github.com/zeit/next.js/) are great tools, but sometimes they just don't fit my use-case. For those times, this is my go-to boilerplate for creating a React app.

create-react-app makes too many assumptions about my project and hides all the tooling making it difficult to change. Next.js includes server-side rendering which is undesirable in some circumstances.

This app skeleton contains the bare minimum for client-side rendering only. All of the tooling is exposed so you can easily modify it and extend it for whatever your specific needs might be.

## Toolchain

#### Yarn

This project uses Yarn as it's JavaScript package manager. You can use NPM if you wish. Just remove `yarn.lock` and run `npm install` to generate `package-lock.json`.

#### Webpack

Webpack is used to transform and bundle all of the assets together in to their final package to be consumed by browsers on the client-side.

Common configuration (shared between development and production) lives in `webpack.common.js`.

Development configuration, which includes a dev server and hot-module reloading by default, lives in `webpack.development.js`.

Production configuration includes compression and obfuscation of JavaScript modules, extraction of embedded CSS modules, and GZip compression of bundle assets over 4KB (60% minimum compression ratio required), and lives in `webpack.production.js`.

#### Babel

**ES6** - The toolchain supports ES6+ through transpilation with Babel. Source files that end with `.js` or `.jsx` will automatically be transpiled to ES5.

**Automatic preset** - The `env` present is enabled to automatically determine which Babel plugins you need based on what browsers your intend to support (more below).

**Automatic polyfills** - Babel Polyfill is also included to ensure that your code will run in all of your support environments.

**Decorators** - Supports the decorator draft specification.

#### SASS

SASS is a great CSS preprocessor and I enjoy using it in my projects. You can easily swap this out for your preferred preprocessor, or remove it altogether. PostCSS is used to postprocess any styles used with Autoprefixer. Autoprefixer uses Browserslist under-the-hood to ensure that the CSS features you use are supported in your preferred browsers.

#### Browserslist

Declare what browsers you support in `.browserlistrc`. Any plugin or tooling in the toolchain that uses the browserslist library will pick up your selections and alter its behavior to ensure support for those browsers.

## Library Support

###### Webpack 4
###### Babel 6
###### SASS (node-sass)
###### React 16

## Commands

`start` - Starts the development server on port 8080.

`build` - Builds the project, targeting production.

`clean` - Cleans the project of production builds.

## Directory Structure

The toolchain makes no assumptions about how you should structure your code, except that the root for all of your code lives in the `src/` folder.

Module resolution includes `node_modules`, `src`, and `lib`.

The build configuration also supports referencing your modules from inside their own folders.

```
# Folder structure
src
` components
| ` HelloWorld
| | ` - index.js
* *

# src/index.js
import HelloWorld from 'components/HelloWorld';

...

<HelloWorld />

...
```

`dist/` - Where production builds are stored.

`lib/` - (optional) Your code that isn't necessarily part of this project lives here.

`src/` - All your code and static assets live here.

## License

[MIT](https://opensource.org/licenses/MIT)
