import styles from "./Button.module.scss"
import { Link } from 'react-router-dom';

function Button({ text="", color="rgba(70, 163, 88, 1)", jc="center", ala="", padding="", width="150px", toPage="", onClick=null, children}) {

  const buttonStyle = {
    backgroundColor: color,
    width: width,
    alignItems: ala,
    justifyContent: jc,
    padding: padding,
  };


  return  (
    <Link to={toPage} >
      <button style={buttonStyle} className={styles.buttonStyle} onClick={onClick}>
        {
         text !== ""  ? text : children
        }
      </button>
    </Link>

  )
};

export default Button;