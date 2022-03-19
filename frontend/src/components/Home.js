import styled from "styled-components";
import { COLORS } from "../constants";
import Members from "./Members";

const Home = () => {
  return (
    <Wrapper>
      <Members />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  /* padding: 25px 100px 0px 100px; */
  background-color: ${COLORS.backgroundClr};
`;
