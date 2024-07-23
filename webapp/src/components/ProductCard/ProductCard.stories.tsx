import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "./ProductCard";

export default {
  title: "Product Card",
  component: ProductCard,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Active = Template.bind({});
Active.args = {
  id: 123,
  name: "Product One",
  photoUrl: "https://picsum.photos/seed/picsum/200/400",
  status: "Active",
};

export const InActive = Template.bind({});
InActive.args = {
  id: 234,
  name: "Product Two",
  photoUrl: "https://picsum.photos/seed/picsum/200/400",
  status: "InActive",
};
