import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/actionsCreators/modalActionsCreators";
import styles from "./Modal.module.scss";
function Modal(props) {
  const { tittle } = props;
  const dispatch = useDispatch();

  return (
    <>
    <div className={styles.overlay} onClick={() => {dispatch(closeModal())}} ></div>
          <div className={styles.wrapperModal}>
          <div className={styles.wrapperModalHeader}>
            <div className={styles.closeModal} onClick={() => {dispatch(closeModal())}}  />
          </div>
          <div className={styles.mainModal}>
            <p className={styles.wrapperMainTitle}>{tittle}</p>
          </div>
        </div>
    </>
  );
}

export default Modal;
