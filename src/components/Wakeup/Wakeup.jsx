import classes from './Wakeup.module.css'

import TextReveal from "../UI/TextReveal";
import Input from "../UI/Input";

const Wakeup = () => {
  return (
    <div className={classes.Wakeup}>
      <TextReveal>
        Good morning Captain. You have been in cryo for
        <code>254</code> years. Do you remember your name?
      </TextReveal>
      {/* <Input /> */}
    </div>
  )
}

export default Wakeup;