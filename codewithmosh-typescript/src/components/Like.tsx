import { SlLike } from "react-icons/sl";
import styles from "./Like.module.css";

interface LikeProps {
  onClick: () => void;
  isRed: boolean;
}

function Like({ onClick, isRed }: LikeProps) {
  return (
    <button onClick={onClick} className={isRed ? styles.red : styles.white}>
      <SlLike />
    </button>
  )
}

export default Like