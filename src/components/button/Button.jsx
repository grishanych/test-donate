import styles from "./Button.module.scss"
import { Link } from 'react-router-dom';

function Button({ text, color="rgba(70, 163, 88, 1)", jc="", ala="", padding="", width="150px", to="", onClick=null, children}) {

  const buttonStyle = {
    backgroundColor: color,
    width: width,
    alignItems: ala,
    justifyContent: jc,
    padding: padding,
  };


  return  (
    <button style={buttonStyle} className={styles.buttonStyle} onClick={onClick}>
      {children}
      <Link to="/categories" >{text}</Link>
    </button>
  )
};

export default Button;