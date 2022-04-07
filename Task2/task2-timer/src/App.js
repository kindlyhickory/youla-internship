// import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import React from 'react';
import { useState } from 'react';
import TimerPanel from './components/Timer';
import ButtonComponent from './components/ButtonComp';

function App() {

  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [status, setStatus] = useState(0);
  const [period, setPeriod] = useState();

  let updatedMs = time.ms;
  let updatedS = time.s;
  let updatedM = time.m;
  let updatedH = time.h;

  const start = () => {
    run();
    setStatus(1);
    setPeriod(setInterval(run, 10));
  }

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  }

  const stop = () => {
    clearInterval(period);
    setStatus(2);
  }

  const reset = () => {
    clearInterval(period);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
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
