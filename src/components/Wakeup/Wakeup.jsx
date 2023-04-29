import classes from './Wakeup.module.css'

import TextReveal from "../UI/TextReveal";

const Wakeup = () => {
  return (
    <div className={classes.Wakeup}>
    <TextReveal>
      Good morning captain. You have been in cryo for
      <code>254</code> years. Do you remember your name?
    </TextReveal>
    </div>
  )
}

export default Wakeup;