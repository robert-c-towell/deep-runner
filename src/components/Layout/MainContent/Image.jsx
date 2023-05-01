import Splash from './Splash'

import classes from './Image.module.css'

const Image = (props) => {
  return <>
    <Splash>{props.src}</Splash>
    <div className={classes.Image}>
      {props.src}
    </div>
  </>
}

export default Image;