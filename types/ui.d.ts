// ui props
declare namespace UIProps {
  // common
  export type IconFuc = (props: {
    size: number;
    className?: string;
  }) => JSX.Element;

  // text
  export interface TextProps
    extends React.HTMLAttributes<HTMLParagraphElement> {}

  export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    left?: IconFuc;
    right?: IconFuc;
    error?: boolean;
    helperText?: string;
  }

  // check box
  export interface CheckboxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
  }

  // button
  export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    left?: IconFuc;
    right?: IconFuc;
    loading?: boolean;
  }

  // sidebar
  export type NavList = Array<{
    title: string;
    left?: IconFuc;
    right?: IconFuc;
    href: string;
    child?: NavList;
  }>;
}
