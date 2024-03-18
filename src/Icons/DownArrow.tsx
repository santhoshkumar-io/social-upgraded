import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={10}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.22 1.557a.747.747 0 0 1-.218.53l-3.47 3.486a.751.751 0 0 1-1.063 0L.997 2.086A.749.749 0 1 1 2.06 1.028L5 3.981l2.94-2.953a.75.75 0 0 1 1.28.53Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
