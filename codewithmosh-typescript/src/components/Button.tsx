import { useState } from "react";

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
        <div className="alert alert-primary">
          Button was clicked!
          <button onClick={handleClickClose}>x</button>
        </div>
      }
      <button onClick={(event) => handleClick(event)} className="btn btn-primary">{buttonText}</button>
    </>
  )
}

export default Button