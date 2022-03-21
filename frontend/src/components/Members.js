import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { MdPersonAdd } from "react-icons/md";

import { COLORS } from "../constants";
import { FaceContext } from "./FaceContext";
import Button from "./Button";

const Members = () => {
  const { members, signedInUser } = useContext(FaceContext);
  const { friends } = signedInUser;
  console.log(friends);

  //TODO modify this shiz to use CSS grid?

  return (
    <Wrapper>
      {members.length > 1 && (
        <div>
          <Heading>All Facespace members</Heading>
          <PicGrid>
            {members.map((el) => {
              const { id, name, avatarUrl } = el;
              const numMutualFriends = friends.filter((fr) =>
                el.friends.includes(fr)
              ).length;
              return (
                <StyledLink key={id} to={`/user/${id}`}>
                  <Member>
                    <ProfilePic alt={name} src={avatarUrl} />
                    <Banner>
                      <div>
                        <h3>{name}</h3>
                        <span>{friends.includes(id) && "You are friends"}</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <MutualFriends>
                          {numMutualFriends > 0 && (
                            <>{numMutualFriends} Mutual friends</>
                          )}
                        </MutualFriends>
                        {!friends.includes(id) && (
                          <AddButton>
                            <AddBtnIcon />
                          </AddButton>
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
  border-radius: 10px;
  padding: 25px;
  display: flex;
  width: fit-content;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  margin: 0px;
  padding: 0px;
  text-decoration: none;
`;

const Heading = styled.h3`
  margin: 5px;
  width: 100%;
  border-bottom: 2px solid ${COLORS.secondaryAccentClr};
  margin-bottom: 10px;
  /* text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 2px;
  text-decoration-color: ${COLORS.secondaryAccentClr}; */
`;
const PicGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: fit-content;
  justify-content: space-around;
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

const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 2px ${COLORS.blackestClr};
  border-radius: 5px;
  width: 170px;
  height: 245px;
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
