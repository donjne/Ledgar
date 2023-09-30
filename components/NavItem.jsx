import React, { useState } from "react";
import Link from "next/link";
import { FaChartLine, FaCreditCard, FaUsers, FaPiggyBank, FaCalendarAlt, FaCog } from "react-icons/fa";

const NavItem = ({ name, icon, onClick, isActive }) => {
  let route = "/";
  if (name === "Accounts/Wallets") {
    route = "/cards-accounts";
  } else if (name === "Collaborations") {
    route = "/collaborations/";
  } else if (name === "Savings") {
    route = "/savings";
  } else if (name === "Calendar") {
    route = "/calendar";
  } else if (name === "Settings") {
    route = "/settings";
  } else if (name === "Dashboard") {
    route = "/dashboard";
  }

  return (
    <li
      className={`w-full h-[50px] rounded-md hover:bg-[#268bdd] cursor-pointer mb-3 flex items-center pl-7 pt-5 pb-6 ${
        isActive ? "bg-[#268bdd] text-black" : "text-white"
      }`}
      onClick={onClick}
    >
      <Link href={route}>
        <a>
          <div className="flex items-center">
            {icon && <span className="mr-2">{icon}</span>}
            <span className="font-medium">{name}</span>
          </div>
        </a>
      </Link>
    </li>
  );
};

const NavMenu = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <ul>
  <NavItem
    name="Dashboard"
    icon={<FaChartLine />}
    onClick={() => handleItemClick("Dashboard")}
    isActive={activeItem === "Dashboard"}
  />
  <NavItem
    name="Accounts/Wallets"
    icon={<FaCreditCard />}
    onClick={() => handleItemClick("Accounts/Wallets")}
    isActive={activeItem === "Accounts/Wallets"}
  />
  <NavItem
    name="Collaborations"
    icon={<FaUsers />}
    onClick={() => handleItemClick("Collaborations")}
    isActive={activeItem === "Collaborations"}
  />
  <NavItem
    name="Savings"
    icon={<FaPiggyBank />}
    onClick={() => handleItemClick("Savings")}
    isActive={activeItem === "Savings"}
  />
  <NavItem
    name="Calendar"
    icon={<FaCalendarAlt />}
    onClick={() => handleItemClick("Calendar")}
    isActive={activeItem === "Calendar"}
/>
  <NavItem
    name="Settings"
    icon={<FaCog />}
    onClick={() => handleItemClick("Settings")}
    isActive={activeItem === "Settings"}
  />
</ul>

  );
};

export default NavMenu;
