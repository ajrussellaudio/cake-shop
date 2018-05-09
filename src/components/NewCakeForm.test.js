import React from "react";
import { shallow } from "enzyme";
import NewCakeForm from "./NewCakeForm";

describe("NewCakeForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NewCakeForm onSubmit={jest.fn()} />);
  });

  it("should be able to specify the name", () => {
    const input = wrapper.find("#name");
    expect(input.prop("name")).toEqual("name");
  });

  it("should be able to specify a comment", () => {
    const textarea = wrapper.find("textarea");
    expect(textarea.prop("name")).toEqual("comment");
  });

  it("should be able to specify an image URL");
  it("should be able to rate the cake's yum factor from 1 to 5");
  it("should call its onSubmit function when button pressed");
});
