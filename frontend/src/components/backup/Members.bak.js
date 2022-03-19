import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { COLORS } from "../constants";
import { FaceContext } from "./FaceContext";

const Members = () => {
  const { members, setCurrentProfile, currentProfile } =
    useContext(FaceContext);
  const history = useHistory();

  const getProfile = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}`, {});
      const jsonified = await response.json();
      setCurrentProfile(jsonified.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      {members.length > 1 && (
        <div>
          <Heading>All Facespace members</Heading>
          <PicGrid>
            {members.map((el) => {
              return (
                <ProfilePic
                  onClick={async () => {
                    await getProfile(el.id);
                    // setCurrentProfileFriends(getFriends());
                    history.push(`/user/${el.id}`);
                  }}
                  alt={el.name}
                  key={el.id}
                  src={el.avatarUrl}
                />
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
  width: fit-content;
  margin-top: 20px;
`;

const Heading = styled.h3`
  margin: 5px;
  width: 100%;
  border-bottom: 2px solid ${COLORS.cement};
  margin-bottom: 10px;
  /* text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 2px;
  text-decoration-color: ${COLORS.cement}; */
`;
const PicGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: fit-content;
  justify-content: space-around;
`;
const ProfilePic = styled.img`
  border: solid 2px ${COLORS.safety};
  border-radius: 2px;
  width: 125px;
  height: 125px;
  transition: all 0.2s;
  &:hover {
    transform: scale(99%);
    border: solid 3px ${COLORS.safety};
    cursor: pointer;
  }
`;