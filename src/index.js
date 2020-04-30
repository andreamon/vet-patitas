import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { FirebaseAppProvider } from "reactfire";
import FirebaseConfig from './firebase';

ReactDOM.render((
                <FirebaseAppProvider FirebaseConfig={FirebaseConfig}>
                    <App />
                </FirebaseAppProvider>
                ), document.getElementById("root"));
