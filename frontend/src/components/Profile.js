import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { COLORS, SIZES } from "../constants";
import { FaceContext } from "./FaceContext";

const Profile = () => {
  const { members } = useContext(FaceContext);
  const [currentProfile, setCurrentProfile] = useState([]);
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

  console.log(members);
  console.log(currentProfile);

  return (
    <Wrapper>
      <Background src="/images/facespace_bg.jpg" />
      <ProfileContainer>
        <div style={{ display: "flex" }}>
          <ProfilePic src={currentProfile.avatarUrl} />
          <Name>{currentProfile.name}</Name>
        </div>
        <Friends>
          <FriendsHeading>{currentProfile.name}'s Friends</FriendsHeading>
          {currentProfile.id &&
            currentProfile.friends.map((el) => {
              <div></div>;
            })}
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

const Friends = styled.div``;

const FriendsHeading = styled.h3`
  width: 100%;
  border-bottom: solid 2px ${COLORS.cement}; ;
`;

const Background = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  object-position: center;
`;
const ProfilePic = styled.img`
  width: 250px;
  border: 5px solid ${COLORS.safety};
  border-radius: 2px;
  margin-top: -125px;
`;
const Name = styled.h2`
  margin: 5px 10px;
`;
