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
import Archives from "../components/Archives";
import OtherExpenses from "../components/OtherExpenses";
import ParentComponent from "../components/ParentComponent";

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
          className={`bg-[#2b2b2b] px-2 border-r border-gray-500 col-span-1 myscrollbar overflow-y-scroll ${
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
          <div className="flex hover:bg-[#268bdd] text-white h-[50px] p-6 rounded-md justify-between items-center">
            <Logout />
          </div>
        </div>

        {/* Main Dashboard Section */}
        <div
          className={`col-span-4 grid grid-cols-10 ${
            showSideSection ? "" : "col-span-6"
          }`}
        >
          <div className="w-full col-span-full h-[12vh]">
            <TopBar toggleSideSection={toggleSideSection} />
          </div>
          <div
            className={`col-span-7 h-[88vh] overflow-y-scroll myscrollbar bg-[#2b2b2b] text-white font-semibold items-center justify-center border-r border-l border-gray-500 ${
              showSideSection ? "" : "col-start-1"
            }`}
          >
            <MainDashboard />
            <div className="flex">
              <h2 className="pr-6 text-lg text-white mt-5 ml-9">
                <Link href="/link1">Expenses</Link>
              </h2>
              <h2 className="text-lg text-white mt-5">
                <Link href="/savings">Savings</Link>
              </h2>
            </div>
            <ExpensesButton />
            <h2 className="flex p-5 text-2xl">Recent Transactions</h2>
            <RecentTransactions />
            <Archives />
          </div>

          {/* Right End Section */}
          <div className="p-0 bg-[#2b2b2b] h-[88vh] overflow-y-scroll myscrollbar col-span-3 ">
            <Calendar />
            <div>
              <ul className="text-white flex flex-col mb-5">
                <ParentComponent>
                  {(budgets) =>
                    budgets.length === 0 ? (
                      <p className="text-white text-center pb-4 pl-5 text-xl font-bold">
                        No data to display
                      </p>
                    ) : (
                      budgets.map((budget) => (
                        <Budget
                          key={budget.id}
                          name={budget.name}
                          amount={budget.amount}
                        />
                      ))
                    )
                  }
                </ParentComponent><p className="my-12 text-center">No active budgets</p>
              </ul>
              
              <span className="text-white text-center pb-4 pl-5 text-2xl font-bold">
                Other Expenses
              </span>
              <ul className="text-white flex flex-col pt-5 m-2">
                <OtherExpenses />
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
