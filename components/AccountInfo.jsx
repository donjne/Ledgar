import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useProfileImage } from "../context/ProfileImageContext";
import { useUser } from "../context/UserContext";
import { FaFileDownload } from "react-icons/fa";
import { FaClone } from "react-icons/fa";
import Link from "next/link";
import { Switch } from "@material-ui/core";

const ProfileSettings = () => {
  const { data: session } = useSession();
  const { profileImage, setProfileImage } = useProfileImage();
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [newProfilePicture, setNewProfilePicture] = useState(profileImage);
  const { username, setUsername } = useUser();
  const [newUsername, setNewUsername] = useState(username);

  useEffect(() => {
    // Update the newProfilePicture state when the context changes
    setNewProfilePicture(profileImage);
  }, [profileImage]);

  const handleUsernameEdit = () => {
    setIsEditingUsername(true);
  };

  const handleUsernameSave = () => {
    // Here, you can implement logic to save the new username to the server.
    // For now, we'll just update the state.
    setUsername(newUsername)
    setIsEditingUsername(false);
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle the selected profile picture file (e.g., you can display a preview).
      // Update the context and component's state with the new profile picture
      setProfileImage(URL.createObjectURL(file));
      setNewProfilePicture(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <h2 className="text-2xl text-center font-grotesk font-bold pt-6">Account Information</h2>
      <div className="flex justify-center py-5 items-center">
      <div className="flex items-center my-2">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          {/* Display user's profile picture */}
          {newProfilePicture ? (
            <img
              src={newProfilePicture}
              alt="New Profile Picture"
              className="w-full h-full"
            />
          ) : (
            <img
              src={session?.user?.image || "/profile.jpg"}
              alt="Profile Picture"
              className="w-full h-full"
            />
          )}
        </div>
        {/* Option to change profile picture */}
        <input
          type="file"
          accept="image/*"
          onChange={handlePictureChange}
          className="ml-4"
        />
      </div>
      <div className="my-2">
        <label className="pr-3">Username</label>
        {isEditingUsername ? (
          <div className="flex">
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="text-center text-black"
            />
            <button
              onClick={handleUsernameSave}
              className="bg-green-500 text-black rounded p-1 ml-2"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <input
              type="text"
              value={newUsername}
              disabled
              className="text-center"
            />
            <button
              onClick={handleUsernameEdit}
              className="bg-[#2683de] text-white rounded p-1 ml-2"
            >
              Edit
            </button>
          </div>
        )}
      </div>
      </div>
      <div>
        <h2 className="text-2xl text-center font-grotesk font-bold pt-6">Personal Information</h2>
        <div className="flex flex-col justify-center items-center text-lg">

            <div className="flex items-center justify-around space-x-6 pt-6">
              {/* Full Name */}
      <div className="my-2">
        <label className="pr-3">Full Name</label>
        {/* Include a similar input and save button as username */}
        <input
              type="text"
              value={session?.user?.name}
              disabled
              className="text-center text-white"
            />
      </div>
      {/* Email Address */}
      <div className="my-2">
        <label className="pr-3">Email Address</label>
        {/* Include a similar input and save button as username */}
        <input
              type="text"
              value={session?.user?.email}
              disabled
              className="text-center text-white"
            />
      </div>
      {/* Password Change */}
      <div className="my-2">
        <button className="bg-[#2683de] text-center p-2 rounded-md text-sm">Update Password</button>
        {/* Include fields for old password, new password, and a save button */}
        </div>
      </div>
      <div className="flex items-center justify-around space-x-16 pt-6">
      <div className="my-2">
        <label className="pr-3">Language Preference</label>
        <select className="month-dropdown text-white rounded bg-[#2b2b2b] border border-[#2683de]">
        <option value="1">English</option>
        <option value="2">French</option>
        <option value="3">Spanish</option>
        <option value="4">German</option>
        </select>
        </div>
        <button className="my-2 flex items-center">
        <FaFileDownload className="mr-2 text-[#2683de]"/>
        Request Account Information
        </button>
        <button className="my-2 flex items-center">
        Invite a friend
        <FaClone className=" text-[#2683de] ml-2"/>
        </button>
      </div>
      </div>
      </div>
      <div className="text-lg pt-8">
      <h2 className="text-2xl text-center font-grotesk font-bold py-6">Notification Settings</h2>
        <div className="flex items-center justify-around">
        <div className="my-2">
          <label htmlFor="Notifications">Receive All Notifications</label>
          <Switch />
        </div>
        <div className="my-2">
          <label htmlFor="Notifications">Allow sound</label>
          <Switch />
        </div>
        <div className="my-2">
          <label htmlFor="Notifications">Group Notifications</label>
          <Switch />
        </div>
        </div>
        <div className="flex items-center justify-around">
  <div className="my-2">
    <label htmlFor="TransactionNotifications">Transaction Notifications</label>
    <Switch id="TransactionNotifications" />
  </div>
  <div className="my-2">
    <label htmlFor="BudgetUpdates">Budget Updates</label>
    <Switch id="BudgetUpdates" />
  </div>
  <div className="my-2">
    <label htmlFor="BillReminders">Bill Reminders</label>
    <Switch id="BillReminders" />
  </div>
</div>
<div className="flex items-center justify-around">
  <div className="my-2">
    <label htmlFor="SavingsMilestones">Savings Milestones</label>
    <Switch id="SavingsMilestones" />
  </div>
  <div className="my-2">
    <label htmlFor="SecurityAlerts">Security Alerts</label>
    <Switch id="SecurityAlerts" />
  </div>
  <div className="my-2">
    <label htmlFor="MonthlyReports">Monthly Reports</label>
    <Switch id="SecurityAlerts" />
  </div>
  </div>

      </div>
      <div className="text-lg">
      <h2 className="text-2xl text-center font-grotesk font-bold py-6">Additional Information</h2>
        <div className="px-24">
        <div className="my-2">
        <button href='/help' className="pr-3 mb-4 mt-3">Help</button>
        </div>
        <div className="my-2">
        <button className="pr-3 mb-4">Delete my account</button>
        </div>
        <div className="my-2">
        <button className="pr-3 mb-6">Deactivate my account</button>
        </div>
            </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
