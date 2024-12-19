import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    aria-hidden="true"
    viewBox="0 0 64 64"
    className="iconify iconify--emojione w-6 h-6"
    {...props}
  >
    <circle cx={32} cy={32} r={30} fill="#f5f5f5" />
    <circle cx={32} cy={32} r={12} fill="#ed4c5c" />
  </svg>
)
const Memo = memo(SvgComponent)
export { Memo as Jp }
