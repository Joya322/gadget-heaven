import { TabTitle } from "../../utility/general functions";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart, FaStar } from "react-icons/fa";
import CartList from "../CartList/CartList";
import WishList from "../WishList/WishList";

const Dashboard = () => {
  TabTitle("Dashboard");
  return (
    <div className="mb-10">
      <div className="hero bg-[rgba(149,56,226,1)] relative p-5 mb-10">
        <div className="hero-content text-center w-11/12 mx-auto text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold">Dashboard</h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br /> the coolest accessories,
              we have it all!
            </p>
            <div className="flex justify-center items-center gap-6">
              <button className="btn border border-white rounded-2xl text-lg font-extrabold py-3 px-5 bg-[rgba(149,56,226,1)] text-white">
                Cart
              </button>

              <button className="btn border border-white rounded-2xl text-lg font-extrabold py-3 px-5 bg-[rgba(149,56,226,1)] text-white">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-11/12 mx-auto px-10">
        <div className="flex justify-between items-center mb-8">
          <h4 className="text-2xl font-bold">Cart</h4>
          <div className="flex justify-center items-center gap-5">
            <p className="text-2xl font-bold">Total cost: 99</p>
            <button className="text-lg font-medium  bg-white text-[rgba(149,56,226,1)] py-3 px-4 rounded-2xl border border-[rgba(149,56,226,1)]">
              Sort by Price{" "}
            </button>
            <button className="text-lg font-medium text-white bg-[rgba(149,56,226,1)] py-3 px-4 rounded-2xl border border-white">
              Purchase
            </button>
          </div>
        </div>

        {/* selected items */}
        <CartList />
        {/* <WishList/> */}
      </div>
    </div>
  );
};

export default Dashboard;
