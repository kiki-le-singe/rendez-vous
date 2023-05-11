import * as React from "react";
import renderer from "react-test-renderer";

import BottomActions from "..";

it(`renders correctly`, () => {
  const tree = renderer.create(<BottomActions />).toJSON();

  expect(tree).toMatchSnapshot();
});
