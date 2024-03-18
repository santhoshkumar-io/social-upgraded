import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.4}
      d="M16.993 15.953h-5.695c-.555 0-1.007.46-1.007 1.024 0 .565.452 1.023 1.007 1.023h5.695c.555 0 1.007-.458 1.007-1.023s-.452-1.024-1.007-1.024Z"
      fill="#fff"
      fillOpacity={0.5}
    />
    <path
      d="m7.309 3.904 5.396 4.36a.31.31 0 0 1 .05.429L6.36 17.028a2.1 2.1 0 0 1-1.63.817l-3.492.043a.398.398 0 0 1-.392-.312l-.793-3.45c-.138-.634 0-1.29.402-1.795l6.429-8.376a.3.3 0 0 1 .426-.051Z"
      fill="#fff"
      fillOpacity={0.5}
    />
    <path
      opacity={0.4}
      d="m15.12 5.665-1.04 1.299a.298.298 0 0 1-.423.048c-1.264-1.023-4.503-3.65-5.401-4.377a.308.308 0 0 1-.043-.432L9.216.957c.91-1.172 2.497-1.28 3.778-.258l1.47 1.172c.604.473 1.006 1.096 1.143 1.752.16.721-.01 1.43-.486 2.042Z"
      fill="#fff"
      fillOpacity={0.5}
    />
  </svg>
)

export default SvgComponent
