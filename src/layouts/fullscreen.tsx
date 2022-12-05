import { useResizeDetector } from "react-resize-detector";
import { useRouter } from "next/router";
import clsx from "clsx";
import { LeftArrowIcon } from "components/icons";

type FullscreenProps = {
  children: React.ReactNode;
  className?: string;
  back?: boolean;
};

function Fullscreen({ children, className, back }: FullscreenProps) {
  const { height, ref } = useResizeDetector();
  const router = useRouter();

  const BACK_BUTTON_HEIGHT = 52;

  const nonScrollableHeight = () => {
    switch (true) {
      case back:
        return BACK_BUTTON_HEIGHT;
      default:
        return 0;
    }
  };

  return (
    <div
      id="__container"
      className={clsx("h-full", className ? className : "bg-misty-20")}
      ref={ref}
    >
      {back && (
        <div className="px-4 pt-5">
          <button className="block h-8 w-8 p-1" onClick={() => router.back()}>
            <LeftArrowIcon />
          </button>
        </div>
      )}
      <main
        className="scrollbar overflow-auto"
        style={height ? { height: height - nonScrollableHeight() } : {}}
      >
        {children}
      </main>
    </div>
  );
}

export default Fullscreen;
