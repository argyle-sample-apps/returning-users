import { m } from "framer-motion";
import { animation } from "utils/animation";

export const FadeAnimation = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name?: string;
}) => (
  <m.div
    key={name || animation.name}
    style={{
      height: "100%",
      width: "100%",
    }}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={animation.variants}
    transition={animation.transition}
  >
    {children}
  </m.div>
);
