import { useState } from "react";
import { FaBell, FaBars } from "react-icons/fa";
import { useRouter } from "next/router";

const TopBar = ({ toggleSideSection }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const router = useRouter();

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

  return (
    <div className="flex bg-[#2b2b2b] text-white h-full px-9 justify-between items-center border-b border-gray-500">
      <div className="flex items-center">
        <button className="mr-4" onClick={toggleSideSection}>
          <FaBars className="h-6 w-6 text-white" />
        </button>
        <span className="font-semibold text-2xl">{currentNavItem}</span>
      </div>
      <div className="flex items-center">
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
        <img
          src="profile.jpg"
          alt="Profile Pic"
          className="w-10 h-10 rounded-full mr-2"
        />
        <span className="font-semibold">John Doe</span>
      </div>
    </div>
  );
};

export default TopBar;
