import React from "react";
import { shallow } from "enzyme";
import CakeList from "./CakeList";

describe("CakeList", () => {
  let mockCakes, wrapper;

  beforeEach(() => {
    mockCakes = [
      {
        id: "cake1",
        name: "Cake 1",
        comment: "Description of first cake",
        imageUrl: "https://www.example.com/cake1.jpg",
        yumFactor: 5
      },
      {
        id: "cake2",
        name: "Cake 2",
        comment: "Description of second cake",
        imageUrl: "https://www.example.com/cake2.jpg",
        yumFactor: 3
      }
    ];
    wrapper = shallow(<CakeList cakes={mockCakes} />);
  });

  it("should be a simple list", () => {
    expect(wrapper.find("ul").length).toEqual(1);
    expect(wrapper.find("li").length).toEqual(mockCakes.length);
  });
});
