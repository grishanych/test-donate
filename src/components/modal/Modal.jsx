import { useDispatch , useSelector } from "react-redux";
import { closeModal } from "../../redux/actionsCreators/modalActionsCreators";
import styles from "./Modal.module.scss";


function Modal(props) {
  const { tittle } = props;
  const dispatch = useDispatch();
  const handleKeyDown = (event, action) => {
    if (event.key === "Enter") {
      action();
    }
  };

  const close = () => {
  dispatch(closeModal());
  }
  
  return (
    <>
      <div
        className={styles.overlay}
        onClick={close}
        onKeyDown={(e) => handleKeyDown(e, () => close())}
        role="button"
        tabIndex={0}
        aria-label="Закрити модальне вікно за його межами"
      />
      <div className={styles.wrapperModal}>
        <div className={styles.wrapperModalHeader}>
          <button
            type="button"
            className={styles.closeModal}
            onClick={() => { dispatch(closeModal()); }}
            aria-label="Закрити модальне вікно"
          />
        </div>
        <div className={styles.mainModal}>
          <p className={styles.wrapperMainTitle}>{tittle}</p>
        </div>
      </div>
    </>
  );
}

export default Modal;
