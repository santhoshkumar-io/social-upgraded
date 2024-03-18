import * as React from "react"

const SvgComponent = (props:any) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.24 12.24a6.003 6.003 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76ZM16 8 2 22M17.5 15H9"
      stroke="#4BDE97"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent

