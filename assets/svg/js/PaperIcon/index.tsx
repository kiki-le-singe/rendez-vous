import Svg, { Path } from "react-native-svg";

import Colors from "../../../../constants/Colors";

export default function PaperIcon() {
  return (
    <Svg width="12" height="14" viewBox="0 0 12 14" fill="none">
      <Path
        d="M3.33335 9.66659H8.66669V10.9999H3.33335V9.66659ZM3.33335 6.99992H8.66669V8.33325H3.33335V6.99992ZM7.33335 0.333252H2.00002C1.26669 0.333252 0.666687 0.933252 0.666687 1.66659V12.3333C0.666687 13.0666 1.26002 13.6666 1.99335 13.6666H10C10.7334 13.6666 11.3334 13.0666 11.3334 12.3333V4.33325L7.33335 0.333252ZM10 12.3333H2.00002V1.66659H6.66669V4.99992H10V12.3333Z"
        fill={Colors.light.lightGreen}
      />
    </Svg>
  );
}
