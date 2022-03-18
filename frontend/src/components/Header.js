import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../constants";

const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <StyledLink to="/">Facespace</StyledLink>
      </Logo>
      <SignIn>Sign In</SignIn>
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
  width: 100%;
`;

const SignIn = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-style: italic;
  font-size: 20px;
  font-weight: 800;
  color: ${COLORS.notwhite};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.notwhite};
`;

const Logo = styled.h1`
  font-weight: 400;
  padding: 10px;
`;
