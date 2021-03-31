export default function Description(props) {
  const { images } = props;
  return (
    <div className="blk-pview-content full clearfix">
      <div className="blk-pview-title">Mô tả sản phẩm</div>
      <div className="content full clearfix">
        {images?.map((img) => (
          <p key={img.id}>
            <img alt="" src={process.env.REACT_APP_URL_IMAGE + img.path} />
          </p>
        ))}
      </div>
    </div>
  );
}
