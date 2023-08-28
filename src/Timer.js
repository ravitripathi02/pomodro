import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(1500);
  const [rest, setRest] = useState(300);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
    if (seconds === 0) setRest(300);
    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds]);
  const Format = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };
  const Start = () => {
    setIsActive(!isActive);
  };
  const Reset = () => {
    setSeconds(1500);
    if (isActive) setIsActive(!isActive);
  };
  useEffect(() => {
    if (rest > 0) {
      const restInterval = setInterval(() => {
        setRest(rest - 1);
      }, 1000);

      return () => clearInterval(restInterval);
    } else {
      setSeconds(1500);
    }
  }, [rest]);
  return (
    <>
      {seconds > 0 ? (
        <div>
          <div className="time">{Format(seconds)}</div>
          <div className="buttons">
            <button onClick={Start}>{!isActive ? "Start" : "Pause"}</button>
            <button onClick={Reset}>Reset</button>
          </div>
        </div>
      ) : (
        <div>
          <div>It's time to take rest!!</div>
          <div>{Format(rest)}</div>
        </div>
      )}
    </>
  );
};

export default Timer;
