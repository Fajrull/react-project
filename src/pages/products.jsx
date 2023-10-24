/* eslint-disable react/jsx-key */
import Button from "../components/Elements/Buttons/Index";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu",
    price: "Rp 1.000.000",
    image: "../public/assets/images/shoes.jpg",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    name: "Sandal",
    price: "Rp 500.000",
    image: "../public/assets/images/sandal.jpg",
    description: "Some quick example text to build on the card title .",
  },
];

const email = localStorage.getItem("email");
const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };
  return (
    <>
      <div className="d-flex justify-content-end align-items-center bg-dark  text-white px-5 py-2">
        {email}
        <button className="btn btn-info mx-3" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="d-flex gap-5 justify-content-center align-items-center flex-wrap m-5">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            image={product.image}
            name={product.name}
            desc={product.description}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
