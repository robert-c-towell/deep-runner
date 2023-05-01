import Modal from '../../UI/Modal';
import Button from '../../UI/Buttons/Button'

import classes from './SaveModal.module.css'

const SaveModal = (props) => {


  return <Modal onClose={props.onClose}>
    <Button onClick={props.onClose} className={classes.row}>Import</Button>
    <Button onClick={props.onClose} className={classes.row}>Export</Button>
    
    <Button onClick={props.onClose} className={classes.row}>Close</Button>
  </Modal>
}

export default SaveModal;