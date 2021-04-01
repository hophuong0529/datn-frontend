import Pagination from "react-js-pagination";
import React from "react";
import "./paginate.css";

export default function Paginate(props) {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "20px" }}
    >
      <Pagination
        activePage={props.activePage}
        itemsCountPerPage={props.itemsCountPerPage}
        totalItemsCount={props.totalItemsCount}
        pageRangeDisplayed={5}
        onChange={props.onChange}
        itemClass="page-item"
        linkClass="page-link"
        prevPageText="Prev"
        nextPageText="Next"
      />
    </div>
  );
}
