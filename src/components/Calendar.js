import React, { useState } from "react";
import { useEffect } from "react";
import "./Calendar.css";

function Calendar({ setSelectedDate }) {
  const [nowDay, setNowDay] = useState(new Date());

  useEffect(() => {
    setSelectedDate(
      nowDay.getFullYear() +
        "." +
        ("00" + (nowDay.getMonth() + 1).toString()).slice(-2) +
        "." +
        ("00" + nowDay.getDate().toString()).slice(-2)
    );
  }, [nowDay]);

  const handleClickLeft = () => {
    let newDay = new Date(nowDay);
    newDay.setDate(nowDay.getDate() - 1);
    setNowDay(newDay);
  };

  const handleClickRight = () => {
    let newDay = new Date(nowDay);
    newDay.setDate(nowDay.getDate() + 1);
    setNowDay(newDay);
  };

  return (
    <div className="calendar_container">
      <button className="left_button" onClick={handleClickLeft}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          class="bi bi-arrow-left-short"
          viewBox="0 0 16 16"
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <path
            fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
          />
        </svg>
      </button>
      <span className="date">
        {nowDay.getFullYear() +
          ". " +
          ("00" + (nowDay.getMonth() + 1).toString()).slice(-2) +
          ". " +
          ("00" + nowDay.getDate().toString()).slice(-2)}
      </span>
      <button className="right_button" onClick={handleClickRight}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          class="bi bi-arrow-right-short"
          viewBox="0 0 16 16"
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <path
            fill-rule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
          />
        </svg>
      </button>
    </div>
  );
}

export default Calendar;
