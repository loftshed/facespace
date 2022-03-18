import { useContext } from "react";
import styled from "styled-components";

import { FaceContext } from "./FaceContext";

const Members = () => {
  const { members, setMembers } = useContext(FaceContext);

  // this does not work with proxy
  const handleGetMembers = async () => {
    try {
      const response = await fetch("/api/users/", {});
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  handleGetMembers().then((res) => console.log(res));

  return <Wrapper>All Facespace members</Wrapper>;
};

export default Members;

const Wrapper = styled.h2``;
