import { useLayoutEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { COLORS, SIZES } from "../constants";
import { FaceContext } from "./FaceContext";
import Friends from "./Friends";
import {
  MdOutlineSchool,
  MdOutlineLocationCity,
  MdWorkOutline,
} from "react-icons/md";

const Profile = () => {
  const {
    currentlyDisplayedProfile,
    setCurrentlyDisplayedProfile,
    loadMembers,
    members,
    signedInUser,
    changeFriendStatus,
  } = useContext(FaceContext);
  const {
    name,
    friends,
    avatarUrl,
    id,
    hometown,
    education,
    jobPosition,
    employer,
  } = currentlyDisplayedProfile;
  const params = useParams();

  useLayoutEffect(() => {
    loadMembers();
  }, [loadMembers]);

  useLayoutEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/users/${params.user}`, {});
        const jsonifiedResponse = await response.json();
        setCurrentlyDisplayedProfile(jsonifiedResponse.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [setCurrentlyDisplayedProfile, params.user, members, signedInUser]);

  if (!currentlyDisplayedProfile.name) {
    return null;
  }

  return (
    <Wrapper>
      <Background src="/images/facespace_bg.jpg" />
      <ProfileContainer>
        <div style={{ display: "flex" }}>
          <ProfilePic src={avatarUrl} />
          <DetailsContainer>
            <Name>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {name}
                {signedInUser.name &&
                  signedInUser.id !== currentlyDisplayedProfile.id && (
                    <AddButton
                      onClick={(ev) => {
                        ev.preventDefault();
                        changeFriendStatus({
                          newFriends: [id, signedInUser.id],
                        });
                      }}
                    >
                      {signedInUser.friends?.includes(id) &&
                        signedInUser.id !== id && <>Remove Friend</>}
                      {!signedInUser.friends?.includes(id) &&
                        signedInUser.id !== id && <>Add Friend</>}
                    </AddButton>
                  )}
              </div>
              <FriendCount>
                {friends?.length} friends
                {!signedInUser.name ? (
                  <></>
                ) : (
                  <>
                    {signedInUser.friends.filter((fr) => friends.includes(fr))
                      .length > 0 &&
                      signedInUser.id !== params.user && (
                        <MutualFriends>
                          (
                          {
                            signedInUser.friends.filter((fr) =>
                              friends.includes(fr)
                            ).length
                          }{" "}
                          mutual)
                        </MutualFriends>
                      )}{" "}
                  </>
                )}
              </FriendCount>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <DataRow>
                  <span style={{ color: `${COLORS.secondaryAccentClr}` }}>
                    {MdOutlineLocationCity()}
                  </span>
                  {hometown}
                </DataRow>
                <DataRow>
                  <span
                    style={{
                      color: `${COLORS.secondaryAccentClr}`,
                    }}
                  >
                    {MdOutlineSchool()}
                  </span>
                  {education}
                </DataRow>
                <DataRow>
                  <span
                    style={{
                      color: `${COLORS.secondaryAccentClr}`,
                    }}
                  >
                    {MdWorkOutline()}
                  </span>
                  {jobPosition}
                  <span
                    style={{
                      color: `${COLORS.secondaryAccentClr}`,
                    }}
                  >
                    at
                  </span>
                  {employer}
                </DataRow>
              </div>
            </Name>
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
  margin-top: 50px;
  width: 100%;
  /* height: calc(100vh - ${SIZES.headerHeight}); */
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 750px;
  gap: 25px;
`;

const FriendCount = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${COLORS.tertiaryAccentClr};
`;

const MutualFriends = styled.span`
  color: white;
  font-weight: 300;
  /* font-size: 14px; */
  /* background-color: ${COLORS.blackestClr}; */
  /* padding: 1px 5px; */
  margin-left: 5px;
  border-radius: 3px;
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
  /* flex-direction: column; */
  justify-content: space-between;
  margin-top: -30px;
  padding-top: 20px;
  padding-left: 300px;
  padding-right: 20px;
  width: 100%;
  background-color: ${COLORS.primaryAccentClr};
  border-radius: 10px;
  box-shadow: 0px 1px 5px black;
`;

const AddButton = styled.button`
  /* position: absolute; */
  font-size: 14px;
  font-weight: 400;
  color: white;
  height: fit-content;
  width: fit-content;
  padding: 6px 10px 4px 10px;
  border-radius: 20px;
  border-style: none;
  background-color: ${COLORS.blackestClr};
  cursor: pointer;
  &:hover {
    outline: 2px solid ${COLORS.tertiaryAccentClr};
  }
  &:active {
    background-color: ${COLORS.secondaryAccentClr};
    outline: 2px solid ${COLORS.tertiaryAccentClr};
  }
`;

// const IsFriend = styled.span`
//   font-size: 14px;
//   font-weight: 400;
//   color: white;
//   height: fit-content;
//   padding: 6px 10px 4px 10px;
//   border-radius: 20px;
//   border-style: none;
//   background-color: ${COLORS.blackestClr};
// `;

const DataRow = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 300;
  display: flex;
  gap: 5px;
`;

const Name = styled.h2`
  width: 425px;
  position: absolute;
  display: flex;
  flex-direction: column;
  text-shadow: 2px 1px 0px ${COLORS.backgroundClr};
  gap: 8px;
`;
