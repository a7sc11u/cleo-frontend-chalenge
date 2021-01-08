# Bill Y'all

### Dependencies

#### Node JS

-   The application is built with [NodeJS](https://nodejs.org/en/) v14.6.0.

-   It should work with node v13.7.0 or higher.

-   If you have [Node Version Manager](https://github.com/nvm-sh/nvm) installed, use the command `nvm use` to activate the recommended version or `nvm install` to install v.14.6.0 and activate it.

---

### Tasks

#### Install Dependencies

`yarn install`
#### develop

Use `yarn develop` to run in parallel json-server `api` and create-react-app dev server `start` 

#### api

Use `yarn api` to start the json-server

#### start

Use `yarn start` to start the create-react-app dev server

#### build

Use `yarn build` to prepare production build

#### lint

Use `yarn lint` to lint your code


#### cy:e2e

Use `yarn cy:e2e` to open the cypress test runner GUI.

#### cy:run

Use `yarn cy:run` to run all tests headlessly in the Electron browser 

#### test

Use `yarn test` to start development server and run tests headlessly

#### tdd

Use `yarn tdd` to start development server and run tests in cypress gui

----

### Focus Areas

#### Accessibility

Tried to implement a thoughful experience for users of assistive technology. 

#### Tabs

The Tabs Component `src/components/tabs` implements the [tabs design pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel).

#### UI Kit

Implemented a sensible set of layout and ui elements, that allow to build the layouts in a rational way.

#### Styling

Using the css-in-js stitches library, that generates atomic classes and provides elegant developer experience, with first class typescript support

#### Motion

Some basic motion in important areas.


#### Typescript

Typescript is not my strongest skill, so I used this opportunity to practice and learn something new, e.g. previously I'd never used redux with typescript.

#### State

Chose redux for state-management, ducks pattern, thunks for asynchronous actions, immer for mutable reducers and reselect for memoized selectors.

#### Testing

Implemented a basic integration strategy with cypress

---

### Total Time

I spent about 8 hours in total, over 3 nights. 