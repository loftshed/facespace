import styled from "styled-components";

import { COLORS } from "../constants";
import Header from "./Header";

const Home = () => {
  console.log("sup");
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${COLORS.greyish};
`;
