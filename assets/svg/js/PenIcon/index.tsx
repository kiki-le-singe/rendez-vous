import Svg, { Path } from "react-native-svg";

import Colors from "../../../../constants/Colors";

export default function PenIcon() {
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <Path
        d="M7.37251 4.01333L7.98584 4.62667L1.94584 10.6667H1.33251V10.0533L7.37251 4.01333ZM9.77251 0C9.60584 0 9.43251 0.0666666 9.30584 0.193333L8.08584 1.41333L10.5858 3.91333L11.8058 2.69333C12.0658 2.43333 12.0658 2.01333 11.8058 1.75333L10.2458 0.193333C10.1125 0.06 9.94584 0 9.77251 0ZM7.37251 2.12667L-0.000823975 9.5V12H2.49918L9.87251 4.62667L7.37251 2.12667Z"
        fill={Colors.light.lightGreen}
      />
    </Svg>
  );
}
