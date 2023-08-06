import React, { useEffect } from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime);
  const [timeCouting, setTimeCouting] = React.useState(false);
  const [working, setWorking] = React.useState(false);

  useEffect(() => {
    if (working) document.body.classList.add('working');
  }, [working]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCouting ? 1000 : null,
  );

  const configureWork = () => {
    setTimeCouting(true);
    setWorking(true);
  };

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Work" onClick={() => configureWork()} />
        <Button text="teste" onClick={() => console.log('Funcionando')} />
        <Button
          text={timeCouting ? 'Pause' : 'Play'}
          onClick={() => setTimeCouting(!timeCouting)}
        />
      </div>

      <div className="details">
        <p>Testando: adfaspdfadsfgoagf adfhaldgf</p>
        <p>Testando: adfaspdfadsfgoagf adfhaldgf</p>
        <p>Testando: adfaspdfadsfgoagf adfhaldgf</p>
        <p>Testando: adfaspdfadsfgoagf adfhaldgf</p>
      </div>
    </div>
  );
}
