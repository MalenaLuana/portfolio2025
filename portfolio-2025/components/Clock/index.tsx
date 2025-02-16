import { useState, useEffect } from "react";
import { TimerBox } from "./styles";

export const Clock = () => {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const updateTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    const formattedTime = `${hours % 12 || 12}:${
      minutes < 10 ? `0${minutes}` : minutes
    } ${hours >= 12 ? "PM" : "AM"}`;

    const formattedDate = `${
      currentTime.getDate() < 10
        ? `0${currentTime.getDate()}`
        : currentTime.getDate()
    }/${
      currentTime.getMonth() + 1 < 10
        ? `0${currentTime.getMonth() + 1}`
        : currentTime.getMonth() + 1
    }/${currentTime.getFullYear()}`;

    setTime(formattedTime);
    setDate(formattedDate);
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TimerBox>
      <div>{time}</div>
      <div>{date}</div>
    </TimerBox>
  );
};
