import { useEffect, useState } from "react";

export default function TypingText({ text, speed = 200 }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    let isDeleting = false;

    const interval = setInterval(() => {
      if (!isDeleting) {
        index++;
        setDisplayText(text.slice(0, index));

        if (index === text.length) {
          isDeleting = true;
        }
      } else {
        index--;
        setDisplayText(text.slice(0, index));

        if (index === 0) {
          isDeleting = false;
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);
  return <span className="inline">{displayText}</span>;
}
