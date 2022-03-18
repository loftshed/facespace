import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import SignIn from "./SignIn";
import Profile from "./Profile";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/user/:user">
            <Profile />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
