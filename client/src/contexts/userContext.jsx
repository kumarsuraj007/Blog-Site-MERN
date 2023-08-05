import { createContext, useState } from "react";

export const UserContext = createContext({
currentUser: null,
setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
const [currentUser, setCurrentUser] = useState(null);
const value = { currentUser, setCurrentUser };
console.log(currentUser)

return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};
