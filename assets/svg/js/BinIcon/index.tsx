import Svg, { Path } from "react-native-svg";

import Colors from "../../../../constants/Colors";

export default function BinIcon() {
  return (
    <Svg width="12" height="16" viewBox="0 0 12 16" fill="none">
      <Path
        d="M9.33332 5.5V13.8333H2.66666V5.5H9.33332ZM8.08332 0.5H3.91666L3.08332 1.33333H0.166656V3H11.8333V1.33333H8.91666L8.08332 0.5ZM11 3.83333H0.99999V13.8333C0.99999 14.75 1.74999 15.5 2.66666 15.5H9.33332C10.25 15.5 11 14.75 11 13.8333V3.83333Z"
        fill={Colors.light.darkGreen}
      />
    </Svg>
  );
}
