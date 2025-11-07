import { NavLink } from "react-router-dom";

const Gadget = ({ product }) => {
  // console.log(product);
  const { product_title, product_image, price, product_id } = product;

  return (
    <div className="card card-compact bg-base-100 shadow-xl border p-5 text-[rgba(9,8,15,1)]">
      <figure className="h-[180px] border rounded-xl">
        <img className="w-[200px] h-[170px]" src={product_image} alt="gadget" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold">{product_title}</h2>
        <p className="opacity-60 text-xl">Price: {price}k</p>
        <div className="card-actions justify-end">
          <NavLink
            to={`/product/${product_id}`}
            className="btn text-[rgba(149,56,226,1)] font-semibold text-lg rounded-[32px] border border-[rgba(149,56,226,.7)] bg-[rgba(149,56,226,0.1)] normal-case"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
