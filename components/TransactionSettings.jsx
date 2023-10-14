import { useState } from "react";
import { Switch } from "@material-ui/core";
import { FaFileDownload } from "react-icons/fa";
import Link from "next/link";

const FinancialSettings = () => {
  // Budget Controls
  const [blockTransactionsAboveBudget, setBlockTransactionsAboveBudget] = useState(true);
  const [budgetLimits, setBudgetLimits] = useState({});

  // Currency Settings
  const [defaultCurrency, setDefaultCurrency] = useState("NGN");

  // Notification Preferences
  const [notificationSettings, setNotificationSettings] = useState({
    transactionNotifications: true,
    budgetUpdates: true,
    billReminders: true,
    savingsMilestones: true,
    securityAlerts: true,
    monthlyReports: true,
    lowBalanceAlerts: true,
    creditCardAlerts: true,
    investmentAlerts: true,
    newsAndUpdates: true,
    featureAnnouncements: true,
    customAlerts: true,
    userEngagement: true,
  });

  // Download Options
  const [downloadOptions, setDownloadOptions] = useState("downloadPDF");

  // Dark Mode or Theme Selection
  const [darkMode, setDarkMode] = useState(false);

  // Savings Goals
  const [savingsGoals, setSavingsGoals] = useState([]);

  // Security Settings
  const [passwordRequirements, setPasswordRequirements] = useState({
    requireUppercase: true,
    requireLowercase: true,
    requireSpecialCharacters: true,
    requireNumbers: true,
    minLength: 8,
  });
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);

  // Data Privacy
  const [dataSharing, setDataSharing] = useState(true);

  // Linked Accounts
  const [linkedAccounts, setLinkedAccounts] = useState([]);

  // Report and Export Settings
  const [reportOptions, setReportOptions] = useState({
    dateRange: "lastMonth",
    reportFormat: "PDF",
  });

  return (
    <div>
      <h2 className="text-2xl text-center font-grotesk font-bold py-6">
        Financial Settings
      </h2>

      {/* Budget Controls */}
      <div className="flex items-center justify-around my-2">
        <label>Block Transactions Above Budget</label>
        <Switch checked={blockTransactionsAboveBudget} onChange={() => setBlockTransactionsAboveBudget(!blockTransactionsAboveBudget)} />
      </div>

      {/* Currency Settings */}
      <div className="flex items-center justify-around my-2">
        <label>Default Currency</label>
        <select value={defaultCurrency} onChange={(e) => setDefaultCurrency(e.target.value)} className="bg-[#2b2b2b] border">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="NGN">NGN</option>
          <option value="CAD">CAD</option>
          <option value="AED">AED</option>
          <option value="GHS">GHS</option>
          <option value="INR">INR</option>


          {/* Add more currency options */}
        </select>
      </div>

      {/* Notification Preferences */}
      <div className="flex items-center justify-around my-2">
        <label>Transaction Notifications</label>
        <Switch checked={notificationSettings.transactionNotifications} onChange={() => setNotificationSettings({ ...notificationSettings, transactionNotifications: !notificationSettings.transactionNotifications })} />
      </div>
            <div className="flex items-center justify-around my-2">
        <label>Budget Updates</label>
        <Switch checked={notificationSettings.budgetUpdates} onChange={() => setNotificationSettings({ ...notificationSettings, budgetUpdates: !notificationSettings.budgetUpdates })} />
      </div>
            <div className="flex items-center justify-around my-2">
        <label>Bill Reminders</label>
        <Switch checked={notificationSettings.billReminders} onChange={() => setNotificationSettings({ ...notificationSettings, billReminders: !notificationSettings.billReminders })} />
      </div>
            <div className="flex items-center justify-around my-2">
        <label>Saving Milestones</label>
        <Switch checked={notificationSettings.savingsMilestones} onChange={() => setNotificationSettings({ ...notificationSettings, savingsMilestones: !notificationSettings.savingsMilestones })} />
      </div>
            <div className="flex items-center justify-around my-2">
        <label>Monthly Reports</label>
        <Switch checked={notificationSettings.monthlyReports} onChange={() => setNotificationSettings({ ...notificationSettings, monthlyReports: !notificationSettings.monthlyReports })} />
      </div>
            <div className="flex items-center justify-around my-2">
        <label>Feature Announcements</label>
        <Switch checked={notificationSettings.featureAnnouncements} onChange={() => setNotificationSettings({ ...notificationSettings, featureAnnouncements: !notificationSettings.featureAnnouncements })} />
      </div>

      {/* Add similar UI for other notification settings */}
      {/* ...

      {/* Data Privacy */}
      <div className="flex items-center justify-around my-2 pb-4">
        <label>Data Sharing</label>
        <Switch checked={dataSharing} onChange={() => setDataSharing(!dataSharing)} />
      </div>

            {/* ...

      {/* Buttons for Saving and Cancelling Settings */}
      <div className="flex justify-center mt-4">
        <button className="bg-[#2683de] text-white rounded p-2 m-2">Save Settings</button>
        <button className="bg-[#ff4646] text-white rounded p-2 m-2">Cancel</button>
      </div>

      {/* Download Options */}
      <h2 className="text-2xl text-center font-grotesk font-bold pt-6">
        Download Financial Data
      </h2>
      <div className="flex items-center justify-evenly my-2 py-8">
      <select value={downloadOptions} onChange={(e) => setDownloadOptions(e.target.value)} className="bg-[#2b2b2b]">
          <option value="downloadPDF">Download as PDF</option>
          <option value="downloadCSV">Download as CSV</option>
          <option value="downloadXLSX">Download as XLSX</option>
          {/* Add more currency options */}
        </select>
        {/* <p className="font-bold text-xl">&gt;</p> */}
        <button>Download</button>
      </div>

      {/* Add similar UI for CSV and XLSX download options */}
      {/* ...

      {/* Savings Goals */}
      {/* Add UI to manage and configure savings goals */}
      {/* ...

      {/* Security Settings */}
      {/* Add UI to configure password requirements and 2FA */}
      {/* ...


      {/* Linked Accounts */}
      {/* Add UI to manage linked bank accounts */}
      {/* ...

      {/* Report and Export Settings */}

    </div>
  );
};

export default FinancialSettings;
