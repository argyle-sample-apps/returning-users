export const LeftArrowIcon = () => {
  return (
    <svg width={17} height={14} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 7H2m0 0 6-6M2 7l6 6" stroke="#000" strokeWidth={1.5} />
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg
      width={25}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
    >
      <mask
        id="a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={25}
        height={25}
      >
        <path fill="#D9D9D9" d="M.5.5h24v24H.5z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="M6.9 19.15 5.85 18.1l5.6-5.6-5.6-5.6L6.9 5.85l5.6 5.6 5.6-5.6 1.05 1.05-5.6 5.6 5.6 5.6-1.05 1.05-5.6-5.6-5.6 5.6Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
};

export const UnlockIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g transform="scale(1.71429)">
        <rect
          x={2}
          y={5.5}
          width={10}
          height={8}
          rx={1}
          style={{
            fill: "none",
            stroke: "#000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
        <path
          d="M9.47 1.53A3.44 3.44 0 0 0 7 .5 3.5 3.5 0 0 0 3.5 4v1.5"
          style={{
            fill: "none",
            stroke: "#000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
        <circle
          cx={7}
          cy={9.5}
          r={0.5}
          style={{
            fill: "none",
            stroke: "#000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </g>
    </svg>
  );
};

export const LockIcon = () => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M6.3 21.5c-.5 0-.925-.175-1.275-.525A1.736 1.736 0 0 1 4.5 19.7v-9.4c0-.5.175-.925.525-1.275.35-.35.775-.525 1.275-.525h1.2v-2c0-1.25.437-2.313 1.312-3.188S10.75 2 12 2c1.25 0 2.313.437 3.188 1.312S16.5 5.25 16.5 6.5v2h1.2c.5 0 .925.175 1.275.525.35.35.525.775.525 1.275v9.4c0 .5-.175.925-.525 1.275-.35.35-.775.525-1.275.525H6.3Zm0-1.5h11.4a.292.292 0 0 0 .213-.087A.292.292 0 0 0 18 19.7v-9.4a.292.292 0 0 0-.087-.213A.292.292 0 0 0 17.7 10H6.3a.289.289 0 0 0-.212.087A.29.29 0 0 0 6 10.3v9.4c0 .083.03.154.088.213A.289.289 0 0 0 6.3 20Zm5.7-3.25c.483 0 .896-.17 1.238-.512.341-.342.512-.755.512-1.238s-.17-.896-.512-1.238A1.689 1.689 0 0 0 12 13.25c-.483 0-.896.17-1.238.512A1.689 1.689 0 0 0 10.25 15c0 .483.17.896.512 1.238.342.341.755.512 1.238.512ZM9 8.5h6v-2c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0 0 12 3.5c-.833 0-1.542.292-2.125.875A2.893 2.893 0 0 0 9 6.5v2Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);

export const PrivateIcon = () => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M17 17c.417 0 .77-.146 1.062-.438.292-.291.438-.645.438-1.062 0-.417-.146-.77-.438-1.062A1.444 1.444 0 0 0 17 14c-.417 0-.77.146-1.062.438A1.444 1.444 0 0 0 15.5 15.5c0 .417.146.77.438 1.062.291.292.645.438 1.062.438Zm0 3c.517 0 .992-.121 1.425-.363a2.988 2.988 0 0 0 1.05-.962 4.892 4.892 0 0 0-1.175-.5A4.798 4.798 0 0 0 17 18c-.45 0-.883.058-1.3.175a4.892 4.892 0 0 0-1.175.5c.267.4.617.72 1.05.962.433.242.908.363 1.425.363Zm-5 1.475c-2.167-.583-3.958-1.854-5.375-3.812C5.208 15.704 4.5 13.517 4.5 11.1V5.35l7.5-2.8 7.5 2.8V11a13.148 13.148 0 0 0-.737-.238 9.387 9.387 0 0 0-.763-.187V6.4l-6-2.25L6 6.4v4.7c0 .883.125 1.746.375 2.588.25.841.596 1.633 1.038 2.374a9.377 9.377 0 0 0 1.575 1.988 7.82 7.82 0 0 0 1.987 1.4l.025-.025c.133.367.304.717.513 1.05.208.333.445.642.712.925a.511.511 0 0 1-.1.038c-.033.008-.075.02-.125.037Zm5 .025c-1.25 0-2.313-.437-3.188-1.312S12.5 18.25 12.5 17c0-1.25.437-2.313 1.312-3.188S15.75 12.5 17 12.5c1.25 0 2.313.437 3.188 1.312S21.5 15.75 21.5 17c0 1.25-.437 2.313-1.312 3.188S18.25 21.5 17 21.5Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);

export const ChevronRight = () => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M9.4 17.65 8.35 16.6l4.6-4.6-4.6-4.6L9.4 6.35 15.05 12 9.4 17.65Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);

type IconProps = {
  large?: boolean;
};

export const RestartIcon = ({ large }: IconProps) => (
  <svg
    width={large ? 64 : 24}
    height={large ? 62 : 25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={25}
    >
      <path fill="#D9D9D9" d="M0 .5h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M11 20.925c-1.883-.233-3.437-1.054-4.662-2.463C5.113 17.054 4.5 15.4 4.5 13.5c0-1.017.2-1.992.6-2.925.4-.933.967-1.75 1.7-2.45L7.85 9.2a5.289 5.289 0 0 0-1.387 1.937A6.09 6.09 0 0 0 6 13.5c0 1.467.467 2.758 1.4 3.875.933 1.117 2.133 1.8 3.6 2.05v1.5Zm2 .025v-1.5c1.45-.3 2.646-1 3.587-2.1.942-1.1 1.413-2.383 1.413-3.85 0-1.667-.583-3.083-1.75-4.25C15.083 8.083 13.667 7.5 12 7.5h-.35L13 8.85 11.95 9.9 8.8 6.75l3.15-3.15L13 4.65 11.65 6H12c2.1 0 3.875.725 5.325 2.175C18.775 9.625 19.5 11.4 19.5 13.5c0 1.883-.617 3.525-1.85 4.925S14.867 20.667 13 20.95Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);

export const ConfirmIcon = ({ large }: IconProps) => (
  <svg
    width={large ? 64 : 24}
    height={large ? 62 : 25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 25"
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={25}
    >
      <path fill="#D9D9D9" d="M0 .5h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M5.4 21.5c-.5 0-.925-.175-1.275-.525A1.736 1.736 0 0 1 3.6 19.7V5.8c0-.5.175-.925.525-1.275C4.475 4.175 4.9 4 5.4 4h6.725v1.5H5.4c-.067 0-.133.033-.2.1s-.1.133-.1.2v13.9c0 .067.033.133.1.2s.133.1.2.1h6.725v1.5H5.4Zm10.725-4.475-1.025-1.1 2.425-2.425h-8.4V12h8.4L15.1 9.575l1.025-1.1L20.4 12.75l-4.275 4.275Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);

export const ManageIcon = ({ large }: IconProps) => (
  <svg
    width={large ? 64 : 24}
    height={large ? 62 : 25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 25"
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={25}
    >
      <path fill="#D9D9D9" d="M0 .5h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="m5.7 18.95-3.2-3.2 1.05-1.025 2.125 2.125 4.25-4.25 1.05 1.05-5.275 5.3Zm0-7.625L2.5 8.15 3.55 7.1l2.125 2.125 4.25-4.25 1.05 1.075L5.7 11.325ZM13 17.05v-1.5h8.5v1.5H13Zm0-7.6v-1.5h8.5v1.5H13Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);

export const KeyIcon = ({ large }: IconProps) => (
  <svg
    width={large ? 64 : 24}
    height={large ? 62 : 25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 25"
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={25}
    >
      <path fill="#D9D9D9" d="M0 .5h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M7 14.125c-.45 0-.833-.158-1.15-.475a1.566 1.566 0 0 1-.475-1.15c0-.45.158-.833.475-1.15.317-.317.7-.475 1.15-.475.45 0 .833.158 1.15.475.317.317.475.7.475 1.15 0 .45-.158.833-.475 1.15-.317.317-.7.475-1.15.475ZM7 18c-1.533 0-2.833-.533-3.9-1.6-1.067-1.067-1.6-2.367-1.6-3.9s.533-2.833 1.6-3.9C4.167 7.533 5.467 7 7 7c1.067 0 2.033.275 2.9.825a5.577 5.577 0 0 1 2 2.175h9l2.5 2.5-3.85 3.825-1.85-1.4-1.9 1.425L13.825 15H11.9a5.723 5.723 0 0 1-2 2.163A5.244 5.244 0 0 1 7 18Zm0-1.5c.967 0 1.8-.292 2.5-.875s1.158-1.292 1.375-2.125H14.3l1.45 1 1.95-1.425 1.7 1.3 1.875-1.875-1-1h-9.4c-.217-.833-.675-1.542-1.375-2.125S7.967 8.5 7 8.5c-1.1 0-2.042.392-2.825 1.175C3.392 10.458 3 11.4 3 12.5s.392 2.042 1.175 2.825C4.958 16.108 5.9 16.5 7 16.5Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);

export const AddIcon = () => (
  <svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 25"
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={25}
      height={25}
    >
      <path fill="#D9D9D9" d="M.5.5h24v24H.5z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M11.75 19.25v-6h-6v-1.5h6v-6h1.5v6h6v1.5h-6v6h-1.5Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);
