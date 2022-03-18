import { useContext, useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

import { FaceContext } from "./FaceContext";
import Profile from "./Profile";

const Members = () => {
  const { members, setMembers } = useContext(FaceContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/users/", {});
        const data = await response.json();
        setMembers(data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [setMembers]);

  return (
    <Wrapper>
      <Heading>All Facespace members</Heading>
      <PicGrid>
        {members.length > 1 &&
          members.map((el) => {
            console.log(el);
            return <ProfilePic alt={el.name} key={el.id} src={el.avatarUrl} />;
          })}
      </PicGrid>
    </Wrapper>
  );
};

export default Members;

const Wrapper = styled.div``;
const Heading = styled.h3`
  font-family: "Josefin Sans", sans-serif;
  margin: 5px;
`;
const PicGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const ProfilePic = styled.img`
  border: solid 2px ${COLORS.safety};
  width: 125px;
  transition: all 0.2s;
  &:hover {
    transform: scale(98%);
    border: solid 5px ${COLORS.safety};
  }
`;
