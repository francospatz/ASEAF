import React from "react";
import { shallow } from "enzyme";
import LineChart from "./LineChart";

describe("LineChart", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LineChart />);
    expect(wrapper).toMatchSnapshot();
  });
});
