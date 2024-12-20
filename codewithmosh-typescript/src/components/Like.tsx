import { AiFillHeart } from "react-icons/ai";
import styles from "./Like.module.css";

interface LikeProps {
  onClick: () => void;
  isRed: boolean;
}

function Like({ onClick, isRed }: LikeProps) {
  return (
    <div onClick={onClick} className={isRed ? styles.red : styles.white}>
      <AiFillHeart size={40} />
    </div>
  )
}

export default Like