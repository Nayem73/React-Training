const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
}

const Button = () => {
  return (
    <button onClick={(event) => handleClick(event)} className="btn btn-primary">Submit</button>
  )
}

export default Button