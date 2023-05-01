import Dialogue from './Dialogue';
import ChoiceMatrix from './ChoiceMatrix';
import Button from '../../UI/Buttons/Button';
import ButtonList from '../../UI/ButtonList';

import classes from './MainContent.module.css';

const MainContent = () => {
  return <div className={classes.MainContent}>
    <div className={classes.row}>
      <div className={`${classes['location-list']} ${classes.column}`}>
        <ButtonList>
          <Button onClick={() => {}}>Bed</Button>
          <Button onClick={() => {}}>Storage</Button>
          <Button onClick={() => {}}>James</Button>
        </ButtonList>
      </div>
      <div class={classes.column}>
        <Dialogue />
      </div>
      <div className={`${classes['access-list']} ${classes.column}`}>
        <ButtonList>
          <Button onClick={() => {}}>Inventory</Button>
          <Button onClick={() => {}}>Galaxy Map</Button>
        </ButtonList>
      </div>
    </div>
    <div className={classes.row}>
      <ChoiceMatrix />
    </div>
  </div>
}

export default MainContent;