import styles from "./Button.module.scss"
import { Link } from 'react-router-dom';

function Button({ text, color, image="", imageSize="", to="", onClick=null, children}) {

  const buttonStyle = {
    backgroundColor: color,
  };


  return  (
    <button style={buttonStyle} className={styles.buttonStyle} onClick={onClick}>
      {children}
      <Link to="/categories" >{text}</Link>
    </button>
  )
};

export default Button;