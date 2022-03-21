import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useContext, useMemo, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import SignIn from "./SignIn";
import Profile from "./Profile";
import Footer from "./Footer";
import { FaceContext } from "./FaceContext";

const App = () => {
  const { loadMembers, setSignedInUser } = useContext(FaceContext);

  useEffect(() => {
    const persistedUser = localStorage.getItem("user");
    const jsonifiedPersistedUser = JSON.parse(persistedUser);

    if (jsonifiedPersistedUser) {
      setSignedInUser(jsonifiedPersistedUser);
    }
  }, []);

  useMemo(() => {
    return loadMembers();
  }, []);

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
        <Footer />
      </Content>
    </BrowserRouter>
  );
};

export default App;

const Content = styled.div``;
