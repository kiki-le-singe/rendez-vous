import Svg, { Path } from "react-native-svg";
import Colors from "../../../../constants/Colors";

export default function DownArrowIcon() {
  return (
    <Svg width="8" height="4" viewBox="0 0 8 4" fill="none">
      <Path
        d="M0.666664 0.333374L4 3.66671L7.33333 0.333374H0.666664Z"
        fill={Colors.light.placeholder}
      />
    </Svg>
  );
}
