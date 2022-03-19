import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLORS, SIZES } from "../constants";
import Button from "./Button";

const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <StyledLink to="/">Facespace</StyledLink>
      </Logo>
      {/* <MiniText>Home</MiniText> */}
      <Button>
        <StyledLink to="/signin/">Sign In</StyledLink>
      </Button>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background-color: ${COLORS.primaryAccentClr};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 60px;
  height: ${SIZES.headerHeight};
  width: 100%;
  box-shadow: inset 0px 0px 5px 0px ${COLORS.blackestClr};
  /* border-bottom: 3px solid ${COLORS.secondaryAccentClr}; */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.headingsClr};
`;

// const MiniText = styled.div`
//   position: absolute;
//   left: 132px;
//   top: 30px;
//   font-size: 12px;
//   border-radius: 5px;

//   padding: 5px 10px;
//   text-decoration: none;
//   background-color: ${COLORS.blackestClr};
//   color: ${COLORS.headingsClr};
// `;

const Logo = styled.h1`
  font-weight: 400;
  padding: 10px;
  text-shadow: 2px 1px 0px ${COLORS.backgroundClr};
  transition: 0.05s linear all;
  &:hover {
    transform: rotate(-1deg);
  }
  &:active {
    transform: rotate(1deg);
  }
`;
