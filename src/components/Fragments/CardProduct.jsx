/* eslint-disable react/prop-types */
const CardProduct = (props) => {
  const { image, name, desc, price } = props;
  return (
    <div className="card" style={{ width: "18rem", height: "400px" }}>
      <img
        src={image}
        className="card-img-top p-3"
        alt="Deskripsi Alternatif Gambar"
        style={{ height: "200px" }}
      />
      <div className="card-body d-flex flex-column justify-content-between ">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{desc}</p>
        <div className="d-flex gap-3 align-items-center justify-content-between ">
          <span className="fw-bold">{price}</span>
          <a href="#" className="btn btn-warning">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
