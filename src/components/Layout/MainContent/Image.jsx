import ReactDOM from 'react-dom'
import classes from './Image.module.css'

const ImageOverlay = (props) => {
  return <div className={classes['image-wrapper']}>
    <div className={classes.ImageOverlay}>
    {props.src}
    </div>
  </div>
}

const portalSplash = document.getElementById('splash')

const Image = (props) => {
  return <>
    {ReactDOM.createPortal(<ImageOverlay src={props.src} />, portalSplash)}
    <div className={classes.Image}>
      {props.src}
    </div>
  </>
}

export default Image;