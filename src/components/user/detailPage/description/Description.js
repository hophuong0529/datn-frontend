export default function Description(props) {
  const { images, description, producer } = props;
  return (
    <div className="blk-pview-content full clearfix">
      <div className="blk-pview-title">Mô tả sản phẩm</div>
      <div className="content full clearfix">
        <p className="descrip">
          - <b>Xưởng sản xuất: </b>
          {producer?.name}
        </p>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="descrip"
        ></p>
        {images?.map((img) => (
          <p key={img.id}>
            <img alt="" src={process.env.REACT_APP_URL_IMAGE + img.path} />
          </p>
        ))}
      </div>
    </div>
  );
}
