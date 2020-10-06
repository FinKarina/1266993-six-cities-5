import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";

const Setting = {
  PLACES_COUNT: 312
};

ReactDom.render(
    <App
      placesCount={Setting.PLACES_COUNT}
    />,
    document.querySelector(`#root`)
);

