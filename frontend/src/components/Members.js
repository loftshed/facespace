// import { useContext } from "react";
import styled from "styled-components";

// import { FaceContext } from "./FaceContext";

const Members = () => {
  // const { members, setMembers } = useContext(FaceContext);

  const handleGetMembers = async () => {
    console.log("Fetching members from server . . .");
    try {
      const receivedData = fetch("/api/users/", {
        // method: "GET",
        headers: {
          accepts: "application/json",
        },
      });
      console.log(await receivedData);
    } catch (err) {
      console.log(err);
    }
  };
  handleGetMembers();

  return <Wrapper>All Facespace members</Wrapper>;
};

export default Members;

const Wrapper = styled.h2``;
