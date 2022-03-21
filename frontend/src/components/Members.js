import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { MdPersonAdd, MdPerson } from "react-icons/md";

import { COLORS } from "../constants";
import { FaceContext } from "./FaceContext";

const Members = () => {
  const { members, signedInUser } = useContext(FaceContext);
  const { friends } = signedInUser;
  const history = useHistory();
  console.log(friends);

  return (
    <Wrapper>
      {members.length > 1 && (
        <div>
          <Heading>All Facespace members</Heading>
          <PicGrid>
            {members.map((el) => {
              const { id, name, avatarUrl } = el;
              const numMutualFriends = friends?.filter((fr) =>
                el.friends.includes(fr)
              ).length;
              const isFriend = friends?.includes(id);
              return (
                <StyledLink
                  key={id}
                  to={`/user/${id}`}
                  style={{ order: isFriend ? "-1" : "0" }}
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
                        <span>{isFriend && "You are friends"}</span>
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
                            {!friends?.includes(id) && (
                              <AddButton>
                                <AddBtnIcon />
                              </AddButton>
                            )}

                            {friends?.includes(id) && (
                              <AddButton
                                style={{
                                  color: `${COLORS.tertiaryAccentClr}`,
                                  cursor: "",
                                }}
                              >
                                <FriendIcon />
                              </AddButton>
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
  gap: 5px;
  /// this margin shit is dumb as hell
  /// but there's other shit I want to do before tmw :)
  margin-left: -10px;
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
