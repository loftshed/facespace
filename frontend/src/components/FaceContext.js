import { useState, createContext } from "react";
export const FaceContext = createContext(null);

export const FaceProvider = ({ children }) => {
  const [members, setMembers] = useState({});
  const [currentProfile, setCurrentProfile] = useState([]);
  const [currentProfileFriends, setCurrentProfileFriends] = useState([]);

  return (
    <FaceContext.Provider
      value={{
        members,
        setMembers,
        currentProfile,
        setCurrentProfile,
        currentProfileFriends,
        setCurrentProfileFriends,
      }}
    >
      {children}
    </FaceContext.Provider>
  );
};
