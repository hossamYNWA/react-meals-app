import Modal from "../UI/Modal";
import classes from "./OrderModal.module.css";

function OrderModal(props) {
  return (
    <Modal onClose={props.onClick}>
      <p className={classes.order}>
        Processing your order <br /> thank you for choosing us{" "}
      </p>{" "}
    </Modal>
  );
}

export default OrderModal;
