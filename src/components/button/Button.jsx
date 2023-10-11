import styles from "./Button.module.scss"
import { Link } from "react-router-dom";

export default function Button({ text="", type=null, color="rgba(70, 163, 88, 1)", padding="", width="150px", toPage="", onClick=null, children}) {

  const buttonStyle = {
    backgroundColor: color,
    width: width,
    padding: padding,
  };


  return  (
    <Link to={toPage} type={type} style={buttonStyle} className={styles.buttonStyle} onClick={onClick}>
        {
         text !== ""  ? text : children
        }
    </Link>

  )
};

export function FormButton({ text="", type=null, color="rgba(70, 163, 88, 1)", padding="", width="150px", onClick=null, children}) {

  const buttonStyle = {
    backgroundColor: color,
    width: width,
    padding: padding,
  };


  return  (
    <button type={type} style={buttonStyle} className={styles.buttonStyle} onClick={onClick}>
        {
         text !== ""  ? text : children
        }
    </button>

  )
};

// export default Button;