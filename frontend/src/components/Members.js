import { useContext, useEffect } from "react";
import styled from "styled-components";

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
            return <ProfilePic key={el.id} src={el.avatarUrl} />;
          })}
      </PicGrid>
    </Wrapper>
  );
};

export default Members;

const Wrapper = styled.h2``;
const Heading = styled.h3``;
const PicGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
const ProfilePic = styled.img`
  width: 125px;
`;
