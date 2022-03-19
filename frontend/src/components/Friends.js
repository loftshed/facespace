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
              <div key={id}>
                <FriendName>{name}</FriendName>
                <FriendProfilePic src={avatarUrl} />
              </div>
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

const FriendName = styled.div`
  background-color: ${COLORS.safety};
  color: ${COLORS.notwhite};
  position: absolute;
  padding: 5px;
  transform: translateY(150px);
  /* opacity: 20%; */
  width: 150px;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const FriendsHeading = styled.h3`
  width: 100%;
  border-bottom: solid 2px ${COLORS.cement}; ;
`;
const FriendsList = styled.div`
  display: flex;
  gap: 15px;
`;

const FriendProfilePic = styled.img`
  width: 150px;
  height: 150px;
`;
