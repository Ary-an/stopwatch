import { FC, useEffect, useState } from "react";
import calculateTimer from "../../helper/calculateTimer";
import Controls from "../controls/Controls";
import "./Main.css";

const Main: FC = () => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    const timeArray: Array<number | string> = calculateTimer(timeInSeconds);
    setTimerArray(timeArray);
  }, [timeInSeconds]);

  return (
    <main>
      <section className="time_container">
        <p className="timer_text">{timerArray[0]}</p>
        <span>:</span>
        <p className="timer_text">{timerArray[1]}</p>
        <span>:</span>
        <p className="timer_text">{timerArray[2]}</p>
      </section>
      <Controls setTimeInSeconds={setTimeInSeconds} />
    </main>
  );
};

export default Main;
