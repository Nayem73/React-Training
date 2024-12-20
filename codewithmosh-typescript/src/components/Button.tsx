import { useState } from "react";
import styles from './Button.module.css';

interface ButtonProps {
  buttonText: string;
}

const Button = ({ buttonText }: ButtonProps) => {
  const [alert, setAlert] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAlert(true);
  }

  const handleClickClose = () => {
    setAlert(false);
  }

  return (
    <>

      {alert &&
        <div>
          Button was clicked!
          <button className={styles.alert} onClick={handleClickClose}>x</button>
        </div>
      }
      <button onClick={(event) => handleClick(event)} className={styles.btn}>{buttonText}</button>
    </>
  )
}

export default Button