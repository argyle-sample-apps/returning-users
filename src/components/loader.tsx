import clsx from "clsx";

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("flex h-full items-center justify-center", className)}>
      <div className="animate-spin">
        <img
          src={
            "https://res.cloudinary.com/argyle-media/image/upload/v1661963437/argyle-x/homepage/spinner.png"
          }
          alt="spinner"
          width="80"
          height="80"
          className="-scale-x-100 "
        />
      </div>
    </div>
  );
};
