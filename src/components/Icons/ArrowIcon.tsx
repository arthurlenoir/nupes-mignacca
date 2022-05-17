import React from "react";

interface Props {
  color?: string;
}

export const ArrowIcon: React.FC<Props> = ({ color = "white", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="12"
    viewBox="0 0 13 12"
    fill="none"
    {...props}
  >
    <path
      d="M6.3331 11.6362L12.0604 5.90891L6.3331 0.181641L5.01491 1.49414L8.47514 4.94869H0.367188V6.86914H8.47514L5.01491 10.3294L6.3331 11.6362Z"
      fill={color}
    ></path>
  </svg>
);
