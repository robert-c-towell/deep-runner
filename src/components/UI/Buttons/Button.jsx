import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button type={props.type} className={`${classes.button} ${props.className ? props.className : ''}`} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button;