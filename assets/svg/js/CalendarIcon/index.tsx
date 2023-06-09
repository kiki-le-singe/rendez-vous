import Svg, { Path } from "react-native-svg";

import Colors from "../../../../constants/Colors";

export default function CalendarIcon() {
  return (
    <Svg width="18" height="20" viewBox="0 0 18 20" fill="none">
      <Path
        d="M15.6667 2.49998H14.8333V0.833313H13.1667V2.49998H4.83332V0.833313H3.16666V2.49998H2.33332C1.41666 2.49998 0.666656 3.24998 0.666656 4.16665V17.5C0.666656 18.4166 1.41666 19.1666 2.33332 19.1666H15.6667C16.5833 19.1666 17.3333 18.4166 17.3333 17.5V4.16665C17.3333 3.24998 16.5833 2.49998 15.6667 2.49998ZM15.6667 17.5H2.33332V8.33331H15.6667V17.5ZM15.6667 6.66665H2.33332V4.16665H15.6667V6.66665Z"
        fill={Colors.light.placeholder}
      />
    </Svg>
  );
}
