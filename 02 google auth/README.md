For Google Auth the following setps is required.

- 1. console.cloud.google you can make Project and then create Credentials
- 2. Add clientId in /compnents/GoogleAuth.js and also in auth-redux-components/GoogleAuthRedux.js
- 3. public index.js file put script <script src="https://apis.google.com/js/api.js" ></script>

##### This exercise will help how can google-auth working with Redux

Define auth-reduxcomponents where you can learn google-auth with redux.<br>
Steps to following in redux

- 1. This needs to libraries redux , react-redux
- 2. createStore from redux (file auth-redux-components/app.js)
- 3. Provider from react-redux (file auth-redux-components/app.js)
- 4. make reducers (file auth-redux-components/reducers/index.js)
- 5. authReducer take two paramters state and action (file auth-redux-components/reducers/authReducer)
- 6. Define actions (file auth-redux-components/actions/index)
- 7. connect action (file file auth-redux-components/GoogleAuthRedux.js )

## Available Scripts

In the project directory, you can run:

### `npm i`

Install all dependency.<br />

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
