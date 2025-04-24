import { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const setupInterval = () => {
    let intervalid = setInterval(() => {
      console.log("Update");
      // state update happeining every second
      setTime((time) => time + 1);
    }, 1000);
    setIntervalId(intervalid);
  };

  useEffect(() => {
    console.log("Watch Mounted");
    //componetDidMount
    // interval create only for the first time
    setupInterval();
  }, []);

  useEffect(() => {
    return () => {
      console.log("Unmounting Watch");
      clearInterval(intervalId); // stopping the interval before unmount
    };
  }, [intervalId]);

  const onPause = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };
  const onResume = () => {
    setupInterval();
  };

  return (
    <div>
      <h3>{time}</h3>
      {!!intervalId && <button onClick={onPause}>Pause</button>}
      {!intervalId && <button onClick={onResume}>Resume</button>}
    </div>
  );
};
export default StopWatch;
