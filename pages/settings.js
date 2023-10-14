import { useState } from "react";
import Head from "next/head";
import DarkMode from "../components/DarkMode";
import Logout from "../components/Logout";
import NavMenu from "../components/NavItem";
import TopBar from "../components/TopBar";
import Link from "next/link";
import ProfileSettings from "../components/AccountInfo";
import FinancialSettings from "../components/TransactionSettings";

export default function Home() {
  const [showSideSection, setShowSideSection] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");

  const toggleSideSection = () => {
    setShowSideSection(!showSideSection);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <div className="h-full bg-[#2b2b2b] text-white">
              <div>
              <ProfileSettings />
              </div>
        </div>;
      case "financial":
        return <div className="h-full bg-[#2b2b2b] text-white">
        <div>
        <FinancialSettings />
        </div>
  </div>;
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>Ledgar</title>
        <meta name="description" content="Ledgar is a platform that provides users with better financial insights, track cash in-flow and expenses and improve their budgeting and saving habits." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen flex">
        {/* Side Section */}
        <div
          className={`bg-[#2b2b2b] p-4 border-r border-gray-500 col-span-2 myscrollbar overflow-y-scroll ${
            showSideSection ? "" : "hidden"
          }`}
          style={{ width: "30%" }}
        >
          <Link href="/">
            <img
              src="asset.png"
              className="my-10 w-1/2 mx-auto cursor-pointer"
            />
          </Link>
          <NavMenu />
          <div className="text-1xl text-white p-5 mt-4">
            <DarkMode />
          </div>
          <div className="flex bg-[#268bdd] p-5 rounded-md justify-between items-center">
            <Logout />
          </div>
        </div>

        {/* Main Dashboard Section */}
        <div className="w-full flex flex-col myscrollbar overflow-y-scroll">
          {/* Top Bar */}
          <TopBar toggleSideSection={toggleSideSection} />

          {/* Tabs */}
          <div className="flex justify-around items-center bg-[#2b2b2b] text-white">
            <div
              className={`cursor-pointer py-2 px-4 ${
                activeTab === "profile" ? "bg-purple-600 rounded-md my-1" : ""
              }`}
              onClick={() => handleTabClick("profile")}
            >
              Profile
            </div>
            <div
              className={`cursor-pointer p-2 ${
                activeTab === "financial" ? "bg-purple-600 rounded-md my-1" : ""
              }`}
              onClick={() => handleTabClick("financial")}
            >
              Financial Information
            </div>
          </div>

          {/* Tab Content */}
          <div>{renderTabContent()}</div>
        </div>
      </main>
    </>
  );
}
