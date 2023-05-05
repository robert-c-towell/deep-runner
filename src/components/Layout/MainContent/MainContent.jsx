import { useEffect, useState } from 'react';

import Dialogue from './Dialogue';
import ChoiceMatrix from './ChoiceMatrix';
import Button from '../../UI/Buttons/Button';
import ButtonList from '../../UI/ButtonList';
import { Warning } from '../../UI/Icons/Icons';
import timeout from '../../../lib/timeout';

import classes from './MainContent.module.css';

const MainContent = () => {
  let [sceneFlip, setSceneFlip] = useState(true);
  let [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = async () => {
      await timeout(10000);
      clearTimeout();
      setSceneFlip(p => !p);
    }
    timer();
  }, [sceneFlip]);

  const handleOnFinish = () => {
    setFinished(true);
  }
  
  let content = <></>
  if (sceneFlip) {
    content = <Dialogue onFinish={handleOnFinish} finished={finished} />
  } else {
    content = <p style={{width: '800px', height: '550px', margin: 0}}>Hello</p>
  }

  return <div className={classes.MainContent}>
    <div className={classes.row}>
      <div className={`${classes['location-list']} ${classes.column}`}>
        <ButtonList alignRight={true}>
          <Button onClick={() => {}}>Bed</Button>
          <Button onClick={() => {}}>Storage</Button>
          <Button onClick={() => {}}>James</Button>
        </ButtonList>
      </div>
      <div class={classes.column}>
        {content}
      </div>
      <div className={`${classes['access-list']} ${classes.column}`}>
        <ButtonList alignLeft={true}>
          <Button onClick={() => {}}>Inventory</Button>
          <Button onClick={() => {}}>Beacon Nav</Button>
          <Button onClick={() => {}}>Ship Health</Button>{true ? <Warning /> : <></>}
        </ButtonList>
      </div>
    </div>
    <div className={classes.row}>
      <ChoiceMatrix />
    </div>
  </div>
}

export default MainContent;