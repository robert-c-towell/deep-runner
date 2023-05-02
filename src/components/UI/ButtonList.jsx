import classes from './ButtonList.module.css';

const ButtonList = (props) => {
  return <div className={`${classes.ButtonList} ${props.alignRight? classes.left : ''} ${props.alignLeft? classes.right : ''}`}>
    {props.children}
  </div>
}

export default ButtonList;