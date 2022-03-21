import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { COLORS } from "../constants";
import { FaceContext } from "./FaceContext";

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
              return (
                <StyledLink key={id} to={`/user/${id}`}>
                  <Member>
                    <ProfilePic alt={name} src={avatarUrl} />
                    {friends.includes(id) && (
                      <FriendBanner>Friend</FriendBanner>
                    )}
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
  background-color: ${COLORS.blackestClr};
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

const Member = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: solid 2px ${COLORS.primaryAccentClr};
  border-radius: 2px;
  width: 125px;
  height: 150px;
  transition: all 0.2s;
  background-color: ${COLORS.tertiaryAccentClr};
  &:hover {
    background-color: ${COLORS.secondaryAccentClr};
    border: solid 3px ${COLORS.primaryAccentClr};
  }
`;

const ProfilePic = styled.img``;

const FriendBanner = styled.span`
  position: absolute;
  font-size: 15px;
  margin-top: 100px;
  text-align: center;
  padding: 2px 10px;
  border-radius: 20px;
  background-color: ${COLORS.backgroundClr};
  color: ${COLORS.tertiaryAccentClr};
`;
