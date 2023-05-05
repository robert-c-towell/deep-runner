import { memo, useEffect, useState } from 'react';

import getRandomInt from '../../../lib/get-random-int';

const RevealText = ({useInterval = true, onFinish, children}) => {
  const [revealedLength, setRevealedLength] = useState(!useInterval ? children.length : 0);
  const interval = setInterval(() => setRevealedLength(p => p + 1), getRandomInt(20, 40));

  useEffect(() => {
    if (revealedLength === children.length) {
      clearInterval(interval);
      onFinish();
    }
  }, [children, interval, revealedLength]);

  useEffect(() => {
    return () => clearInterval(interval);
  }, [interval]);

  return <>
    {children.substring(0, revealedLength)}
  </>
}

export default memo(RevealText);