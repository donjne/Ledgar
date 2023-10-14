// ProfileImageContext.js
import React, { createContext, useContext, useState } from 'react';

const ProfileImageContext = createContext();

export const ProfileImageContextProvider = ({ children }) => {
  const [profileImage, setProfileImage] = useState('/profile.jpg');

  return (
    <ProfileImageContext.Provider value={{ profileImage, setProfileImage }}>
      {children}
    </ProfileImageContext.Provider>
  );
};

export const useProfileImage = () => {
  return useContext(ProfileImageContext);
};
