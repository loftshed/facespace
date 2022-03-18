import styled from "styled-components";
import { COLORS } from "../constants";

const Button = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Button;

const Wrapper = styled.button`
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
