// userContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [username, setUsername] = useState('John Doe'); // Initialize with an appropriate initial value

//   useEffect(() => {
//     // Fetch user data or set it from your authentication provider (e.g., NextAuth)
//     // Replace this with your actual user data fetching logic
//     const userData = {
//       name: 'John Doe', // Replace with your user's name
//       // Add other user properties here
//     };
//     setUsername(userData);
//   }, []);

  return <UserContext.Provider value={{ username, setUsername }}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}
