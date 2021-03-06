import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FaceContext } from "./FaceContext";
import { COLORS } from "../constants";

const Friends = () => {
  const { members, currentlyDisplayedProfile, signedInUser } =
    useContext(FaceContext);
  const { name, friends } = currentlyDisplayedProfile;

  return (
    <Wrapper>
      <FriendsHeading>
        {name === signedInUser.name ? "Your Friends" : `${name}'s Friends`}
      </FriendsHeading>
      <FriendsList>
        {friends &&
          friends.map((friendId) => {
            const { id, name, avatarUrl } = members.find(
              (el) => el.id === friendId
            );
            return (
              <StyledLink key={id} to={`/user/${id}`}>
                <FriendCard>
                  <FriendProfilePic src={avatarUrl} />
                  <FriendName>{name}</FriendName>
                </FriendCard>
              </StyledLink>
            );
          })}
      </FriendsList>
    </Wrapper>
  );
};

export default Friends;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-decoration-color: ${COLORS.tertiaryAccentClr};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const FriendCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 185px;
  width: 150px;
  background-color: ${COLORS.primaryAccentClr};
  color: ${COLORS.headingsClr};
  border-radius: 5px;
  box-shadow: 0px 1px 5px black;
  &:hover {
    box-shadow: 0px 0px 0px 1.5px ${COLORS.tertiaryAccentClr};
  }
`;

const FriendName = styled.div`
  padding: 5px 0px;
  text-align: center;
`;

const FriendsHeading = styled.h3`
  width: 100%;
  border-bottom: solid 2px ${COLORS.secondaryAccentClr}; ;
`;
const FriendsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  row-gap: 10px;
  justify-items: center;
`;

const FriendProfilePic = styled.img`
  width: 150px;
  height: 150px;
`;
