import { useState, createContext } from "react";
export const FaceContext = createContext(null);

export const FaceProvider = ({ children }) => {
  const [members, setMembers] = useState({});
  const [currentProfile, setCurrentProfile] = useState([]);
  // const [currentProfileFriends, setCurrentProfileFriends] = useState([]);

  const loadMembers = async () => {
    try {
      const response = await fetch("/api/users/", {});
      const data = await response.json();
      setMembers(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FaceContext.Provider
      value={{
        members,
        setMembers,
        currentProfile,
        setCurrentProfile,
        // currentProfileFriends,
        // setCurrentProfileFriends,
        loadMembers,
      }}
    >
      {children}
    </FaceContext.Provider>
  );
};
