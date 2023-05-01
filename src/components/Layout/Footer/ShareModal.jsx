import Modal from '../../UI/Modal';
import Button from '../../UI/Buttons/Button'

import classes from './SaveModal.module.css'

const ShareModal = (props) => {


  return <Modal onClose={props.onClose}>
    <Button onClick={props.onClose} className={classes.row}>facebook</Button>
    <Button onClick={props.onClose} className={classes.row}>twitter</Button>
    <Button onClick={props.onClose} className={classes.row}>reddit</Button>
    <Button onClick={props.onClose} className={classes.row}>Close</Button>
  </Modal>
}

export default ShareModal;