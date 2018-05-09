import React from "react";
import { shallow } from "enzyme";
import NewCakeForm from "./NewCakeForm";

describe("NewCakeForm", () => {
  let wrapper, onSubmitSpy;

  beforeEach(() => {
    onSubmitSpy = jest.fn();
    wrapper = shallow(<NewCakeForm onSubmit={onSubmitSpy} />);
  });

  it("should be able to specify the name", () => {
    const input = wrapper.find("#name");
    expect(input.prop("name")).toEqual("name");
  });

  it("should be able to specify a comment", () => {
    const textarea = wrapper.find("textarea");
    expect(textarea.prop("name")).toEqual("comment");
  });

  it("should be able to specify an image URL", () => {
    const input = wrapper.find("#image-url");
    expect(input.prop("name")).toEqual("imageUrl");
  });

  it("should be able to rate the cake's yum factor from 1 to 5", () => {
    const input = wrapper.find("#yum-factor");
    expect(input.prop("name")).toEqual("yumFactor");
    expect(input.prop("min")).toEqual(1);
    expect(input.prop("max")).toEqual(5);
  });

  it("should call its onSubmit function when button pressed");
});
