import { FcLike } from "react-icons/fc";

interface LikeProps {
  onClick: () => void;
}

function Like({ onClick }: LikeProps) {
  return (
    <button onClick={onClick}>
      <FcLike />
    </button>
  )
}

export default Like