import React from "react";
import { render } from "@testing-library/react";
import Highlight, { escape } from "../index";

describe("test Hightlight component", () => {
  it("should change < to &lt;", () => {
    const lessThan = escape("<");
    expect(lessThan).toEqual("&lt;");
  });

  it("should change other to string or emptyString", () => {
    const emptyString = escape("");
    expect(emptyString).toEqual("");
  });
  it("should render the correct global style", () => {
    const wrapper = render(<Highlight></Highlight>);
    expect(wrapper).toMatchSnapshot();
  });
});
