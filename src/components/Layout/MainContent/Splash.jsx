import ReactDOM from 'react-dom'

import classes from './Splash.module.css'

const portalSplash = document.getElementById('splash')

const Splash = (props) => {
  return <>{ReactDOM.createPortal(
    <div className={classes.Splash}>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>, portalSplash
  )}</>
}

export default Splash;