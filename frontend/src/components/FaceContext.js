import { useState, useCallback, createContext } from "react";
export const FaceContext = createContext(null);

export const FaceProvider = ({ children }) => {
  const [members, setMembers] = useState({});
  const [currentProfile, setCurrentProfile] = useState([]);
  const [signedInUser, setSignedInUser] = useState({});

  const loadMembers = useCallback(() => {
    (async () => {
      try {
        const response = await fetch("/api/users/", {});
        const jsonifiedResponse = await response.json();
        setMembers(jsonifiedResponse.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <FaceContext.Provider
      value={{
        members,
        setMembers,
        currentProfile,
        setCurrentProfile,
        signedInUser,
        setSignedInUser,
        loadMembers,
      }}
    >
      {children}
    </FaceContext.Provider>
  );
};
