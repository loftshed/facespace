import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS, SIZES } from "../constants";

const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <StyledLink to="/">Facespace</StyledLink>
      </Logo>
      <SignIn>
        <StyledLink to="/signin/">Sign In</StyledLink>
      </SignIn>
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

const SignIn = styled.button`
  font-family: "Josefin Sans", sans-serif;
  font-size: 20px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 50px;
  border-style: none;
  box-shadow: 1px -1px 0px ${COLORS.cement}, -1px 1px 0px ${COLORS.blackest};
  background-color: ${COLORS.greyish};
  color: ${COLORS.notwhite};
  transition: all linear 0.1s;
  &:active {
    box-shadow: -1px 1px 0px ${COLORS.cement}, 1px -1px 0px ${COLORS.blackest};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.notwhite};
`;

const Logo = styled.h1`
  font-weight: 400;
  padding: 10px;
  text-shadow: 2px 1px 0px ${COLORS.greyish};
`;
