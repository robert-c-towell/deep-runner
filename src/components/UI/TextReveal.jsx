import { useEffect } from 'react';
import _ from 'lodash';
import timeout from '../../lib/timeout'

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const TextReveal = (props) => {
  let id = _.uniqueId('text-reveal-');

  let punctRegex = new RegExp(/[?.!]/);

  useEffect(() => {
    const a = async () => {
      let p = document.getElementById(id);
      for (let portion of props.children) {
        if (typeof portion === 'string') {
          for (let sentence of portion.split(/(?<=[?.!])/)) {
            for (let word of sentence.split(/(?<=\s)/)) {
              for (let letter of word) {
                p.innerHTML += letter;
                await timeout(getRandomInt(20, 40));
              }
            }
            await timeout(getRandomInt(200,350));
            if (punctRegex.test(p.innerHTML[p.innerHTML.length -1])) {
              p.innerHTML += '</br>';
            }
          }
        } else if (portion.type === 'code') {
          let codeId = _.uniqueId('text-reveal-');
          p.innerHTML += ` <code id=${codeId}>`
          let code = document.getElementById(codeId);
          for (let sentence of portion.props.children.split(/(?<=[?.!])/)) {
            for (let word of sentence.split(/(?<=\s)/)) {
              for (let letter of word) {
                code.innerHTML += letter;
                await timeout(getRandomInt(400, 450));
              }
            }
            await timeout(getRandomInt(200,350));
          }
        }
      }
    }; 
    a();
  }, []);

  return <p id={id}></p>
}

export default TextReveal;