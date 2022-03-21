import styled from "styled-components";
import { COLORS, SIZES } from "../constants";

const Footer = () => {
  return (
    <Wrapper>
      <p>All your personal information ©2022 Facespace.</p>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.primaryAccentClr};
  height: ${SIZES.footerHeight};
  width: 100%;
  bottom: 0px;
  color: white;
  font-weight: 300;
  font-size: 12px;
`;
