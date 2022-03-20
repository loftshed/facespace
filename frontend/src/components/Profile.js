import { useEffect, useLayoutEffect, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { COLORS, SIZES } from "../constants";
import { FaceContext } from "./FaceContext";
import Friends from "./Friends";

const Profile = () => {
  const { currentProfile, setCurrentProfile, loadMembers } =
    useContext(FaceContext);
  const { name, friends, avatarUrl } = currentProfile;
  const params = useParams();

  useMemo(() => {
    loadMembers();
  }, []);

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
  }, [setCurrentProfile, params.user]);
  /// TODO, get this all centered properly

  return (
    <Wrapper>
      <Background src="/images/facespace_bg.jpg" />
      <ProfileContainer>
        <div style={{ display: "flex" }}>
          <ProfilePic src={avatarUrl} />
          <Name>
            {name}
            {friends && <FriendCount>{friends.length} friends</FriendCount>}
          </Name>
        </div>
        <Friends />
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
  /* align-items: center; */
  width: 600px;
  gap: 25px;
`;

const FriendCount = styled.p`
  text-align: right;
  font-size: 14px;
  color: ${COLORS.tertiaryAccentClr};
`;

const Background = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  object-position: center;
`;
const ProfilePic = styled.img`
  width: 250px;
  /* border: 5px solid ${COLORS.secondaryAccentClr}; */
  box-shadow: 0px 0px 0px 10px ${COLORS.backgroundClr};
  border-radius: 200px;
  /* margin-left: 5px; */
  margin-top: -125px;
`;

const Name = styled.h2`
  margin: 10px 20px;
`;
