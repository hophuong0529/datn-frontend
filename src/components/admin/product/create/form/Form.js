import React, { useState, useEffect } from "react";
import Color from "./color/Color";
import Image from "./image/Image";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export default function Form(props) {
  const { handleAddSubmit, handleEditSubmit, title } = props;

  const [colors, setColors] = useState([]);
  const [selectColors, setSelectColors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [producers, setProducers] = useState([]);
  const [producerId, setProducerId] = useState(0);
  const [subCategoryId, setSubCategoryId] = useState(0);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [isTop, setIsTop] = useState(0);
  const [images, setImages] = useState([]);
  const [preImages, setPreImages] = useState([]);
  const [description, setDescription] = useState("");

  const formData = new FormData();

  const submitForm = (event) => {
    formData.append("name", name);
    formData.append("code", code);
    formData.append("subcategory_id", subCategoryId);
    formData.append("discount", discount);
    formData.append("price", price);
    formData.append("is_top", isTop);
    formData.append("description", description);
    formData.append("producer_id", producerId);
    formData.append("colors", JSON.stringify(selectColors));
    formData.append("preImages", JSON.stringify(preImages));
    Array.from(images).forEach((img) => formData.append("images[]", img));

    if (handleAddSubmit) {
      handleAddSubmit(event, formData);
    } else if (handleEditSubmit) {
      handleEditSubmit(event, formData);
    }
  };

  const slug = useParams();
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
    if (slug.id) {
      axios
        .get(`http://127.0.0.1:8000/api/product/${slug.id}`)
        .then((response) => {
          setCode(response.data.code);
          setName(response.data.name);
          setPrice(response.data.price);
          setDiscount(response.data.discount);
          setIsTop(response.data.is_top);
          setSubCategoryId(response.data.subcategory_id);
          setCategoryId(response.data.sub.category_id);
          setProducerId(response.data.producer_id);
          setDescription(response.data.description);
          setSelectColors(response.data.colors);
          setPreImages(response.data.images);
        });
    }
  }, [slug.id]);

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
          <form className="form-horizontal style-form" onSubmit={submitForm}>
            <table className="table">
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold", width: "25%" }}>
                    Danh mục sản phẩm chính
                  </td>
                  <td>
                    <label>
                      <select
                        name="category_id"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
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
                        name="subcategory_id"
                        value={subCategoryId}
                        onChange={(e) => {
                          setSubCategoryId(e.target.value);
                        }}
                        className="form-control"
                      >
                        <option value="">Chọn một danh mục</option>
                        {categories
                          .find((el) => el.id === parseInt(categoryId))
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
                        value={code}
                        className="form-control"
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Mã sản phẩm"
                      />
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        placeholder="Tên sản phẩm"
                      />
                    </label>
                  </td>
                </tr>
                <td style={{ fontWeight: "bold", width: "25%" }}>
                  Xưởng sản xuất
                </td>
                <td>
                  <label>
                    <select
                      name="producer_id"
                      value={producerId}
                      onChange={(e) => setProducerId(e.target.value)}
                      className="form-control"
                    >
                      <option value="">Chọn một xưởng sản xuất</option>
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
                  <td style={{ fontWeight: "bold" }}>Giá</td>
                  <td>
                    <label>
                      <input
                        name="price"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="form-control"
                      />
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
                        className="form-control"
                        style={{ width: "50%" }}
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                      />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Mô tả</td>
                  <td>
                    <textarea
                      rows="6"
                      className="form-control"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Mô tả sản phẩm"
                    ></textarea>
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
                          name="is_top"
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
        </div>
      </div>
    </div>
  );
}
