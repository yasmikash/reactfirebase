import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// We get the firebase object that is exposed in ./firebase/firebase.js and pass it as an global object
import firebase from "./firebase/firebase";

import App from "./App";

ReactDOM.render(<App firebase={firebase} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
