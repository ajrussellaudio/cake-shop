import React from "react";
import { shallow } from "enzyme";
import NewCakeForm from "./NewCakeForm";

describe("NewCakeForm", () => {
  let wrapper, onSubmit, onPropertyChange;

  beforeEach(() => {
    onSubmit = jest.fn();
    onPropertyChange = jest.fn();
    wrapper = shallow(
      <NewCakeForm onSubmit={onSubmit} onPropertyChange={onPropertyChange} />
    );
  });

  it("should be able to specify the name", () => {
    const input = wrapper.find("#name");
    expect(input.prop("name")).toEqual("name");
    expect(onPropertyChange.mock.calls.length).toEqual(0);
    input.simulate("change");
    expect(onPropertyChange.mock.calls.length).toEqual(1);
  });

  it("should be able to specify a comment", () => {
    const textarea = wrapper.find("textarea");
    expect(textarea.prop("name")).toEqual("comment");
    expect(onPropertyChange.mock.calls.length).toEqual(0);
    textarea.simulate("change");
    expect(onPropertyChange.mock.calls.length).toEqual(1);
  });

  it("should be able to specify an image URL", () => {
    const input = wrapper.find("#image-url");
    expect(input.prop("name")).toEqual("imageUrl");
    expect(onPropertyChange.mock.calls.length).toEqual(0);
    input.simulate("change");
    expect(onPropertyChange.mock.calls.length).toEqual(1);
  });

  it("should be able to rate the cake's yum factor from 1 to 5", () => {
    const input = wrapper.find("#yum-factor");
    expect(input.prop("name")).toEqual("yumFactor");
    expect(input.prop("min")).toEqual(1);
    expect(input.prop("max")).toEqual(5);
    expect(onPropertyChange.mock.calls.length).toEqual(0);
    input.simulate("change");
    expect(onPropertyChange.mock.calls.length).toEqual(1);
  });

  it("should call its onSubmit function when button pressed", () => {
    expect(onSubmit.mock.calls.length).toEqual(0);
    const form = wrapper.find("form");
    form.simulate("submit");
    expect(onSubmit.mock.calls.length).toEqual(1);
  });

  afterEach(() => {
    onSubmit.mockReset();
    onPropertyChange.mockReset();
  });
});
