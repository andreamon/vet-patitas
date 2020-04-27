import React from "react";
import ReactDOM from "react-dom";

import App from "./AppContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// import {petApp} from "./reducers/index";
// import { createStore } from "redux";

//Crear el store , pasandole como parámetro el reducer
// const store = createStore(petApp);

ReactDOM.render(
                <App />
            , document.getElementById("root"));
