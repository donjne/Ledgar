import { useState } from "react";
import Head from "next/head";
import DarkMode from "../components/DarkMode";
import Logout from "../components/Logout";
import NavMenu from "../components/NavItem";
import TopBar from "../components/TopBar";
import Link from "next/link";

export default function Home() {
  const [showSideSection, setShowSideSection] = useState(true);

  const toggleSideSection = () => {
    setShowSideSection(!showSideSection);
  };

  return (
    <>
      <Head>
        <title>Ledgar</title>
        <meta name="description" content="Ledgar is a platform that provides users with better financial insights, track cash in-flow and expenses and improve their budgeting and saving habits." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen flex"> {/* Use flex to arrange side section and main content */}
        {/* Side Section */}
        <div
          className={`bg-[#2b2b2b] p-4 border-r border-gray-500 col-span-2 myscrollbar overflow-y-scroll ${
            showSideSection ? "" : "hidden"
          }`}
          style={{ width:'30%'}}
        >
          <Link href='/'>
            <img src="asset.png" className="my-10 w-1/2 mx-auto cursor-pointer"/>
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
        <div className="w-full flex flex-col">
        <div className="h-[10%]"> {/* Use flex to arrange top bar and main content */}
          <TopBar toggleSideSection={toggleSideSection} />
        </div>
        <div className="bg-[#2b2b2b] h-[90%]">
        <div className="text-white text-2xl flex justify-center pt-60">Coming Soon...🚀</div>
        </div>
        </div>
      </main>
    </>
  );
}
