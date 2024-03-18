import * as React from "react"

const SvgComponent = (props:any) => (
  <svg
    width={17}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="#FFB648"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.833 4 9.5 10.333 6.167 7l-5 5" />
      <path d="M11.833 4h4v4" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.5)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
