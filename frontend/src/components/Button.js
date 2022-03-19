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
  padding: 6px 12px;
  outline: 2px solid white;
  border-radius: 50px;
  border-style: none;
  width: fit-content;
  /* box-shadow: 1px -1px 0px ${COLORS.secondaryAccentClr}, -1px 1px 0px ${COLORS.blackestClr}; */
  background-color: rgba(255, 255, 255, 0.1);
  color: ${COLORS.headingsClr};
  cursor: pointer;
  transition: all linear 0.1s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:active {
    background-color: ${COLORS.secondaryAccentClr};
  }
`;
