import styled from "styled-components";

import { COLORS } from "../constants";

const Header = () => {
  return (
    <Wrapper>
      <Logo>Facespace</Logo>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background-color: ${COLORS.safety};
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 10px;
`;

const Logo = styled.h1`
  color: ${COLORS.notwhite};
  font-size: 42px;
  padding: 10px;
`;
