import React from "react";
import { shallow } from "enzyme";
import CakeDetail from "./CakeDetail";

describe("CakeDetail", () => {
  it("should display the comment/review made", () => {
    const mockCake = {
      id: "cake",
      name: "Cake",
      comment: "Description of cake",
      imageUrl: "https://www.example.com/cake.jpg",
      yumFactor: 5
    };
    const wrapper = shallow(<CakeDetail {...mockCake} />);
    expect(wrapper.find(".comment").text()).toEqual(mockCake.comment);
  });
});
