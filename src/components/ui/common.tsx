import React from "react";
import { twMerge } from "tailwind-merge";

type Props = React.InputHTMLAttributes<HTMLDivElement>;

export const Flex = React.forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      className={twMerge("flex justify-center items-center", className)}
    />
  )
);

Flex.displayName = "FLex";
