import Svg, { Path } from "react-native-svg";

import Colors from "../../../../constants/Colors";

export default function CardIcon() {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path
        d="M12.3333 0.333313H1.66668C0.926677 0.333313 0.333344 0.926646 0.333344 1.66665V8.99998C0.333344 9.73998 0.926677 10.3333 1.66668 10.3333H4.33334V13.6666L7.00001 12.3333L9.66668 13.6666V10.3333H12.3333C13.0733 10.3333 13.6667 9.73998 13.6667 8.99998V1.66665C13.6667 0.926646 13.0733 0.333313 12.3333 0.333313ZM12.3333 8.99998H1.66668V7.66665H12.3333V8.99998ZM12.3333 5.66665H1.66668V1.66665H12.3333V5.66665Z"
        fill={Colors.light.lightGreen}
      />
    </Svg>
  );
}
