import React, { useState } from "react";
import CustomCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (value) => {
    console.log(value);
    setDate(value);
  };

  return (
    <div className="w-[300px] h-[200px] rounded-lg items-center justify-center">
          <div className="p-4 rounded-lg"><CustomCalendar onChange={handleDateChange} value={date} className="rounded-lg"/></div>
    </div>
  );
};

export default Calendar;
//remove flex later when calendar is implemented
