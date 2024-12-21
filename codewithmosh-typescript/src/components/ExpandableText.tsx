import { useState } from "react";

interface Props {
  text: string;
  maxChars?: number;
}

function ExpandableText({ text, maxChars }: Props) {
  const [isMore, SetIsMore] = useState(false);

  const handleClick = () => {
    console.log('More button clicked');
    SetIsMore(!isMore);
  }

  return (
    <div>
      <p>
        {
          maxChars && !isMore && text.length > maxChars ?
            (
              <>
                {text.slice(0, maxChars) + '...'}
                <button onClick={handleClick}>More</button>
              </>
            )
            :
            <>
              {text}...
              <button onClick={handleClick}>Less</button>
            </>
        }
      </p>
    </div>
  )
}

export default ExpandableText