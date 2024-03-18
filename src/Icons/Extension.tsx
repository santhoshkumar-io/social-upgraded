import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.4}
      d="M14.075 0h3.387A2.549 2.549 0 0 1 20 2.56v3.415a2.549 2.549 0 0 1-2.538 2.56h-3.386a2.549 2.549 0 0 1-2.539-2.56V2.56A2.549 2.549 0 0 1 14.075 0Z"
      fill="#fff"
      fillOpacity={0.5}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.539 0h3.385a2.549 2.549 0 0 1 2.539 2.56v3.415a2.549 2.549 0 0 1-2.539 2.56H2.54A2.549 2.549 0 0 1 0 5.974V2.56A2.549 2.549 0 0 1 2.539 0Zm0 11.466h3.385a2.549 2.549 0 0 1 2.539 2.56v3.414A2.55 2.55 0 0 1 5.924 20H2.54A2.55 2.55 0 0 1 0 17.44v-3.415a2.549 2.549 0 0 1 2.539-2.56Zm14.923 0h-3.386a2.549 2.549 0 0 0-2.539 2.56v3.414A2.55 2.55 0 0 0 14.075 20h3.387A2.55 2.55 0 0 0 20 17.44v-3.415a2.549 2.549 0 0 0-2.538-2.56Z"
      fill="#fff"
      fillOpacity={0.5}
    />
  </svg>
)

export default SvgComponent
