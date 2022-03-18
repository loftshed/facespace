import styled from "styled-components";
import { COLORS, SIZES } from "../constants";
import Button from "./Button";

const SignIn = () => {
  return (
    <Wrapper>
      <Overlay />
      <LoginContainer>
        <Input type="text" placeholder={"Your first name"} />
        <Button>Submit</Button>
      </LoginContainer>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - ${SIZES.headerHeight});
  width: 100%;
  background: url("/images/facespace_bg.jpg");
  background-position: center;
  justify-content: center;
  align-items: center;
  /* padding: 25px 100px 0px 100px; */
`;

const Overlay = styled.div`
  position: absolute;
  height: inherit;
  width: inherit;
  background-color: ${COLORS.blackest};
  opacity: 60%;
  z-index: 0;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 40px;
  backdrop-filter: blur(10px);
  gap: 20px;
  z-index: 1;
  /* background-color: ${COLORS.cement}; */
  border-radius: 10px;
  border: dashed 3px ${COLORS.safety};
`;

const Input = styled.input`
  font-size: 24px;
  border-radius: 5px;
  line-height: 40px;
  color: ${COLORS.blackest};
  border: solid 2px ${COLORS.cement};
  display: flex;
  align-items: center;
  padding: 0px 10px;
  &:focus {
    outline: solid 2px ${COLORS.safety};
  }
`;
