import classes from './SubtleButton.module.css';

const SubtleButton = (props) => {
  return (
    <button type={props.type} className={`${classes.button} ${props.className}`} onClick={props.onClick}>{props.children}</button>
  )
}

export default SubtleButton;