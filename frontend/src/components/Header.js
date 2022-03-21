import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

import { COLORS, SIZES } from "../constants";
import Button from "./Button";
import { FaceContext } from "./FaceContext";

const Header = () => {
  const { signedInUser } = useContext(FaceContext);
  const history = useHistory();

  return (
    <Wrapper>
      <Logo>
        <StyledLink to="/">Facespace</StyledLink>
      </Logo>
      {signedInUser.name ? (
        /// TODO move CSS into styled component
        <WelcomeBack>
          <span>Welcome back, {signedInUser.name}!</span>

          <div style={{ display: "flex", gap: "1px", paddingLeft: "15px" }}>
            <MiniAvatar
              onClick={() => {
                history.push(`/user/${signedInUser.id}`);
              }}
              src={signedInUser.avatarUrl}
            />

            <DownIcon />
          </div>
        </WelcomeBack>
      ) : (
        <Button type="button">
          <StyledLink to="/signin/">Sign In</StyledLink>
        </Button>
      )}
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
  /* box-shadow: inset 0px 0px 5px 0px ${COLORS.blackestClr}; */
  /* border-bottom: 3px solid ${COLORS.secondaryAccentClr}; */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.headingsClr};
`;

const WelcomeBack = styled.h3`
  transform: translateY(4px);
  // ^^^ really cheesing it with this, try to find better way
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MiniAvatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  transition: 0.15s linear all;
  cursor: pointer;
  border: 2px solid ${COLORS.tertiaryAccentClr};
  &:hover {
    border: 2px solid ${COLORS.secondaryAccentClr};
  }
`;

const DownIcon = styled(MdOutlineArrowDropDownCircle)`
  transition: 0.15s linear all;
  color: ${COLORS.tertiaryAccentClr};
  width: 48px;
  height: 48px;
  transform: translateY(-4px);
  &:hover {
    color: ${COLORS.secondaryAccentClr};
  }
  cursor: pointer;
`;

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
