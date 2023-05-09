import Svg, { Path } from "react-native-svg";

export default function FlagIcon() {
  return (
    <Svg width="16" height="12" viewBox="0 0 16 12" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0H16V12H0V0Z"
        fill="white"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0H5.3325V12H0V0Z"
        fill="#00267F"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.6675 0H16V12H10.6675V0Z"
        fill="#F31830"
      />
    </Svg>
  );
}
