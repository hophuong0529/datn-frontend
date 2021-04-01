import React from "react";
import FilterBar from "./filterBar/FilterBar";
import FilterProduct from "./filterProduct/FilterProduct";

export default function CatProduct(props) {
  const {
    categories,
    products,
    title,
    activePage,
    perPage,
    totalItemsPage,
    handlePageChange,
  } = props;
  return (
    <main className="mains blk-pro-cat sty-none" style={{ padding: "20px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 js-fil-bar">
            <FilterBar categories={categories} />
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <FilterProduct
              activePage={activePage}
              perPage={perPage}
              totalItemsPage={totalItemsPage}
              handlePageChange={handlePageChange}
              products={products}
              title={title}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
