import Svg, { Path } from "react-native-svg";
import Colors from "../../../../constants/Colors";

export default function CheckIcon() {
  return (
    <Svg width="16" height="12" viewBox="0 0 16 12" fill="none">
      <Path
        d="M5.32917 9.22917L1.85417 5.75417L0.670837 6.92917L5.32917 11.5875L15.3292 1.58751L14.1542 0.412506L5.32917 9.22917Z"
        fill={Colors.light.white}
      />
    </Svg>
  );
}
