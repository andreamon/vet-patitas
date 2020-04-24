import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/Pet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import {petApp} from "./reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";

//Crear el store , pasandole como parámetro el reducer
const store = createStore(petApp);

ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>
            , document.getElementById("root"));
