import clsx from "clsx";

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  large?: boolean;
  small?: boolean;
};

export const Title = ({ children, className }: TypographyProps) => {
  return (
    <h1 className={clsx("text-title tracking-[-.01em] text-black", className)}>
      {children}
    </h1>
  );
};

export const Heading = ({ children, className }: TypographyProps) => {
  return (
    <h2
      className={clsx(
        "text-heading font-normal tracking-[-.01em] text-black",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const Subheading = ({ children, className }: TypographyProps) => {
  return (
    <h3
      className={clsx(
        "text-subheading font-normal",
        className ? className : "text-gray-T50"
      )}
    >
      {children}
    </h3>
  );
};

export const Paragraph = ({
  children,
  className,
  large,
  small,
}: TypographyProps) => {
  return (
    <p
      className={clsx("text-gray40", className, {
        "text-largeParagraph": large,
        "text-smallParagraph": small,
        "text-base": !large && !small,
      })}
    >
      {children}
    </p>
  );
};
