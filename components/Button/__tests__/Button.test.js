import * as React from "react";
import renderer from "react-test-renderer";

import Button from "..";

it(`renders correctly`, () => {
  const tree = renderer.create(<Button label="Press me!" />).toJSON();

  expect(tree).toMatchSnapshot();
});
