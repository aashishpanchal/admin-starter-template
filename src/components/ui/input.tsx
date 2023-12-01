import React from "react";
import Text from "./text";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

// classes
const inputCva = cva(
  "px-1.5 py-2 rounded-lg flex outline-0 transition-all duration-300 ease-in-out border-2 bg-yellow-50/5 placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-2",
  {
    variants: {
      $size: {
        lg: "text-lg",
        sm: "text-sm",
        xs: "text-xs",
      },
      colors: {
        primary: "focus:!border-primary focus:ring-primary/30",
        secondary: "focus:!border-secondary-500 focus:ring-secondary/30",
        danger: "focus:!border-danger focus:ring-danger/30",
      },
    },
    defaultVariants: {
      $size: "sm",
      colors: "primary",
    },
  }
);

// props
interface InputProps extends UIProps.InputProps, VariantProps<typeof inputCva> {
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      className,
      helperText,
      error,
      left,
      right,
      fullWidth,
      colors,
      $size,
      ...props
    },
    ref
  ) => {
    const common = "absolute top-0 bottom-0 grid p-1 place-items-center";

    const iconsSize =
      $size === "lg" ? 20 : $size === "sm" ? 18 : $size === "xs" ? 15 : 20;

    return (
      <div>
        <div className="relative">
          {left && (
            <span className={`${common} left-1`}>
              {left({ size: iconsSize, className: "text-gray-800" })}
            </span>
          )}
          <input
            type={type}
            className={twMerge(
              inputCva({ className, $size, colors: error ? "danger" : colors }),
              error && "!border-danger ring-danger/30 ring-2 bg-danger/5",
              fullWidth && "w-full",
              left && "pl-7",
              right && "pr-8"
            )}
            ref={ref}
            {...props}
          />
          {right && (
            <span className={`${common} right-2`}>
              {right({ size: iconsSize, className: "text-gray-800" })}
            </span>
          )}
        </div>
        {helperText && (
          <Text
            type="caption"
            className="text-[0.7rem] font-semibold text-destructive text-danger"
          >
            {helperText}
          </Text>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
