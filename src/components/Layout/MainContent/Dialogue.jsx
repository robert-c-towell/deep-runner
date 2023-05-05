// import TextReveal from '../../UI/TextReveal'

import classes from './Dialogue.module.css'

// import file from '../../../events/json/chapter-1/wakeup.json'
import file from '../../../events/test.json';
import Paragraph from '../../UI/Text/Paragraph';

const Dialogue = (props) => {
  let text = file[0].dialogue.d;

  return <>
    <div className={classes.Dialogue}>
      <Paragraph onFinish={props.onFinish} finished={props.finished}>
        {text}
      </Paragraph>
    </div>
  </>
}

export default Dialogue;