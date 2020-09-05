import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { DatePicker } from "../index";
import { color, typography } from "../../shared/styles";

describe("test DatePicker component", () => {
  it('render correctly', () => {
    const wrapper = render(
      <DatePicker />
    );
    expect(wrapper).toMatchSnapshot();
  });
})