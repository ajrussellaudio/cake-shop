import React from "react";
import { shallow } from "enzyme";
import NewCakeForm from "./NewCakeForm";

describe("NewCakeForm", () => {
  let wrapper, onSubmitSpy, spies;

  beforeEach(() => {
    spies = {
      onSubmit: jest.fn(),
      onNameChange: jest.fn(),
      onCommentChange: jest.fn(),
      onImageUrlChange: jest.fn(),
      onYumFactorChange: jest.fn()
    };
    wrapper = shallow(<NewCakeForm {...spies} />);
  });

  it("should be able to specify the name", () => {
    const input = wrapper.find("#name");
    expect(input.prop("name")).toEqual("name");
    expect(spies.onNameChange.mock.calls.length).toEqual(0);
    input.simulate("change");
    expect(spies.onNameChange.mock.calls.length).toEqual(1);
  });

  it("should be able to specify a comment", () => {
    const textarea = wrapper.find("textarea");
    expect(textarea.prop("name")).toEqual("comment");
    expect(spies.onCommentChange.mock.calls.length).toEqual(0);
    textarea.simulate("change");
    expect(spies.onCommentChange.mock.calls.length).toEqual(1);
  });

  it("should be able to specify an image URL", () => {
    const input = wrapper.find("#image-url");
    expect(input.prop("name")).toEqual("imageUrl");
    expect(spies.onImageUrlChange.mock.calls.length).toEqual(0);
    input.simulate("change");
    expect(spies.onImageUrlChange.mock.calls.length).toEqual(1);
  });

  it("should be able to rate the cake's yum factor from 1 to 5", () => {
    const input = wrapper.find("#yum-factor");
    expect(input.prop("name")).toEqual("yumFactor");
    expect(input.prop("min")).toEqual(1);
    expect(input.prop("max")).toEqual(5);
    expect(spies.onYumFactorChange.mock.calls.length).toEqual(0);
    input.simulate("change");
    expect(spies.onYumFactorChange.mock.calls.length).toEqual(1);
  });

  it("should call its onSubmit function when button pressed", () => {
    expect(spies.onSubmit.mock.calls.length).toEqual(0);
    const form = wrapper.find("form");
    form.simulate("submit");
    expect(spies.onSubmit.mock.calls.length).toEqual(1);
  });

  afterEach(() => {
    Object.keys(spies).forEach(spy => spies[spy].mockReset());
  });
});
