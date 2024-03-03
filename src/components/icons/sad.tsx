import React from "react";

function Sad() {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        data-testid="icon-bad-face"
      >
        <g>
          <path
            d="M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24Z"
            fill="#FFC1A9"
          ></path>
          <path
            d="M9 19a3.4 3.4 0 0 1 2-2 3.5 3.5 0 0 1 4 2M10 9l-2 4 3 1.6M14 9c.3 1.6 2.1 2 3 2 .9 0 2 0 3-2M3.7 9A3.6 3.6 0 0 0 7 11c1 0 2.3-1 3-2"
            fill="transparent"
            stroke="#823C21"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    </div>
  );
}

export default Sad;
