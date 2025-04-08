import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#EBF4FF"
      d="M14.33 0C6.832 0 .722 6.02.722 13.406c0 7.386 6.11 13.405 13.608 13.405s13.607-6.019 13.607-13.405C27.937 6.019 21.827 0 14.33 0Zm5.92 18.192c-.191.321-.532.495-.885.495a.922.922 0 0 1-.517-.147l-4.219-2.48c-1.047-.617-1.823-1.97-1.823-3.164V7.4a1.02 1.02 0 0 1 2.041 0v5.496c0 .483.408 1.193.83 1.435l4.218 2.48c.49.281.654.898.354 1.38Z"
    />
  </Svg>
)
export default SvgComponent