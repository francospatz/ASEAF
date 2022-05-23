import React from "react";
import { shallow } from "enzyme";
import Progress_bar from "./Progress_bar";

describe("Progress_bar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Progress_bar />);
    expect(wrapper).toMatchSnapshot();
  });
});
