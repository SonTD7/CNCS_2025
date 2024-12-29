import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="iconify iconify--emojione relative w-6 h-6"
    viewBox="0 0 64 64"
    {...props}
  >
    <circle cx={32} cy={32} r={30} fill="#f42f4c" />
    <path
      fill="#ffe62e"
      d="m32 39 9.9 7-3.7-11.4 9.8-7.4H35.8L32 16l-3.7 11.2H16l9.8 7.4L22.1 46z"
    />
  </svg>
)
export { SvgComponent as Vi }
