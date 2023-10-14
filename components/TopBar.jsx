import { useState } from "react";
import { FaBell, FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import { useProfileImage } from "../context/ProfileImageContext";
import { useUser } from "../context/UserContext";

const TopBar = ({ toggleSideSection }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const router = useRouter();
  const { profileImage } = useProfileImage(); // Get the updated profile image from context
  const { username } = useUser();

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  }; 

  // Map NavItems to their corresponding names
  const navItemNames = {
    "/cards-accounts": "Cards/Accounts",
    "/collaborations": "Collaborations",
    "/savings": "Savings",
    "/calendar": "Calendar",
    "/settings": "Settings",
  };

  const currentNavItem = navItemNames[router.pathname] || "Dashboard";

  // Function to handle profile image upload
  const handleImageUpload = (e) => {
    // Handle image upload logic here
  };

  // Simulated profile image URL
  const profileImageUrl = "/profile.jpg"; // Replace with the actual profile image URL

  return (
    <div className="flex bg-[#2b2b2b] text-white h-full px-9 py-7 justify-between items-center border-b border-gray-500">
      <div className="flex items-center">
        <button className="mr-4" onClick={toggleSideSection}>
          <FaBars className="h-6 w-6 text-white" />
        </button>
        <span className="font-semibold text-2xl">{currentNavItem}</span>
      </div>
      <div className="flex items-center">
        {/* Link to the /bot page with the chatbot icon */}
        <Link href="/bot">
          <a className="mr-4">
            <img src="bot.png" className="bg-[#2683de] w-10 rounded-full" />
          </a>
        </Link>
        <button className="mr-4" onClick={toggleNotifications}>
          <FaBell size={20} />
        </button>
        {showNotifications && (
          <div className="absolute top-14 right-0 w-64 bg-white shadow-md rounded-md p-4">
            <div className="font-semibold mb-2 text-black">Notifications</div>
            {/* Render notifications here */}
            <div className="text-black">You have new notifications</div>
          </div>
        )}
        {/* Input element for changing profile image */}
        <label className="cursor-pointer">
          <img
            src={profileImage}
            alt="Profile Pic"
            className="w-10 h-10 rounded-full mr-2 cursor-pointer"
          />
        </label>
         {/* Replace the hardcoded "John Doe" with the username from the context */}
         <span className="font-semibold">
          {username}
        </span>
      </div>
    </div>
  );
};

export default TopBar;
