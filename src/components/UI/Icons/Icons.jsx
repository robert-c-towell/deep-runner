import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

import classes from './Icons.module.css';

const Warning = () => {
  return <FontAwesomeIcon className={classes.Warning} icon={faTriangleExclamation} />
}

export { Warning };