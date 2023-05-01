import classes from './ButtonList.module.css';

const ButtonList = (props) => {
  return <div className={classes.ButtonList}>
    {props.children}
  </div>
}

export default ButtonList;