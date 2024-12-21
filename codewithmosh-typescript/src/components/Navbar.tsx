interface Props {
  totalItems: number;
}

const Navbar = ({ totalItems }: Props) => {
  return <div>Navbar - cartItems: {totalItems}</div>;
};

export default Navbar;
