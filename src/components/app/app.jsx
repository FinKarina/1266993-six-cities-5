import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PageMain from "../page-main/page-main";
import AuthScreen from "../auth-screen/auth-screen";
import Favorites from "../favorites/favorites";
// import FavoritesEmpty from "../favorites-empty/favorites-empty";
// import MainEmpty from "../main-empty/main-empty";
import Property from "../property/property";
// import PropertyNotLogged from "../property-not-logged/property-not-logged";


const App = (props) => {
  const {placesCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PageMain placesCount = {placesCount} />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route path="/offer/:id" exact component={Property} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
