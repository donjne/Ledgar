import { useState } from "react";
import Head from "next/head";
import DarkMode from "../components/DarkMode";
import Logout from "../components/Logout";
import Calendar from "../components/Calendar";
import Budget from "../components/Budget";
import Expenses from "../components/Expenses";
import NewBudget from "../components/NewBudget";
import NavMenu from "../components/NavItem";
import TopBar from "../components/TopBar";
import MainDashboard from "../components/MainDashboard";
import { ExpensesButton, SavingsButton } from "../components/MiddleDashboard";
import Link from "next/link";
import RecentTransactions from "../components/RecentTransactions";
import Budgets from "../components/BudgetsList";
import Archives from "../components/Archives";
import OtherExpenses from "../components/OtherExpenses";
import CardAccountLayout from "../components/CardAccountLayout";

export default function Home() {
  const [showSideSection, setShowSideSection] = useState(true);

  const toggleSideSection = () => {
    setShowSideSection(!showSideSection);
  };

  return (
    <>
      <Head>
        <title>Ledgar</title>
        <meta name="description" content="The Ultimate Finance Tracking App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-5 h-screen w-screen">
        {/* Side Section */}
        <div
          className={`bg-[#2b2b2b] p-4 border-r border-gray-500 col-span-1 myscrollbar overflow-y-scroll ${
            showSideSection ? "" : "hidden"
          }`}
        >
          <Link href='/'>
          <img src="asset.png" className="my-10 w-1/2 mx-auto cursor-pointer"/>
          </Link>
          <NavMenu />
          <div className="text-1xl text-white p-5 mt-4">
            <DarkMode />
          </div>
          <div className="flex bg-[#268bdd] h-[50px] p-5 rounded-md justify-between items-center">
            <Logout />
          </div>
        </div>

        {/* Main Dashboard Section */}
        <div
  className={`col-span-4 grid grid-cols-10 bg-[#2b2b2b] ${
    showSideSection ? "" : "col-span-6"
  }`}
>
  <div className="w-full col-span-full h-[12vh]">
    <TopBar toggleSideSection={toggleSideSection} />
  </div>
    <div className="grid grid-cols-5">
      <CardAccountLayout />
    </div>
  </div>
      </main>
    </>
  );
}