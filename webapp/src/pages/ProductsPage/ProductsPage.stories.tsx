import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import { PRODUCTS_URL } from "../ApiHelper";

export default {
  title: "Products Page",
  component: ProductsPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof ProductsPage>;

const Template: ComponentStory<typeof ProductsPage> = () => <ProductsPage />;

export const GetDataSuccess = Template.bind({});
GetDataSuccess.parameters = {
  mockData: [
    {
      url: PRODUCTS_URL,
      method: "GET",
      status: 200,
      response: {
        data: [
          {
            ProductID: 1,
            ProductName: "Hat",
            ProductPhotoURL: "https://picsum.photos/200/300",
            ProductStatus: "Active",
          },
          {
            ProductID: 2,
            ProductName: "Shoes",
            ProductPhotoURL: "https://picsum.photos/200/300",
            ProductStatus: "Active",
          },
          {
            ProductID: 3,
            ProductName: "Pants",
            ProductPhotoURL: "https://picsum.photos/200/300",
            ProductStatus: "Active",
          },
          {
            ProductID: 4,
            ProductName: "Shirt",
            ProductPhotoURL: "https://picsum.photos/200/300",
            ProductStatus: "InActive",
          },
          {
            ProductID: 5,
            ProductName: "Coat",
            ProductPhotoURL: "https://picsum.photos/200/300",
            ProductStatus: "InActive",
          },
        ],
        message: "",
      },
    },
    {
      url: PRODUCTS_URL,
      method: "POST",
      status: 200,
      response: {
        data: {
          message: "Success",
        },
      },
    },
  ],
};

export const GetDataSuccessEmpty = Template.bind({});
GetDataSuccessEmpty.parameters = {
  mockData: [
    {
      url: PRODUCTS_URL,
      method: "GET",
      status: 200,
      response: {
        data: [],
        message: "",
      },
    },
    {
      url: PRODUCTS_URL,
      method: "POST",
      status: 200,
      response: {
        data: {
          message: "Success",
        },
      },
    },
  ],
};

export const GetDataError = Template.bind({});
GetDataError.parameters = {
  mockData: [
    {
      url: PRODUCTS_URL,
      method: "GET",
      status: 500,
      response: {
        data: [],
        message: "Error",
      },
    },
    {
      url: PRODUCTS_URL,
      method: "POST",
      status: 200,
      response: {
        data: {
          message: "Success",
        },
      },
    },
  ],
};
