import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { COLORS, SIZES } from "../constants";
import { FaceContext } from "./FaceContext";

const Profile = () => {
  const { members } = useContext(FaceContext);
  const [currentProfile, setCurrentProfile] = useState([]);
  const { name, friends, avatarUrl } = currentProfile;
  const params = useParams();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/users/${params.user}`, {});
        const data = await response.json();
        setCurrentProfile(data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [setCurrentProfile]);

  console.log(friends);
  console.log(members);

  return (
    <Wrapper>
      <Background src="/images/facespace_bg.jpg" />
      <ProfileContainer>
        <div style={{ display: "flex" }}>
          <ProfilePic src={avatarUrl} />
          <Name>{name}</Name>
        </div>
        <Friends>
          <FriendsHeading>{name}'s Friends</FriendsHeading>
          <FriendsList>
            {friends &&
              friends.map((friendId) => {
                console.log(friendId);
                return (
                  <div key={friendId}>
                    {members && <div>test</div>}

                    <FriendProfilePic />
                  </div>
                );
              })}
          </FriendsList>
        </Friends>
      </ProfileContainer>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - ${SIZES.headerHeight});
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  gap: 25px;
`;

const Friends = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FriendsHeading = styled.h3`
  width: 100%;
  border-bottom: solid 2px ${COLORS.cement}; ;
`;
const FriendsList = styled.div`
  display: flex;
  gap: 15px;
`;

const Background = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  object-position: center;
`;
const ProfilePic = styled.img`
  width: 250px;
  border: 5px solid ${COLORS.safety};
  border-radius: 2px;
  margin-top: -125px;
`;

const FriendProfilePic = styled.img`
  width: 150px;
  height: 150px;
`;

const Name = styled.h2`
  margin: 10px;
`;
