import React from "react";
import { shallow } from "enzyme";
import CakeList from "./CakeList";

describe("CakeList", () => {
  it("should be a simple list", () => {
    const mockCakes = [
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
    const wrapper = shallow(<CakeList cakes={mockCakes} />);
    expect(wrapper.find("ul").length).toEqual(1);
    expect(wrapper.find("li").length).toEqual(mockCakes.length);
  });

  it("should show the name of the cake");

  it("should show the image of the cake");
});
