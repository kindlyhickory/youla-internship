// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import TimerPanel from './components/Timer';
import ButtonComponent from './components/ButtonComp';

function App() {

  const [time, setTime] = useState({ ms: 0, seconds: 0, minutes: 0, hours: 0 });
  const [status, setStatus] = useState(0);
  const [period, setPeriod] = useState();

  let updatedMs = time.ms;
  let updatedSeconds = time.seconds;
  let updatedMinutes = time.minutes;
  let updatedHours = time.hours;

  const start = () => {
    run();
    setStatus(1);
    setPeriod(setInterval(run, 10));
  }

  const run = () => {
    if (updatedHours === 24) {
      updatedHours = 0;
      updatedMinutes = 0;
      updatedSeconds = 0;
      updatedMs = 0;
      return
    }
    if (updatedMinutes === 60) {
      updatedHours++;
      updatedMinutes = 0;
    }
    if (updatedSeconds === 60) {
      updatedMinutes++;
      updatedSeconds = 0;
    }
    if (updatedMs === 100) {
      updatedSeconds++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, seconds: updatedSeconds, minutes: updatedMinutes, hours: updatedHours });
  }

  const stop = () => {
    clearInterval(period);
    setStatus(2);
  }

  const reset = () => {
    clearInterval(period);
    setStatus(0);
    setTime({ ms: 0, seconds: 0, minutes: 0, hours: 0 })
  }

  const resume = () => start()
  return (
    <div className="page">
      <div className="timer">
        <TimerPanel time={time} />
      </div>
      <div className="buttons">
        <ButtonComponent
          status={status}
          buttonText={"Запуск"}
          start={start}
          stop={stop}
          reset={reset}
          resume={resume}
        >
        </ButtonComponent>
      </div>
    </div>
  );
}

export default App;
