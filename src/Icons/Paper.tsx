import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.4}
      d="M15.809 7.021c-.452 0-1.05-.01-1.794-.01-1.816 0-3.31-1.503-3.31-3.336V.459A.456.456 0 0 0 10.254 0h-5.29C2.496 0 .5 2.026.5 4.509v10.775C.5 17.889 2.59 20 5.17 20h7.876c2.46 0 4.454-2.013 4.454-4.498V7.471a.453.453 0 0 0-.453-.458c-.422.003-.93.008-1.238.008Z"
      fill="#fff"
      fillOpacity={0.5}
    />
    <path
      opacity={0.4}
      d="M13.084.567a.477.477 0 0 0-.821.334v2.637c0 1.106.911 2.016 2.017 2.016.697.008 1.665.01 2.487.008a.477.477 0 0 0 .343-.808L13.084.567Z"
      fill="#fff"
      fillOpacity={0.5}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.974 9.388h3.385a.745.745 0 1 0 0-1.49H5.974a.745.745 0 0 0 0 1.49Zm0 4.994h5.444a.745.745 0 1 0 0-1.49H5.974a.745.745 0 0 0 0 1.49Z"
      fill="#fff"
      fillOpacity={0.5}
    />
  </svg>
)

export default SvgComponent
