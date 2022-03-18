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
  background-color: ${COLORS.safety};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: ${SIZES.headerHeight};
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.notwhite};
`;

// const MiniText = styled.div`
//   position: absolute;
//   left: 132px;
//   top: 30px;
//   font-size: 12px;
//   border-radius: 5px;

//   padding: 5px 10px;
//   text-decoration: none;
//   background-color: ${COLORS.blackest};
//   color: ${COLORS.notwhite};
// `;

const Logo = styled.h1`
  font-weight: 400;
  padding: 10px;
  text-shadow: 2px 1px 0px ${COLORS.greyish};
  transition: 0.05s linear all;
  &:hover {
    transform: rotate(-1deg);
  }
  &:active {
    transform: rotate(1deg);
  }
`;
