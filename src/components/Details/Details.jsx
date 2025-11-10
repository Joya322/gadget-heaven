import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import { UserContext } from "../ContextApi/ContextApi";

const Details = () => {
  const { handleCartList, handleWishList } = useContext(UserContext);

  const params = useParams();
  const products = useLoaderData();

  // console.log(products[0].product_id);
  // filter selected product
  const product = products.find((p) => p.product_id === params.product_id);

  const {
    product_title,
    product_image,
    price,
    availability,
    Specification,
    rating,
  } = product;

  return (
    <div className="mb-[500px]">
      <div className="hero bg-[rgba(149,56,226,1)] relative pb-56">
        <div className="hero-content text-center w-11/12 mx-auto text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold">Product Details</h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br /> the coolest accessories,
              we have it all!
            </p>
          </div>
        </div>

        <div className="w-9/12 mx-auto absolute top-[200px] p-5 bg-[rgba(255,255,255)] border border-white rounded-[32px] flex gap-8 shadow-sm">
          <img
            className="rounded-2xl border w-[300px]"
            src={product_image}
            alt=""
          />
          <div className="text-[rgba(9,8,15,1)] flex flex-col gap-5">
            <h3 className="text-3xl font-semibold">{product_title}</h3>
            <p className="text-xl font-semibold opacity-80">Price: $ {price}</p>
            <p className="text-sm font-medium text-[rgba(48,156,8,1)] py-2 px-4 bg-[rgba(48,156,8,0.1)] rounded-2xl w-fit">
              {availability ? "In Stock" : "Not Available"}
            </p>
            <p className="text-lg opacity-60">
              Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
              display.
            </p>
            <h4 className="text-lg font-bold">Specification:</h4>
            <ul className="list-decimal list-inside opacity-60 text-lg ">
              {Specification.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            <p className="text-lg font-bold flex items-center gap-1">
              Rating <FaStar className="text-yellow-500" />
            </p>
            <div>
              <Rating
                placeholderRating={rating}
                emptySymbol={<FaStar className="icon text-red-100" />}
                placeholderSymbol={<FaStar className="icon text-yellow-500" />}
                fullSymbol={<FaStar className="icon text-red-500" />}
              />
              <span> {rating}</span>
            </div>
            <div className="flex gap-5 items-center">
              <button
                onClick={() => handleCartList(product)}
                className="bg-[rgba(149,56,226,1)] text-white flex gap-2 items-center px-5 py-3 rounded-2xl"
              >
                Add To Card <AiOutlineShoppingCart />
              </button>

              {/* heart */}

              <div
                onClick={() => handleWishList(product)}
                className="border p-3 rounded-full shadow-sm  cursor-pointer"
              >
                <FaRegHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
