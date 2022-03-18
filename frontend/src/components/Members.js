import { useContext, useEffect } from "react";
import styled from "styled-components";

import { FaceContext } from "./FaceContext";

const Members = () => {
  const { members, setMembers } = useContext(FaceContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/users/", {});
        const data = await response.json();
        setMembers([data.data]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [setMembers]);

  console.log(members);

  return <Wrapper>All Facespace members</Wrapper>;
};

export default Members;

const Wrapper = styled.h2``;
