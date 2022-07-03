import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";

function Backdrop(props) {
  return <div onClick={props.onClick} className={classes.backdrop} />;
}
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default Modal;
