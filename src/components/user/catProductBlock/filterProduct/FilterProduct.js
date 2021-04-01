import React, { Fragment } from "react";
import "./filterProduct.css";
import Product from "../../product/Product";
import Paginate from "../../../pagination/Paginate";

export default function FilterProduct(props) {
  const {
    products,
    title,
    activePage,
    perPage,
    totalItemsPage,
    handlePageChange,
  } = props;
  return (
    <Fragment>
      <div className="d-pro-head">
        <h1>{title}</h1>
      </div>
      <div className="container">
        <div className="row">
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <Paginate
          activePage={activePage}
          itemsCountPerPage={perPage}
          totalItemsCount={totalItemsPage}
          onChange={handlePageChange}
        />
      </div>
    </Fragment>
  );
}
