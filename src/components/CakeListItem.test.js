import React from "react";
import { shallow } from "enzyme";
import CakeListItem from "./CakeListItem";

describe("CakeListItem", () => {
  let mockCake, wrapper;

  beforeEach(() => {
    mockCake = {
      id: "cake",
      name: "Cake",
      comment: "Description of cake",
      imageUrl: "https://www.example.com/cake.jpg",
      yumFactor: 5
    };
    wrapper = shallow(<CakeListItem {...mockCake} />);
  });

  it("should show the name of the cake", () => {
    const cakeText = wrapper.find("p");
    expect(cakeText.text()).toEqual(mockCake.name);
  });

  it("should show the image of the cake", () => {
    const cakeImage = wrapper.find("img");
    expect(cakeImage.prop("src")).toEqual(mockCake.imageUrl);
    expect(cakeImage.prop("alt")).toEqual(mockCake.name);
  });
});
