interface ButtonProps {
  buttonText: string;
  buttonNumber: number;
}

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
}

const Button = ({ buttonText, buttonNumber }: ButtonProps) => {
  return (
    <>
      <p>button number is {buttonNumber}</p>
      <button onClick={(event) => handleClick(event)} className="btn btn-primary">{buttonText}</button>
    </>
  )
}

export default Button