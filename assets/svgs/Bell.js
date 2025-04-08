import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Mask
      id="a"
      width={28}
      height={28}
      x={0}
      y={-1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M0 0h27.862V26.81H0V0Z" />
    </Mask>
    <G fill="#EBF4FF" mask="url(#a)">
      <Path d="M21.263 9.878c0 7.76 3.666 7.055 3.666 10.583 0 0 0 1.411-1.466 1.411H4.399c-1.466 0-1.466-1.41-1.466-1.41 0-3.529 3.666-2.823 3.666-10.584 0-3.896 3.283-7.056 7.332-7.056 4.049 0 7.332 3.16 7.332 7.056Z" />
      <Path d="M16.13 2.822c0-.561-.23-1.1-.643-1.497a2.245 2.245 0 0 0-1.556-.62c-.583 0-1.143.223-1.555.62a2.077 2.077 0 0 0-.644 1.497c0 .562.231 1.1.644 1.497.412.397.972.62 1.555.62.584 0 1.143-.223 1.556-.62.412-.397.644-.935.644-1.497ZM13.931 26.106c.778 0 1.524-.298 2.074-.827a2.77 2.77 0 0 0 .859-1.995h-5.866c0 .748.31 1.466.86 1.995.55.53 1.295.827 2.073.827Z" />
    </G>
  </Svg>
)
export default SvgComponent