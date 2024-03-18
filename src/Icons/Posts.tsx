import * as React from "react"

const SvgComponent = (props:any) => (
  <svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.4}
      d="M13.191 0H4.81C1.77 0 0 1.78 0 4.83v10.33C0 18.26 1.77 20 4.81 20h8.381C16.28 20 18 18.26 18 15.16V4.83C18 1.78 16.28 0 13.191 0Z"
      fill="#fff"
      fillOpacity={0.5}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.08 4.65v.01a.78.78 0 0 0 0 1.56h2.989c.431 0 .781-.35.781-.791a.781.781 0 0 0-.781-.779H5.08Zm7.84 6.09H5.08a.78.78 0 0 1 0-1.561h7.84a.781.781 0 0 1 0 1.561Zm0 4.57H5.08c-.3.04-.59-.11-.75-.36a.795.795 0 0 1 .75-1.21h7.84c.399.04.7.38.7.79 0 .399-.301.74-.7.78Z"
      fill="#fff"
      fillOpacity={0.5}
    />
  </svg>
)

export default SvgComponent
