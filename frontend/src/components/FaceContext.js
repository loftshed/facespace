import { useState, createContext } from "react";
export const FaceContext = createContext(null);

export const FaceProvider = ({ children }) => {
  const [members, setMembers] = useState({});
  const [currentProfile, setCurrentProfile] = useState([]);

  const loadMembers = async () => {
    try {
      const response = await fetch("/api/users/", {});
      const jsonifiedResponse = await response.json();
      setMembers(jsonifiedResponse.data);
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
        loadMembers,
      }}
    >
      {children}
    </FaceContext.Provider>
  );
};
