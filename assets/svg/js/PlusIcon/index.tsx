import Svg, { Path } from "react-native-svg";

import Colors from "../../../../constants/Colors";

export default function PlusIcon() {
  return (
    <Svg width="21" height="20" viewBox="0 0 21 20" fill="none">
      <Path
        d="M11.5 5H9.5V9H5.5V11H9.5V15H11.5V11H15.5V9H11.5V5ZM10.5 0C4.98 0 0.5 4.48 0.5 10C0.5 15.52 4.98 20 10.5 20C16.02 20 20.5 15.52 20.5 10C20.5 4.48 16.02 0 10.5 0ZM10.5 18C6.09 18 2.5 14.41 2.5 10C2.5 5.59 6.09 2 10.5 2C14.91 2 18.5 5.59 18.5 10C18.5 14.41 14.91 18 10.5 18Z"
        fill={Colors.light.lightGreen}
      />
    </Svg>
  );
}