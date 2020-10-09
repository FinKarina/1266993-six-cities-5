import React from "react";
import PageMain from "../page-main/page-main";
import PropTypes from "prop-types";


const App = (props) => {
  const {placesCount} = props;

  return (
    <PageMain placesCount = {placesCount} />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
