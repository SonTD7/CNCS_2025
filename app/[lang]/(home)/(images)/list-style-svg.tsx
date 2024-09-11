import * as React from "react"
import { SVGProps } from "react"
const ListStyleSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={16} viewBox="0 0 20 20" {...props} className={props.className}>
    <path d="m15 10-9 5V5l9 5z" fill={props.color}/>
  </svg>
)
export default ListStyleSvg
