import styles from './modalSetTimeOut.module.scss'
const ModalSetTimeOut = ({message}) => {
    return (
      <>
          <div className={styles.wrapper}>
            <p className={styles.textModal}>{message}</p>
          </div>
      </>
    );
  };
  
  export default ModalSetTimeOut;