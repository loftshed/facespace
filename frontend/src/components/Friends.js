import { useContext } from "react";
import styled from "styled-components";

import { FaceContext } from "./FaceContext";
import { COLORS } from "../constants";

const Friends = () => {
  const { members, currentProfile } = useContext(FaceContext);
  const { name, friends } = currentProfile;

  return (
    <Wrapper>
      <FriendsHeading>{name}'s Friends</FriendsHeading>
      <FriendsList>
        {friends &&
          friends.map((friendId) => {
            const { id, name, avatarUrl } = members.find(
              (el) => el.id === friendId
            );
            return (
              <FriendCard key={id}>
                <FriendProfilePic src={avatarUrl} />
                <FriendName>{name}</FriendName>
              </FriendCard>
            );
          })}
      </FriendsList>
    </Wrapper>
  );
};

export default Friends;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FriendCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 185px;
  background-color: ${COLORS.primaryAccentClr};
  color: ${COLORS.headingsClr};
  border-radius: 5px;
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
  display: flex;
  gap: 15px;
`;

const FriendProfilePic = styled.img`
  width: 150px;
  height: 150px;
`;
