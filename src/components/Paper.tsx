import React from "react";

interface PaperProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

function Paper(props: PaperProps) {
  return (
    <div
      className="Paper max-w-2xl w-full p-4 self-center place-self-center center items-center justify-center"
      {...props}
    />
  );
}

export default Paper;
