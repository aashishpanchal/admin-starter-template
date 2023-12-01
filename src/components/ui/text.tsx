import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

// classes
const textCva = cva("p-0.5 text-zinc-800", {
  variants: {
    type: {
      // heading text
      h1: "text-xl font-semibold",
      h2: "text-2xl font-semibold",
      h3: "text-3xl font-semibold",
      h4: "text-4xl font-semibold",
      h5: "text-5xl font-semibold",
      h6: "text-6xl font-semibold",
      // subtitle text
      subtitle1: "text-[1rem] font-bold leading-5",
      subtitle2: "text-sm font-semibold leading-4",
      // body text
      body2: "text-sm leading-5 tracking-wide text-zinc-500",
      body1: "text-[0.95rem] tracking-wide leading-6 text-zinc-500",
      // others text
      button: "uppercase font-semibold text-sm",
      caption: "text-xs font-normal tracking-tight",
      overline: "text-xs font-normal uppercase tracking-tight",
    },
  },
  defaultVariants: { type: "h1" },
});

interface TextProps extends UIProps.TextProps, VariantProps<typeof textCva> {
  center?: boolean;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, type, center, ...props }, ref) => (
    <p
      ref={ref}
      {...props}
      className={twMerge(textCva({ type, className }), center && "text-center")}
    />
  )
);

Text.displayName = "text";

export default Text;
