import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "off",
    className: {},
  },
};
