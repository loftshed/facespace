import { useEffect, useLayoutEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { COLORS, SIZES } from "../constants";
import { FaceContext } from "./FaceContext";
import Friends from "./Friends";

const Profile = () => {
  const { currentProfile, setCurrentProfile, loadMembers, signedInUser } =
    useContext(FaceContext);
  const { name, friends, avatarUrl, id } = currentProfile;
  const params = useParams();

  useLayoutEffect(() => {
    loadMembers();
  }, []);

  useLayoutEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/users/${params.user}`, {});
        const jsonifiedResponse = await response.json();
        setCurrentProfile(jsonifiedResponse.data);
      } catch (err) {
        console.log(err);
        // TODO make error page
      }
    })();
  }, [setCurrentProfile, params.user]);
  /// TODO, get this all centered properly

  // const numMutualFriends = signedInUser.friends.filter((fr) =>
  //   friends.includes(fr)
  // ).length;

  return (
    <Wrapper>
      <Background src="/images/facespace_bg.jpg" />
      <ProfileContainer>
        <div style={{ display: "flex" }}>
          <ProfilePic src={avatarUrl} />
          <DetailsContainer>
            <h2>
              {name}
              <FriendCount>{friends?.length} friends</FriendCount>
            </h2>
            {/* {friends && (
              <>
                <p>({numMutualFriends} mutual)</p>
              </>
            )}
            {signedInUser.friends.includes(id) && (
              <span
                style={{ fontSize: "14px", fontWeight: "400", color: "white" }}
              >
                You are friends
              </span>
            )} */}
          </DetailsContainer>
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
  width: 675px;
  gap: 25px;
`;

const FriendCount = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${COLORS.tertiaryAccentClr};
`;

const Background = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  object-position: center;
`;
const ProfilePic = styled.img`
  position: absolute;
  width: 250px;
  /* border: 5px solid ${COLORS.secondaryAccentClr}; */
  box-shadow: 0px 0px 0px 5px ${COLORS.backgroundClr};
  border-radius: 200px;
  margin-left: 25px;
  margin-top: -155px;
`;

const DetailsContainer = styled.div`
  display: flex;
  gap: 5px;
  height: 150px;
  flex-direction: column;
  margin-top: -30px;
  padding-top: 20px;
  padding-left: 300px;
  width: 100%;
  background-color: ${COLORS.primaryAccentClr};
  border-radius: 10px;
  box-shadow: 0px 1px 5px black;
`;
