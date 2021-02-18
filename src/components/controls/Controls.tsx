import { FC, useState } from "react";
import "./Controls.css";

type ControlsProps = {
  setTimeInSeconds: Function;
};

const Controls: FC<ControlsProps> = ({ setTimeInSeconds }) => {
  const [intervalId, setIntervalId] = useState<number>(0);

  const handlePlay = () => {
    let interval: any = setInterval(() => {
      setTimeInSeconds((prevNumber: number) => prevNumber + 1);
    }, 1000);

    setIntervalId(interval);
  };
  const handleStop = () => {
    clearInterval(intervalId);
  };
  const handleReset = () => {
    clearInterval(intervalId);
    setTimeInSeconds(0);
  };

  return (
    <section className="controls__container">
      <button onClick={handlePlay}>Play</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </section>
  );
};

export default Controls;
