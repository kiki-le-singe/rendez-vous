import Svg, { Path } from "react-native-svg";
import Colors from "../../../../constants/Colors";

export default function BackArrow() {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path
        d="M13.6667 6.16668H3.52501L8.18334 1.50834L7.00001 0.333344L0.333344 7.00001L7.00001 13.6667L8.17501 12.4917L3.52501 7.83334H13.6667V6.16668Z"
        fill={Colors.light.text}
      />
    </Svg>
  );
}
