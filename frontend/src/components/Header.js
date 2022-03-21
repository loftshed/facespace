import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { MdOutlineArrowDropDownCircle, MdLogout } from "react-icons/md";

import { COLORS, SIZES } from "../constants";
import Button from "./Button";
import { FaceContext } from "./FaceContext";

const Header = () => {
  const { signedInUser } = useContext(FaceContext);
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  ///////////// WORK ON DROP DOWN MENU TO MAKE LOGOUT POSSIBLE

  return (
    <Wrapper>
      <Logo>
        <StyledLink
          to="/"
          onClick={() => {
            if (showMenu) {
              setShowMenu(!showMenu);
            }
          }}
        >
          Facespace
        </StyledLink>
      </Logo>
      {signedInUser.name ? (
        /// TODO move CSS into styled component
        <WelcomeBack>
          <span>Welcome back, {signedInUser.name}!</span>

          <div style={{ display: "flex", gap: "1px", paddingLeft: "15px" }}>
            <MiniAvatar
              onClick={() => {
                if (showMenu) {
                  setShowMenu(!showMenu);
                }
                history.push(`/user/${signedInUser.id}`);
              }}
              src={signedInUser.avatarUrl}
            />

            <DownIcon
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
            <DropDown
              style={{
                opacity: showMenu ? "100%" : "0%",
                transform: !showMenu ? "translateY(-10px)" : "",
              }}
            >
              <LogoutButton
                onClick={() => {
                  localStorage.clear();
                  setShowMenu(!showMenu);
                  window.location.reload(false);
                }}
                style={{
                  cursor: showMenu ? "pointer" : "",
                }}
                disabled={!showMenu}
              >
                Log Out
                {MdLogout()}
              </LogoutButton>
            </DropDown>
          </div>
        </WelcomeBack>
      ) : (
        <StyledLink to="/signin/">
          <Button type="button">Sign In</Button>
        </StyledLink>
      )}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  position: fixed;
  background-color: ${COLORS.primaryAccentClr};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 60px;
  height: ${SIZES.headerHeight};
  width: 100%;
  user-select: none;
  z-index: 5;
  box-shadow: 0px 2px 5px 0px black;
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

const DropDown = styled.div`
  position: absolute;
  text-align: center;
  color: white;
  height: fit-content;
  font-size: 18px;
  font-weight: 400;
  width: fit-content;
  top: 45px;
  right: 2px;
  background-color: ${COLORS.primaryAccentClr};
  /* box-shadow: 0px 3px 5px 0px black; */
  padding: 10px 10px 8px 10px;
  border-radius: 5px;
  transition: 0.1s ease-in all;
  z-index: 1;
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
  z-index: 5;
`;

const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  gap: 10px;
  color: inherit;
  padding: 2px;
  text-shadow: 1px 1px 0px ${COLORS.backgroundClr};
  background: none;
  border-style: none;
  border-radius: 20px;
  width: fit-content;
  transition: 0.05s linear all;
  &:hover {
    background-color: ${COLORS.primaryAccentClr};
    text-decoration: 2px solid underline ${COLORS.tertiaryAccentClr};
  }
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
  font-size: 20px;
  align-items: center;
  text-shadow: 2px 1px 0px ${COLORS.backgroundClr};
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
