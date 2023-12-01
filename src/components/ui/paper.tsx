import React from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Paper = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={twMerge("bg-white rounded-md shadow-md p-3", className)}
    >
      {children}
    </div>
  )
);

Paper.displayName = "Paper";

export default Paper;
