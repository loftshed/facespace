import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import SignIn from "./SignIn";
import Profile from "./Profile";
import { FaceContext } from "./FaceContext";
// import { COLORS } from "../constants";

const App = () => {
  const { setMembers } = useContext(FaceContext);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/users/", {});
        const data = await response.json();
        setMembers(data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [setMembers]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Content id="root">
        <Header />
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
      </Content>
    </BrowserRouter>
  );
};

export default App;

const Content = styled.div``;
