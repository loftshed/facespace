import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Switch>
          <Route path="/signin">SignIn</Route>
          <Route exact path="/">
            Homepage
          </Route>
          <Route path="/user/:user">Profile</Route>
          <Route path="/friends">Friends</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
