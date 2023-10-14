import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const TimePicker = ({ value, onChange }) => {
  const handleHoursChange = (event) => {
    let hours = event.target.value.replace(/\D/g, ""); // Accepts only numbers
    if (hours.length > 0) {
      hours = Math.min(Number(hours), 24).toString(); // Limit to maximum 24
    }
    onChange({ ...value, hours });
  };

  const handleMinutesChange = (event) => {
    let minutes = event.target.value.replace(/\D/g, ""); // Accepts only numbers
    if (minutes.length > 0) {
      minutes = Math.min(Number(minutes), 59).toString(); // Limit to maximum 59
    }
    onChange({ ...value, minutes });
  };

  const handleAmPmChange = (event) => {
    const ampm = event.target.value;
    onChange({ ...value, ampm });
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        maxLength={2}
        value={value.hours}
        onChange={handleHoursChange}
        placeholder="HH"
        className="border border-gray-300 rounded-md ml-2 px-2 py-1 bg-white text-black w-12"
        required
      />
      <span className="mx-1">:</span>
      <input
        type="text"
        maxLength={2}
        value={value.minutes}
        onChange={handleMinutesChange}
        placeholder="MM"
        className="border border-gray-300 rounded-md px-2 py-1 bg-white text-black w-12"
        required
      />
      <select
        value={value.ampm}
        onChange={handleAmPmChange}
        className="border border-gray-300 rounded-md ml-2 px-2 py-1 bg-white text-black"
        required
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
};

const AddBudgetOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [category, setCategory] = useState("");
  const [otherCategory, setOtherCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState({ hours: "", minutes: "", ampm: "AM" });
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState({ hours: "", minutes: "", ampm: "AM" });
  const [budgetOptions, setBudgetOptions] = useState([]); // Array to store budget options

  const handleLinkClick = () => {
    setShowOverlay(true);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleOtherCategoryChange = (event) => {
    setOtherCategory(event.target.value);
  };

  const handleAmountChange = (event) => {
    const value = event.target.value.replace(/\D/g, ""); // Accepts only numbers
    setAmount(value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleStartTimeChange = (time) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
  };

  const handleSave = () => {
    const randomId = Math.floor(Math.random() * 1000); // Generate a random ID
    const data = { id: randomId, name, amount };
  
    // Perform save operation using API request
    fetch("/api/budgets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Data saved successfully:", responseData);
        setShowOverlay(false);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        // Handle error state or display error message
      });
  };
  

  const handleCancel = () => {
    setShowOverlay(false);
  };

  const fetchBudgetItems = () => {
    // Assuming you're making an API request to fetch budget items
    return fetch("/api/budgetItems")
      .then((response) => response.json())
      .then((data) => data.budgetItems)
      .catch((error) => {
        console.error("Error fetching budget items:", error);
        // Handle error state or display error message
        return [];
      });
  };

    // Function to fetch budget options from the Budget component
    const fetchBudgetOptions = () => {
      // Assuming you have a function in the Budget component to fetch the budget items
      const budgetItems = fetchBudgetItems(); // Replace fetchBudgetItems() with the actual function to fetch budget items
  
      // Extract the names of budget items
      const options = budgetItems.map((item) => item.name);
  
      setBudgetOptions(options);
    };

  return (
    <>
      <a href="#" className="text-gray-500" onClick={handleLinkClick}>
        <FaPlus className="text-xl mr-5 mt-60" />
      </a>

      {showOverlay && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black rounded-lg p-8 w-[600px] h-[600px] overflow-y-scroll">
            <h3 className="text-xl mb-4">Categories</h3>
            <div className="flex mb-4">
              <select
                value={category}
                onChange={handleCategoryChange}
                className="border border-gray-300 rounded-md mr-2 px-3 py-2"
                required
              >
                <option value="">Select a category</option>
                <option value="Food">Food</option>
                <option value="Electricity">Electricity</option>
                <option value="Transportation">Transportation</option>
                <option value="Internet">Internet</option>
                <option value="School">School</option>
                <option value="Other">Other</option>
              </select>
              {category === "Other" && (
                <input
                  type="text"
                  value={otherCategory}
                  onChange={handleOtherCategoryChange}
                  placeholder="Please specify"
                  className="border border-gray-300 rounded-md px-3 py-2 flex-grow"
                  required
                />
              )}
            </div>

            <h3 className="text-xl mb-4">Please specify an amount</h3>
            <span className="text-gray-500 mr-2 text-2xl">₦</span>
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Amount"
              className="border border-gray-300 rounded-md px-3 py-2 mb-4"
              required
            />

            <h3 className="text-xl mb-4">Timeframe</h3>
            <div className="mb-4">
              <h3>Start Date and Time</h3>
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                minDate={new Date()}
                className="border border-gray-300 rounded-md px-3 py-2 mb-1 bg-white text-black"
                required
              />
              <TimePicker value={startTime} onChange={handleStartTimeChange} />
            </div>
            <div className="mb-4">
              <h3>End Date and Time</h3>
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                minDate={startDate || new Date()}
                className="border border-gray-300 rounded-md px-3 py-2 mb-1 bg-white text-black"
              />
              <TimePicker value={endTime} onChange={handleEndTimeChange} />
            </div>

            <div className="flex justify-end">
              <button
              type="button"
                onClick={handleSave}
                className="bg-[#550693] text-white rounded-md px-4 py-2 mr-2"
              >
                Save
              </button>
              <button
              type="button"
                onClick={handleCancel}
                className="bg-red-700 text-white rounded-md px-4 py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddBudgetOverlay;
