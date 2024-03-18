import * as React from "react"

const SvgComponent = (props:any) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.333 4 9 10.333 5.667 7l-5 5"
      stroke="#4BDE97"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.333 4h4v4"
      stroke="#4BDE97"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
