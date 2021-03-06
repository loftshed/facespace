import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdPersonAdd, MdPerson } from "react-icons/md";

import { COLORS } from "../constants";
import { FaceContext } from "./FaceContext";

const Members = () => {
  const { members, signedInUser, changeFriendStatus } = useContext(FaceContext);
  const { friends } = signedInUser;

  return (
    <Wrapper>
      {members.length > 0 && (
        <div>
          <Heading>All Facespace members</Heading>
          <PicGrid>
            {members.map((el) => {
              const { id, name, avatarUrl } = el;
              const numMutualFriends = friends?.filter((fr) =>
                el.friends.includes(fr)
              ).length;
              const isFriend = friends?.includes(id);
              const isYou = signedInUser?.id === id;
              return (
                <StyledLink
                  key={id}
                  to={`/user/${id}`}
                  // style={{ order: isFriend ? "-1" : "0" }}
                  // ^^ kind of makes things confusing while adding friends
                >
                  <Member
                    style={{
                      height: signedInUser.id ? "245px" : "215px",
                    }}
                  >
                    <ProfilePic alt={name} src={avatarUrl} />
                    <Banner>
                      <div>
                        <h3>{name}</h3>
                        <span>
                          {isFriend && "You are friends"}
                          {isYou && "This is you"}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <MutualFriends>
                          {numMutualFriends > 0 && signedInUser.id !== id && (
                            <>
                              {numMutualFriends} Mutual friend
                              {numMutualFriends > 1 ? "s" : ""}
                            </>
                          )}
                        </MutualFriends>
                        {signedInUser.id && (
                          <>
                            {!friends?.includes(id) && id !== signedInUser.id && (
                              <AddButton
                                type="button"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                  changeFriendStatus({
                                    newFriends: [id, signedInUser.id],
                                  });
                                }}
                              >
                                <AddBtnIcon />
                              </AddButton>
                            )}

                            {friends?.includes(id) && id !== signedInUser.id && (
                              <AddButton2
                                disabled={true}
                                style={{
                                  color: `${COLORS.tertiaryAccentClr}`,
                                  cursor: "pointer",
                                }}
                              >
                                <FriendIcon />
                              </AddButton2>
                            )}
                          </>
                        )}
                      </div>
                    </Banner>
                  </Member>
                </StyledLink>
              );
            })}
          </PicGrid>
        </div>
      )}
    </Wrapper>
  );
};

export default Members;

const Wrapper = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 25px;
  width: 100%;
  justify-content: center;
  user-select: none;

  margin-top: 70px;
  margin-bottom: 30px;
`;

const StyledLink = styled(Link)`
  margin: 0px;
  padding: 0px;
  text-decoration: none;
`;

const Heading = styled.h3`
  width: 100%;
  border-bottom: 2px solid ${COLORS.secondaryAccentClr};
  margin-bottom: 10px;
  /* text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 2px;
  text-decoration-color: ${COLORS.secondaryAccentClr}; */
`;

const PicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  /* gap: 5px; */
  column-gap: 7.5px;
  row-gap: 15px;
  /// this margin shit is dumb as hell
  /// but there's other shit I want to do before tmw :)
  margin-left: -22px;
  width: fit-content;
  align-content: center;
  justify-items: center;
  justify-content: space-between;
`;

const MutualFriends = styled.span`
  color: white;
  font-weight: 300;
  font-size: 14px;
  align-self: flex-end;
`;

const AddButton = styled.button`
  align-self: flex-end;
  color: ${COLORS.secondaryAccentClr};
  background-color: ${COLORS.backgroundClr};
  border-style: none;
  padding: 3px 5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.tertiaryAccentClr};
  }
`;

// i know there's some better way to do this by extending the previous button or probably using this one as the base
const AddButton2 = styled.button`
  align-self: flex-end;
  color: ${COLORS.secondaryAccentClr};
  background-color: ${COLORS.backgroundClr};
  border-style: none;
  padding: 3px 5px;
  border-radius: 5px;
`;

const AddBtnIcon = styled(MdPersonAdd)``;
const FriendIcon = styled(MdPerson)``;

const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 2px ${COLORS.blackestClr};
  border-radius: 5px;
  width: 170px;
  transition: all 0.15s;
  background-color: ${COLORS.blackestClr};
  &:hover {
    box-shadow: 0px 0px 0px 1.5px ${COLORS.tertiaryAccentClr};
  }
  box-shadow: 0px 2px 5px 0px black;
`;

const ProfilePic = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 15px;
  width: 100%;
  height: 100%;
  padding: 8px 6px 4px 6px;
  border-radius: 3px;
  background-color: ${COLORS.primaryAccentClr};
  color: ${COLORS.tertiaryAccentClr};
`;
