import { forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  as?: React.ElementType;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef(
  (
    { onClick, href, children, as = "button", disabled = false }: ButtonProps,
    ref
  ) => {
    const Element = as;
    return (
      <Element
        href={href}
        onClick={disabled ? () => {} : onClick}
        ref={ref}
        className={clsx("mt-5 block w-full py-3 px-6 text-xl", {
          "opacity-30": disabled,
          "bg-black text-white": !disabled,
        })}
        disabled={disabled}
      >
        {children}
      </Element>
    );
  }
);

Button.displayName = "Button";
