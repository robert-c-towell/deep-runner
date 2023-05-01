import Button from '../../UI/Buttons/Button';
import classes from './ChoiceMatrix.module.css';

const ChoiceMatrix = () => {
  return <div className={classes.ChoiceMatrix}>
    <div className={classes.wrapper}>
      <Button className={classes.button} onClick={() => {}}>Is that really such a good idea?</Button>
      <Button className={classes.button} onClick={() => {}}>You're never going to make it out of here alive.</Button>
      <Button className={classes.button} onClick={() => {}}>Alright alright, no need to get pushy.</Button>
      <Button className={classes.button} onClick={() => {}}>Lets bet on it.</Button>
    </div>
  </div>
}

export default ChoiceMatrix;