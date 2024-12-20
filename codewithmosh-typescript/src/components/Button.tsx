import { useState } from "react";
import './Button.module.css';

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
          <button className="alert" onClick={handleClickClose}>x</button>
        </div>
      }
      <button onClick={(event) => handleClick(event)} className="btn">{buttonText}</button>
    </>
  )
}

export default Button