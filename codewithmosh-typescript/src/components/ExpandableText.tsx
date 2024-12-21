import { useState } from "react";

interface Props {
  text: string;
  maxChars?: number;
}

function ExpandableText({ text, maxChars = 20 }: Props) {
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
              {text}

              {maxChars && text.length > maxChars ? <button onClick={handleClick}>...Less</button> : null}
            </>
        }
      </p>
    </div>
  )
}

export default ExpandableText