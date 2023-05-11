import * as React from "react";
import renderer from "react-test-renderer";
import { View } from "react-native";

import ActionsLinks from "..";

it(`renders correctly`, () => {
  const tree = renderer
    .create(
      <ActionsLinks>
        <View />
      </ActionsLinks>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
