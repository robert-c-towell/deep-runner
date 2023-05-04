import TextReveal from '../../UI/TextReveal'

import classes from './Dialogue.module.css'

// import file from '../../../events/json/chapter-1/wakeup.json'
import file from '../../../events/test.json'

const Dialogue = () => {
  let text = file[0].dialogue.d;

  return <>
    <div className={classes.Dialogue}>
      <TextReveal>
        {text}
      </TextReveal>
    </div>
  </>
}

export default Dialogue;