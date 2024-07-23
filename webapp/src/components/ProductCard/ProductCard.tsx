import React from "react";
import { ProductCardProps } from "../interfaces";

const ProductCard = (props: ProductCardProps) => (
  <div className="p-2 xs:w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
    <div
      className="rounded overflow-hidden bg-neutral-300 flex-col"
      data-testid={`product-container-${props.id}`}
    >
      <img
        src={props.photoUrl}
        data-testid={`product-photoUrl-${props.id}`}
        className="w-full bg-cover h-48"
      />

      <div className="px-6 py-4">
        <div
          data-testid={`product-name-${props.id}`}
          className="font-bold text-xl mb-2"
        >
          {props.name}
        </div>
        <div data-testid={`product-id-${props.id}`}>
          <span className="font-bold pr-2">Id:</span>
          <span>{props.id}</span>
        </div>
        <div data-testid={`product-status-${props.id}`}>
          <span className="font-bold pr-2">Status:</span>
          <span>{props.status}</span>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
