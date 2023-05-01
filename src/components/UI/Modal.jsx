import ReactDOM from 'react-dom'

import classes from './Modal.module.css'

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModalOverlay = (props) => {
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
}

const portalOverlays = document.getElementById('overlays')
const portalBackdrop = document.getElementById('backdrop')

const Modal = (props) => {
  return <>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalBackdrop)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalOverlays)}
  </>
}

export default Modal;