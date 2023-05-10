import Svg, { Path } from "react-native-svg";

import Colors from "../../../../constants/Colors";

export default function CopyIcon() {
  return (
    <Svg width="14" height="16" viewBox="0 0 14 16" fill="none">
      <Path
        d="M10 0.666687H2.00001C1.26667 0.666687 0.666672 1.26669 0.666672 2.00002V11.3334H2.00001V2.00002H10V0.666687ZM12 3.33335H4.66667C3.93334 3.33335 3.33334 3.93335 3.33334 4.66669V14C3.33334 14.7334 3.93334 15.3334 4.66667 15.3334H12C12.7333 15.3334 13.3333 14.7334 13.3333 14V4.66669C13.3333 3.93335 12.7333 3.33335 12 3.33335ZM12 14H4.66667V4.66669H12V14Z"
        fill={Colors.light.lightGreen}
      />
    </Svg>
  );
}
