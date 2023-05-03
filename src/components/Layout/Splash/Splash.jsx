import ReactDOM from 'react-dom'
import _ from 'lodash'

import classes from './Splash.module.css'
import { useState } from 'react'

const portalSplash = document.getElementById('splash')

const Splash = (props) => {
  const [shrink, setShrink] = useState(false);
  const { enableFadeIn = false } = props;

  const id = _.uniqueId('splash-');

  const triggerShrink = () => {
    setShrink(true);
  }

  const handleFadeInFinish = () => {
    triggerShrink();
  }

  const handleShrinkFinish = () => {
    console.log('shrank')
  }

  return <>{ReactDOM.createPortal(
    <div id={id} onAnimationEnd={handleFadeInFinish} className={`${classes.Splash} ${enableFadeIn ? classes['fade-in'] : ''}`}>
      <div onAnimationEnd={handleShrinkFinish} className={`${classes.content} ${shrink ? classes['shrink-slide'] : ''}`}>
        {props.children}
      </div>
    </div>, portalSplash
  )}</>
}

export default Splash;