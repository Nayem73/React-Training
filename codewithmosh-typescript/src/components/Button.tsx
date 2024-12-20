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

  return (
    <>
      {alert && <div className="alert alert-primary">Button was clicked!</div>}
      <button onClick={(event) => handleClick(event)} className="btn btn-primary">{buttonText}</button>
    </>
  )
}

export default Button