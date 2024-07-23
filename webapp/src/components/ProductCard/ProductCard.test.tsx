import React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "./ProductCard";

describe("ProductCard", () => {
  let tree: ReactTestRenderer;
  beforeEach(() => {
    tree = create(
      <MemoryRouter>
        <ProductCard
          id={1}
          name="product name"
          photoUrl="https://picsum.photos/seed/picsum/200/300"
          status="Active"
        />
      </MemoryRouter>
    );
  });
  afterEach(() => {
    tree.unmount();
  });
  it("rendersProduct", async () => {
    const testInstance = tree.root;
    await testInstance.findByProps({ "data-testid": "product-container-1" });
    await testInstance.findByProps({ "data-testid": "product-photoUrl-1" });
    await testInstance.findByProps({ "data-testid": "product-id-1" });
    await testInstance.findByProps({ "data-testid": "product-name-1" });
    await testInstance.findByProps({ "data-testid": "product-status-1" });
  });
});
