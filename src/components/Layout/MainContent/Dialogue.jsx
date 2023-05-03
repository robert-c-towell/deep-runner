import fs from 'fs';
import { parse } from 'yaml';

import TextReveal from '../../UI/TextReveal'

import classes from './Dialogue.module.css'



const Dialogue = () => {
  let text = "Hello world"
  return <>
    <div className={classes.Dialogue}>
      <TextReveal>
        {text}
      </TextReveal>
    </div>
  </>
}

export default Dialogue;