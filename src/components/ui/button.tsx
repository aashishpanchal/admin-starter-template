import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

// styles
const buttonCva = cva(
  "inline-flex gap-1 items-center justify-center whitespace-nowrap rounded-md font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 overflow-hidden h-fit",
  {
    variants: {
      size: {
        xs: "py-1 px-1.5 text-xs",
        sm: "py-1.5 px-2 text-[12px]",
        md: "text-sm p-2",
        icon: "h-7 w-7",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
);

export interface ButtonProps
  extends UIProps.ButtonProps,
    VariantProps<typeof buttonCva> {
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { size, className, children, loading, left, right, fullWidth, ...props },
    ref
  ) => {
    const iconsSize = 20;

    return (
      <button
        ref={ref}
        className={twMerge(
          buttonCva({ size, className }),
          fullWidth && "w-full",
          loading && "opacity-60"
        )}
        disabled={loading}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin h-3.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          left && left({ size: iconsSize })
        )}
        {children}
        {right && right({ size: iconsSize })}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
