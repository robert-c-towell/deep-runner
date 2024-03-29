import Splash from '../Splash/Splash'

import classes from './Image.module.css'

const Image = (props) => {
  return <>
    <Splash enableFadeIn={true}>{props.src}</Splash>
    <div className={classes.Image}>
      {props.src}
    </div>
  </>
}

export default Image;