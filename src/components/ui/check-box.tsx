import React from "react";
import { twMerge } from "tailwind-merge";

interface CheckBoxProps extends Omit<UIProps.CheckboxProps, "type"> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ id, label, className, ...props }, ref) => {
    const _id = !id ? React.useId() : id;

    return (
      <div className="flex items-center space-x-2">
        <input
          id={_id}
          type="checkbox"
          className={twMerge("hover:cursor-pointer", className)}
          {...props}
          ref={ref}
        />
        {label && (
          <label
            className="text-xs font-medium capitalize cursor-pointer text-zinc-800"
            htmlFor={_id}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
