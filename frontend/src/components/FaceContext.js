import { useState, useCallback, createContext } from "react";
export const FaceContext = createContext(null);

export const FaceProvider = ({ children }) => {
  const [members, setMembers] = useState({});
  const [currentlyDisplayedProfile, setCurrentlyDisplayedProfile] = useState(
    []
  );
  const [signedInUser, setSignedInUser] = useState({});
  const [signedInUserId, setSignedInUserId] = useState("");

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

  const changeFriendStatus = async (data) => {
    const usersAreFriends = signedInUser.friends.includes(data.newFriends[0]);
    const remainingFriends = signedInUser.friends.filter((el) => {
      return el !== data.newFriends[0];
    });

    if (!usersAreFriends) {
      setSignedInUser({
        ...signedInUser,
        friends: [...signedInUser.friends, data.newFriends[0]],
      });
    } else {
      setSignedInUser({ ...signedInUser, friends: remainingFriends });
    }

    try {
      await fetch("/api/friends", {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FaceContext.Provider
      value={{
        members,
        setMembers,
        currentlyDisplayedProfile,
        setCurrentlyDisplayedProfile,
        signedInUser,
        setSignedInUser,
        signedInUserId,
        setSignedInUserId,
        loadMembers,
        changeFriendStatus,
      }}
    >
      {children}
    </FaceContext.Provider>
  );
};
