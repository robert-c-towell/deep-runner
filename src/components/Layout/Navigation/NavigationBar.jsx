import Button from '../../UI/Buttons/Button';

import classes from './NavigationBar.module.css';

const NavigationBar = () => {
  return <div className={classes.NavigationBar}>
    <div className={classes['nav-width']}>
      <div className={classes['nav-bottom']}>
          <Button onClick={() => {}}>Kestral</Button>
          <div> → </div>
          <Button onClick={() => {}}>Cabin</Button>
      </div>
    </div>
  </div>
}

export default NavigationBar;