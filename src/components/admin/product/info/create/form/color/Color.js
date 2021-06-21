import React, { Fragment } from "react";
import "./color.css";

export default function Color(props) {
  const { colors, selectColors, setSelectColors } = props;
  const handleColorClick = (el) => {
    const exist = selectColors.find((x) => x.id === el.id);
    if (!exist) {
      setSelectColors([...selectColors, { ...el, quantity: 0 }]);
    } else {
      setSelectColors(selectColors.filter((x) => x.id !== el.id));
    }
  };

  const renderColors = (colors) => {
    return colors?.map((color) => {
      return (
        <tr key={color.id}>
          <td style={{ width: "40%" }}>
            <label>{color.name}</label>
          </td>
          <td>
            <label>
              <input
                name="quantity"
                type="number"
                value={selectColors.find((el) => el.id === color.id).quantity}
                className="form-control"
                onChange={(e) => handleQuantityChange(e, color.id)}
              />
            </label>
          </td>
        </tr>
      );
    });
  };

  function handleQuantityChange(e, id) {
    const _selectColors = selectColors.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          quantity: e.target.value,
        };
      }
      return el;
    });

    setSelectColors(_selectColors);
  }

  return (
    <Fragment>
      <tr>
        <td style={{ fontWeight: "bold" }}>Màu sắc</td>
        <td style={{ display: "flex" }}>
          <div className="product-color">
            {colors.map((el) => (
              <div
                className={`color ${
                  selectColors?.find((x) => x.id === el.id) ? "active" : ""
                }`}
                key={el.id}
                onClick={() => handleColorClick(el)}
              >
                <span style={{ background: el.code }} />
              </div>
            ))}
          </div>
        </td>
      </tr>
      <tr>
        <td style={{ fontWeight: "bold" }}>Phân loại hàng</td>
        <td>
          <table style={{ width: "40%" }} className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Màu</th>
                <th scope="col">Số lượng</th>
              </tr>
            </thead>
            <tbody>{renderColors(selectColors)}</tbody>
          </table>
        </td>
      </tr>
    </Fragment>
  );
}
