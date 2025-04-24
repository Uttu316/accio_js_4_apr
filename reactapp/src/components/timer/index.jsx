import { useState } from "react";
import styles from "./timer.module.css";
import StopWatch from "./stopWatch";

const Timer = () => {
  const [show, setShow] = useState(false);
  const onToggle = () => {
    setShow(!show);
  };
  return (
    <div className={styles.timerContainer}>
      <h1>Timer</h1>
      <button onClick={onToggle}>{show ? "Hide Timer" : "Show Timer"}</button>
      {show && <StopWatch />}
    </div>
  );
};
export default Timer;
