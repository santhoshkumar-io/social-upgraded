import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.4}
      d="M20 12.94c0 2.79-2.24 5.05-5.03 5.06H5.05C2.27 18 0 15.75 0 12.96v-.01s.006-4.426.014-6.652a.498.498 0 0 1 .808-.392c2.376 1.885 6.625 5.322 6.678 5.367.71.57 1.61.89 2.53.89.92 0 1.82-.32 2.53-.9.053-.036 4.207-3.37 6.619-5.286a.5.5 0 0 1 .81.39c.01 2.21.01 6.573.01 6.573Z"
      fill="#fff"
      fillOpacity={0.5}
    />
    <path
      d="M19.476 2.674A5.035 5.035 0 0 0 15.03 0H5.05A5.035 5.035 0 0 0 .604 2.674a.864.864 0 0 0 .221 1.078L8.25 9.69c.52.42 1.15.629 1.78.629h.02c.63 0 1.26-.21 1.78-.63l7.425-5.938a.864.864 0 0 0 .221-1.078Z"
      fill="#fff"
      fillOpacity={0.5}
    />
  </svg>
)

export default SvgComponent
