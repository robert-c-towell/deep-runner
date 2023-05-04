import { useEffect } from 'react';
import _ from 'lodash';
import timeout from '../../lib/timeout'
import getRandomInt from '../../lib/get-random-int'

import classes from './TextReveal.module.css'

const TextReveal = (props) => {
  let divId = _.uniqueId('text-reveal-');

  let punctRegex = new RegExp(/[?.!;]/);

  useEffect(() => {
    const a = async () => {
      let div = document.getElementById(divId);
      for (let sentence of props.children.split(/(?<=[?.!;])/)) {
        let id = _.uniqueId('tr-');
        div.innerHTML += `<p id=${id}>`;
        let p = document.getElementById(id);
        for (let word of sentence.split(/(?<=\s)/)) {
          for (let letter of word) {
            p.innerHTML += letter;
            await timeout(getRandomInt(20, 40));
          }
        }
        await timeout(getRandomInt(300, 450));
        if (punctRegex.test(div.innerHTML[div.innerHTML.length -1])) {
          div.innerHTML += '</br>';
        }
      }
    }; 
    a();
  });

  return <div className={classes.TextReveal} id={divId}></div>
}

export default TextReveal;