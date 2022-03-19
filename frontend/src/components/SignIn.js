import styled from "styled-components";
import { COLORS, SIZES } from "../constants";
import Button from "./Button";

const SignIn = () => {
  const handleClick = (ev) => {
    console.log(ev);
  };

  return (
    <Wrapper>
      <Overlay />
      <BlurBg>
        <LoginContainer>
          <div>
            <Heading>Facespace</Heading>
            <InputArea>
              <Input
                key="username"
                type="text"
                placeholder={"Your first name"}
              />
              <Button>Submit</Button>
            </InputArea>
          </div>
        </LoginContainer>
      </BlurBg>
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
  background-color: ${COLORS.blackestClr};
  opacity: 60%;
  z-index: 0;
`;

const BlurBg = styled.div`
  backdrop-filter: blur(10px);
  padding: 10px;
  border-radius: 12px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(10px);
  z-index: 1;
  /* background-color: ${COLORS.secondaryAccentClr}; */
  border-radius: 12px;
  border: solid 2px ${COLORS.secondaryAccentClr};
`;

const Heading = styled.h3`
  font-size: 20px;
  background-color: ${COLORS.primaryAccentClr};
  color: ${COLORS.headingsClr};
  padding: 10px 40px;
  border-bottom: 3px solid ${COLORS.secondaryAccentClr};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  gap: 15px;
  padding: 15px 40px;
`;

const Input = styled.input`
  font-size: 20px;
  border-radius: 5px;
  line-height: 40px;
  color: ${COLORS.blackestClr};
  border: solid 2px ${COLORS.secondaryAccentClr};
  display: flex;
  align-items: center;
  padding: 0px 10px;
  &:focus {
    outline: solid 2px ${COLORS.primaryAccentClr};
  }
`;
