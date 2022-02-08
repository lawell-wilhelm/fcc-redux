# Redux Basics Start

## Setup Development Environment

Snowpack, is the lightning-fast frontend build tool, designed for the modern web I chose to for this project. It requires little configurations to get up and running.
[more about snowpack](https://www.snowpack.dev/)

### [Configure snowpack, frontend build tool](https://www.snowpack.dev/tutorials/quick-start)

1. Open the file named `snowpack.config.mjs`
2. inside the mount block add the following block:

```
mount: {
    public: "/",
    src: "/dist"
}
```

### Manage files and directories

1. In the root directory, create two new directories,

   - `public/`
   - `src/`

2. Move `index.html` and `index.css` to the `public` directory

3. Move `index.js` to the `src` directory

4. Open index.html and change index.js path from index.js to /dist/index.js

### start the web development server

1. open your terminal and run:

```sh
npm start
```

### install the redux package

To install the redux library run:

```sh
npm install redux
```

Our Redux development environment is now set. Let's follow along FCC's Redux course

## [Create a Redux Store](https://www.freecodecamp.org/learn/front-end-development-libraries/redux/create-a-redux-store)

1. In the src directory create two directories:

   - `store.js`
   - `reducer.js`

2. Copy the reducer function from FreeCodeCamp to reducer.js
   ```
   const reducer = (state = 5) => state
   ```
3. export the function `reducer`. add at the end of the file

```
  export default reducer
```

4. import `createStore` and the `reducer` in `store.js`

```
   import {createStore} from "redux";
   import reducer from "./reducer"
```

5. Follow the instruction in this section & create the store

6. export the store
   ```
   export default store
   ```
7. import the store into `index.js`

```
import store from "./store"
```

you can console.log your store to see its content.

## [Get State from the Redux Store](https://www.freecodecamp.org/learn/front-end-development-libraries/redux/get-state-from-the-redux-store)

1. Follow the instruction at the above link, and add the `getState()` method call in the `index.js `file

2. console.log the `currentState` to output it

## [Define a redux action](https://www.freecodecamp.org/learn/front-end-development-libraries/redux/define-a-redux-action)

1. In the `src` directory, create a new file called `action.js`

2. Create the `action` according to the instructions in this section

## [Define an action creator](https://www.freecodecamp.org/learn/front-end-development-libraries/redux/define-an-action-creator)

1. In the `src` directorcy, create a new file called `actionCreator.js`

2. Export action from the file named `action.js`

```
export const action = {...}
```

3. In the file `actionCreator.js` import the action

```
import { action } from "./action"
```

4. follow the instruction in this section and create the action creator

## [Dispatch an action event](https://www.freecodecamp.org/learn/front-end-development-libraries/redux/dispatch-an-action-event)

1. Edit `reducer.js`, change the defualt state from `state = 5` to `state = {login: false}` as the reducer passed in the Redux.createStore in this section

2. Edit `actionCreator.js`, rename the function `actionCreator` to `loginAction`

3. Export `loginAction`

4. Import `loginAction` into `index.js`

```
import { loginAction } from "./actionCreator";
```

5. Follow the instruction in this section, and dispatch the `loginAction` in `index.js`

## [Handle an action in the store](https://www.freecodecamp.org/learn/front-end-development-libraries/redux/handle-an-action-in-the-store)

1. Edit `reducer.js`, create the `defaultState`, and change the parameters passed on

2. Follow the instruction in this section to complete the reducer

> Note: You might be wondering where the action parameter is from. It's been dispatched to the store by dispatch method call in index.js

## [Use a Switch Statement to Handle Multiple Actions](https://www.freecodecamp.org/learn/front-end-development-libraries/redux/use-a-switch-statement-to-handle-multiple-actions)

1. Edit the `actions.js` file, rename `action` object to `login` and add the `logout` action

2. In the `actionCreator.js` file change the current import to,

```
import * as actions from "./actions"
```

3. Rename the `loginAction` to `loginUser`, and return `actions.login` instead

4. Add the `logoutUser` action the same way

5. Change the `loginAction` import to,

```import * as actionCreator from "./actionCreator";
```

6. Edit `index.js`, pass on actionCreator.`loginUser` to `dispatch` instead of `loginAction`

7. Rename `reducer.js` to `authReducer.js`

8. In `authReducer`, edit the `defaultState`, rename the login property to authenticated

9. Rename the reducer function to `authReducer`, and export `authReducer` instead of `reducer`

10. Follow the instructions in this section and refactor the `authReducer`

11. You may like to dispatch `logoutUser` to see

## [Use const for Action Types](https://www.freecodecamp.org/learn/front-end-development-libraries/redux/use-const-for-action-types)

1. Edit `actions.js`, rename `login` and `logout` to `LOGIN` AND `LOGOUT` respectively.

2. Let `LOGIN` AND `LOGOUT` be equal to "LOGIN" and "LOGOUT"

3. Refactor the `loginUser` and `logoutUser` action creators as follow:

4. In `authReducer.js`, import the actions

```
import \* as actions from "./actions";
```

5. Refactor `authReducer` function, change the hard coded "LOGIN" and "LOGOUT" to `actions.LOGIN` and `actions.LOGOUT` respectively

## [Register a Store Listener](https://www.freecodecamp.org/learn/front-end-development-libraries/redux/register-a-store-listener)

Here I'll do things slightly different

1. in the `index.js` file, above the dispatch calls register a store listener

```
store.subscribe(() => console.log("auth status changed", store.getState())
```

> Note: This call is going to be triggered anytime an action is dispatch to the store

## [Combine Multiple Reducers](https://www.freecodecamp.org/learn/front-end-development-libraries/redux/combine-multiple-reducers)

1. Add the `INCREMENT` AND `DECREMENT` actions to the `actions.js`

2. Add `increment` and `decrement` action creators in `actionCreator.js`. don't forget to export them

3. In `src` directory, create a new file called `counterReducer.js` and add the `counterReducer` code to it, then export the `counterReducer`

4. In the src directory, create a `rootReducer.js` file

5. `import {combineReducers } from "redux"`

6. Import `authReducer` and `counterReducer` in the `rootReducer.js`

7. Follow the instruction in this section to complete the `rootReducer`

8. In the `store.js` import the `rootReducer` instead of the `authReducer`

9. Pass on the `rootReducer` to `createStore` instead

## [Send Action Data to the Store](https://www.freecodecamp.org/learn/front-end-development-libraries/redux/send-action-data-to-the-store)

1. Create a new action called `ADD_NOTE`

2. Create a new action creator `addNoteText` according to the instructions in this section

3. Create a new file called `notesReducer.js` according to the instructions in this section

4. Add the the notesReducer to the rootReducer

5. Send `ADD_NOTE` action to the store

END HERE...
