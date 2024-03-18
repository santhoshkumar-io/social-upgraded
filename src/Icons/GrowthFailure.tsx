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
      stroke="#F26464"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.833 12 9.5 5.667 6.167 9l-5-5" />
      <path d="M11.833 12h4V8" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.5)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
