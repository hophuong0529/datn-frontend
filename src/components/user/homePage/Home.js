import React, { Fragment } from "react";
import Banner from "./banner/Banner";
import LatestProduct from "./LatestProduct";
import TopProduct from "./TopProduct";
import SaleProduct from "./SaleProduct";

export default function Home() {
  return (
    <Fragment>
      <Banner />
      <main className="main" style={{ marginTop: 20 }}>
        <LatestProduct />
        <SaleProduct />
        <TopProduct />
        <div className="clearfix"></div>
      </main>
    </Fragment>
  );
}
