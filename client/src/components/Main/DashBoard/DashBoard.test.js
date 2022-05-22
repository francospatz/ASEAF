import React from "react";
import { shallow } from "enzyme";
import DashBoard from "./DashBoard";

describe("DashBoard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DashBoard />);
    expect(wrapper).toMatchSnapshot();
  });
});
