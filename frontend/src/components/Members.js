import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { COLORS } from "../constants";
import { FaceContext } from "./FaceContext";

const Members = () => {
  const { members } = useContext(FaceContext);

  //TODO modify this shiz to use CSS grid

  return (
    <Wrapper>
      {members.length > 1 && (
        <div>
          <Heading>All Facespace members</Heading>
          <PicGrid>
            {members.map((el) => {
              return (
                <StyledLink to={`/user/${el.id}`}>
                  <ProfilePic alt={el.name} key={el.id} src={el.avatarUrl} />
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
const ProfilePic = styled.img`
  border: solid 2px ${COLORS.primaryAccentClr};
  border-radius: 2px;
  width: 125px;
  height: 125px;
  transition: all 0.2s;
  &:hover {
    transform: scale(99%);
    border: solid 3px ${COLORS.primaryAccentClr};
  }
`;
