import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import SignIn from "./SignIn";
import Profile from "./Profile";
import Footer from "./Footer";
import { FaceContext } from "./FaceContext";

const App = () => {
  const {
    loadMembers,
    members,
    setSignedInUserId,
    setSignedInUser,
    signedInUserId,
  } = useContext(FaceContext);

  useEffect(() => {
    loadMembers();
  }, [loadMembers]);

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    if (userId) {
      setSignedInUserId(userId);
      if (members.length > 0) {
        const currentUser = members.find((el) => {
          return el.id === userId;
        });
        setSignedInUser(currentUser);
      }
    }
  }, [setSignedInUser, setSignedInUserId, members]);

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
            {signedInUserId ? <Redirect to="/" /> : <SignIn />}
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
