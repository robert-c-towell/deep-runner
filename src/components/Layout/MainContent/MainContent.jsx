import Dialogue from './Dialogue';
import ChoiceMatrix from './ChoiceMatrix';
import Button from '../../UI/Buttons/Button';
import ButtonList from '../../UI/ButtonList';
import { Warning } from '../../UI/Icons/Icons';

import classes from './MainContent.module.css';

const MainContent = () => {
  let content = <Dialogue />

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