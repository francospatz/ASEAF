import React from "react";
import { shallow } from "enzyme";
import PieChart from "./PieChart";

describe("PieChart", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PieChart />);
    expect(wrapper).toMatchSnapshot();
  });
});
