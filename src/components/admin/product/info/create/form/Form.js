import React, { useState, useEffect } from "react";
import Color from "./color/Color";
import Image from "./image/Image";
import axios from "axios";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

export default function Form(props) {
  const { handleAddSubmit, handleEditSubmit, title, product } = props;

  const [colors, setColors] = useState([]);
  const [selectColors, setSelectColors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [producers, setProducers] = useState([]);

  const [isTop, setIsTop] = useState(0);
  const [images, setImages] = useState([]);
  const [preImages, setPreImages] = useState([]);

  const formData = new FormData();

  const submitForm = (event, values) => {
    formData.append("name", values.name);
    formData.append("code", values.code);
    formData.append("subcategory_id", values.subCategoryId);
    formData.append("discount", values.discount);
    formData.append("price_import", values.priceImport);
    formData.append("price", values.price);
    formData.append("description", values.description);
    formData.append("producer_id", values.producerId);
    formData.append("is_top", isTop);
    formData.append("colors", JSON.stringify(selectColors));
    formData.append("preImages", JSON.stringify(preImages));
    Array.from(images).forEach((img) => formData.append("images[]", img));

    if (!product) {
      handleAddSubmit(event, formData);
    } else {
      handleEditSubmit(event, formData);
    }
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      setCategories(response.data.data);
    });
    axios.get("http://127.0.0.1:8000/api/producers").then((response) => {
      setProducers(response.data);
    });
    axios.get("http://127.0.0.1:8000/api/colors").then((response) => {
      setColors(response.data);
    });
    if (product) {
      setIsTop(product.is_top);
      setSelectColors(product.colors);
      setPreImages(product.images);
    }
  }, [product]);

  return (
    <div className="row mt">
      <div className="col-lg-12">
        <div className="form-panel">
          <h2
            style={{
              textAlign: "center",
              padding: "5px 0 20px 0",
            }}
          >
            {title}
          </h2>
          <Formik
            enableReinitialize={true}
            initialValues={{
              categoryId: product ? product.sub?.category_id : "",
              subCategoryId: product ? product.subcategory_id : "",
              code: product ? product.code : "",
              name: product ? product.name : "",
              producerId: product ? product.producer_id : "",
              priceImport: product ? product.price_import : 0,
              price: product ? product.price : 0,
              discount: product ? product.discount : 0,
              description: product ? product.description : "",
            }}
            validationSchema={Yup.object().shape({
              code: Yup.string().required("* Vui lòng nhập dữ liệu vào ô này!"),
              name: Yup.string().required("* Vui lòng nhập dữ liệu vào ô này!"),
              priceImport: Yup.number().required(
                "* Vui lòng nhập dữ liệu vào ô này!"
              ),
              price: Yup.number().required(
                "* Vui lòng nhập dữ liệu vào ô này!"
              ),
              discount: Yup.number().required(
                "* Vui lòng nhập dữ liệu vào ô này!"
              ),
            })}
            onSubmit={(values) => submitForm(values)}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form
                className="form-horizontal style-form"
                onSubmit={handleSubmit}
              >
                <table className="table">
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: "bold", width: "25%" }}>
                        Danh mục sản phẩm chính
                      </td>
                      <td>
                        <label>
                          <select
                            name="categoryId"
                            value={values.categoryId}
                            onChange={handleChange}
                            className="form-control"
                          >
                            <option value="">Chọn một danh mục</option>
                            {categories.map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold", width: "25%" }}>
                        Danh mục sản phẩm phụ
                      </td>
                      <td>
                        <label>
                          <select
                            name="subCategoryId"
                            value={values.subCategoryId}
                            onChange={handleChange}
                            className="form-control"
                          >
                            <option value="">Chọn một danh mục</option>
                            {categories
                              .find(
                                (el) => el.id === parseInt(values.categoryId)
                              )
                              ?.subs?.map((item) => (
                                <option key={item.id} value={item.id}>
                                  {item.name}
                                </option>
                              ))}
                          </select>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Mã code</td>
                      <td>
                        <label>
                          <input
                            name="code"
                            type="text"
                            value={values.code}
                            className="form-control"
                            onChange={handleChange}
                            placeholder="Mã sản phẩm"
                          />
                          <small id="helpBlock" className="form-text">
                            {touched.code && errors.code}
                          </small>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Tên</td>
                      <td>
                        <label style={{ width: "80%" }}>
                          <input
                            name="name"
                            type="text"
                            value={values.name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Tên sản phẩm"
                          />
                          <small id="helpBlock" className="form-text">
                            {touched.name && errors.name}
                          </small>
                        </label>
                      </td>
                    </tr>
                    <td style={{ fontWeight: "bold", width: "25%" }}>
                      Nhà cung cấp
                    </td>
                    <td>
                      <label>
                        <select
                          name="producerId"
                          value={values.producerId}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="">Chọn một nhà cung cấp</option>
                          {producers.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </label>
                    </td>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Hình ảnh</td>
                      <td>
                        <Image
                          preImages={preImages}
                          setPreImages={setPreImages}
                          images={images}
                          setImages={setImages}
                        />
                      </td>
                    </tr>
                    <Color
                      colors={colors}
                      selectColors={selectColors}
                      setSelectColors={setSelectColors}
                    />
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Giá nhập </td>
                      <td>
                        <label>
                          <input
                            name="priceImport"
                            type="number"
                            min={0}
                            value={values.priceImport}
                            onChange={handleChange}
                            className="form-control"
                          />
                          <small id="helpBlock" className="form-text">
                            {touched.priceImport && errors.priceImport}
                          </small>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Giá bán </td>
                      <td>
                        <label>
                          <input
                            name="price"
                            type="number"
                            min={0}
                            value={values.price}
                            onChange={handleChange}
                            className="form-control"
                          />
                          <small id="helpBlock" className="form-text">
                            {touched.price && errors.price}
                          </small>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Giảm giá</td>
                      <td>
                        <label style={{ width: "20%" }}>
                          <input
                            name="discount"
                            type="number"
                            min={0}
                            className="form-control"
                            style={{ width: "50%" }}
                            value={values.discount}
                            onChange={handleChange}
                          />
                          <small id="helpBlock" className="form-text">
                            {touched.discount && errors.discount}
                          </small>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Mô tả</td>
                      <td>
                        <label style={{ width: "100%" }}>
                          <textarea
                            rows="6"
                            name="description"
                            className="form-control"
                            value={values.description}
                            onChange={handleChange}
                            placeholder="Mô tả sản phẩm"
                          ></textarea>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td>
                        <div className="form-check">
                          <label style={{ marginRight: "200px" }}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="isTop"
                              checked={isTop === 1 ? "checked" : ""}
                              value={isTop}
                              onChange={(e) =>
                                e.target.checked ? setIsTop(1) : setIsTop(0)
                              }
                            />
                            <label
                              className="form-check-label"
                              style={{ fontWeight: "bold" }}
                            >
                              Sản phẩm bán chạy
                            </label>
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td>
                        <button
                          className="btn btn-success"
                          style={{ width: "200px" }}
                        >
                          Lưu
                        </button>
                        &nbsp;
                        <Link
                          to="/admin/products"
                          style={{ width: "200px" }}
                          className="btn btn-danger"
                        >
                          Quay lại
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
