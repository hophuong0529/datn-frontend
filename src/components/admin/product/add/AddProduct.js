import { useEffect, useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { CloseButton } from "react-bootstrap";
import "./addProduct.css";

function AddProduct() {
  const { getRootProps, getInputProps } = useDropzone();

  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState(-1);
  const [selectColorsId, setSelectColorsId] = useState([]);
  const [colors, setColors] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState(-1);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [isTop, setIsTop] = useState(0);
  const [selectImages, setSelectImages] = useState([]);

  const handleImagesChange = (e) => {
    if (e.target.files) {
      setImages(e.target.files);

      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectImages((prevImages) => prevImages.concat(fileArray));
    }
  };

  const handleRemoveImage = (item) => {
    setSelectImages(selectImages.filter((x) => x !== item));
  };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <div className="col-md-3" style={{ position: "relative" }} key={photo}>
          <CloseButton onClick={() => handleRemoveImage(photo)} />
          <img
            src={photo}
            alt=""
            style={{ width: "100%", margin: "0px 10px 10px 0px" }}
          />
        </div>
      );
    });
  };

  const handleCreateProduct = (event) => {
    event.preventDefault();

    const formCreateData = new FormData();

    formCreateData.append("name", name);
    formCreateData.append("code", code);
    formCreateData.append("subcategory_id", subCategoryId);
    formCreateData.append("discount", discount);
    formCreateData.append("price", price);
    formCreateData.append("is_top", isTop);
    Array.from(images).forEach((el) => formCreateData.append("images[]", el));
    Array.from(selectColorsId).forEach((el) =>
      formCreateData.append("colorsId[]", el)
    );

    axios
      .post(`http://127.0.0.1:8000/api/products`, formCreateData)
      .then(() => {
        alert("Create success.");
        history.push("/admin");
      });
  };

  const handleColorClick = (el) => {
    const exist = selectColorsId.find((x) => x === el.id);
    if (!exist) {
      selectColorsId.push(el.id);
      setSelectColorsId([...selectColorsId]);
    }
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      setCategories(response.data);
    });
    axios.get("http://127.0.0.1:8000/api/colors").then((response) => {
      setColors(response.data);
    });
  }, []);

  return (
    <div className="row mt">
      <div className="col-lg-12">
        <div className="form-panel">
          <h1
            style={{
              textAlign: "center",
              padding: "20px 0 50px 0",
              fontWeight: "bold",
              color: "rgb(255 166 181)",
            }}
          >
            Create a Product
          </h1>
          <form
            className="form-horizontal style-form"
            onSubmit={handleCreateProduct}
          >
            <table className="table table-hover">
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold", width: "25%" }}>
                    Danh mục sản phẩm chính
                  </td>
                  <td>
                    <label>
                      <select
                        name="sub_categories"
                        value={category}
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                        className="form-control"
                      >
                        <option value={-1}>Chọn một danh mục</option>
                        {categories.map((item, index) => (
                          <option key={item.id} value={index}>
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
                        onChange={(e) => setSubCategoryId(e.target.value)}
                        className="form-control"
                      >
                        <option value={-1}>Chọn một danh mục</option>
                        {categories[category]?.subs?.map((item) => (
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
                      />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Hình ảnh</td>
                  <td>
                    <div className="container-fluid row">
                      {renderPhotos(selectImages)}
                    </div>
                    <div
                      {...getRootProps({ className: "dropzone", tabIndex: 0 })}
                    >
                      <input
                        {...getInputProps()}
                        onChange={handleImagesChange}
                      />
                      <span>
                        Kéo, thả một số tệp vào đây hoặc nhấp để chọn tệp
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Màu sắc</td>
                  <td style={{ display: "flex" }}>
                    <div className="product-color">
                      {colors.map((el) => (
                        <div
                          className={`color ${
                            selectColorsId.includes(el.id) ? "active" : ""
                          }`}
                          key={el.id}
                          onClick={() => handleColorClick(el)}
                        >
                          <span style={{ backgroundColor: el.code }} />
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Giá</td>
                  <td>
                    <label>
                      <input
                        name="price"
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="form-control"
                      />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Số lượng</td>
                  <td>
                    <label>
                      <input
                        name="quantity"
                        type="text"
                        min="1"
                        value={quantity}
                        style={{ width: "40%" }}
                        onChange={(e) => setQuantity(e.target.value)}
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
                        type="text"
                        className="form-control"
                        style={{ width: "30%" }}
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                      />
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
                          name="is_top"
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

export default AddProduct;
