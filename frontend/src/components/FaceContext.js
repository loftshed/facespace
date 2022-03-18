import { useState, createContext } from "react";
export const FaceContext = createContext(null);

export const FaceProvider = ({ children }) => {
  const [members, setMembers] = useState({});
  return (
    <FaceContext.Provider value={{ members, setMembers }}>
      {children}
    </FaceContext.Provider>
  );
};
