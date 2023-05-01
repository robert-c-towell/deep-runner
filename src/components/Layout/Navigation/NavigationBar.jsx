import Button from '../../UI/Buttons/Button';

import classes from './NavigationBar.module.css';

const NavigationBar = () => {
  return <div className={classes.NavigationBar}>
    <div className={classes['nav-wrapper']}>
        <Button onClick={() => {}}>Kestral</Button>
        <div> → </div>
        <Button onClick={() => {}}>Cabin</Button>
    </div>
  </div>
}

export default NavigationBar;