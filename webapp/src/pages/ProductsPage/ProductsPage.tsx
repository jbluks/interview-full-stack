import React, { useEffect, useState } from "react";
import PageWrapper from "../PageWrapper";
import {
  Product,
  ProductCardProps,
  ProductData,
} from "../../components/interfaces";
import { getProductData } from "../ApiHelper";
import ProductCard from "../../components/ProductCard/ProductCard";
import Spinner from "../../components/Spinner/Spinner";

const DATA_STATES = {
  waiting: "WAITING",
  loaded: "LOADED",
  error: "ERROR",
};

const ProductsPage = () => {
  const [loadingState, setLoadingState] = useState(DATA_STATES.waiting);
  const [data, setData] = useState({
    Active: [],
    InActive: [],
  } as ProductData);

  const getProducts = async () => {
    setLoadingState(DATA_STATES.waiting);
    const { productData, errorOccured } = await getProductData();
    setData(productData);
    setLoadingState(errorOccured ? DATA_STATES.error : DATA_STATES.loaded);
  };

  useEffect(() => {
    getProducts();
  }, []);

  let content;
  if (loadingState === DATA_STATES.waiting)
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4"
        data-testid="loading-spinner-container"
      >
        <Spinner />
      </div>
    );
  else if (loadingState === DATA_STATES.loaded)
    content = (
      <>
        <div className="flex flex-wrap lg:-mx-4">
          {data["Active"].map((card: Product) => (
            <ProductCard
              id={card.ProductID}
              name={card.ProductName}
              photoUrl={card.ProductPhotoURL}
              status={card.ProductStatus}
              key={card.ProductID}
            />
          ))}
          {data["InActive"].map((card: Product) => (
            <ProductCard
              id={card.ProductID}
              name={card.ProductName}
              photoUrl={card.ProductPhotoURL}
              status={card.ProductStatus}
            />
          ))}
        </div>
      </>
    );
  else
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4 text-3xl font-bold text-white"
        data-testid="error-container"
      >
        An error occured fetching the data!
      </div>
    );

  return (
    <PageWrapper>
      <div className="flex items-center mb-3">{content}</div>
    </PageWrapper>
  );
};

export default ProductsPage;
