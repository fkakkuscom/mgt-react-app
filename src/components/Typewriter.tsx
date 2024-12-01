import { useEffect, useRef, useState } from "react";
import "./Typewriter.css";
import useOnScreen from "../app/hooks";

interface TypewriterProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  text: {
    label: string;
    color?: string;
    stop?: boolean;
    clcDelay?: number;
  }[];
  interval?: number;
}

function Typewriter({
  text,
  interval = 100,
  className,
  ...rest
}: TypewriterProps) {
  const [output, setOutput] = useState("");
  const [current, setCurrent] = useState(0);

  const ref = useRef<HTMLDivElement>(null);
  const play = useOnScreen(ref);

  useEffect(() => {
    let timeout = 0;
    let ti = text.length - 1;
    let ci = -2;
    let dir = -1;
    let clcInterval = 50;

    function typer() {
      if (!play) {
        return;
      }

      const currText = text[ti].label;
      const clcDelay = text[ti].clcDelay === undefined ? 1000 : 0;

      if (ci === currText.length || ci < -1) {
        if (ci > 0 && text[ti].stop) {
          clearTimeout(timeout);
          return;
        }
        if (dir < 0) {
          ti = (ti + 1) % text.length;
          clcInterval = Math.floor(1000 / text[ti].label.length);
          setCurrent(ti);
        }
        dir = -dir;
        ci += dir;
        timeout = setTimeout(() => typer(), dir > 0 ? interval : clcDelay);
      } else if (ci < currText.length && ci > -2) {
        setOutput(currText.slice(0, ci + 1));
        ci += dir;
        timeout = setTimeout(() => typer(), dir > 0 ? interval : clcInterval);
      }
    }

    timeout = setTimeout(() => typer(), interval);
    return () => {
      clearInterval(timeout);
    };
    return;
  }, [text, interval, play]);

  return (
    <div className={["Typewriter", className].join(" ")} {...rest} ref={ref}>
      <h1 className="label" style={{ color: text[current].color }}>
        {output}
        <span className="cursor">|</span>
      </h1>
    </div>
  );
}

export default Typewriter;
