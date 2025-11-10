import { IoCloseCircleOutline } from "react-icons/io5";

const WishList = () => {
  return (
    <div className="bg-white flex gap-6 p-5 rounded-2xl">
      {/* <img src="" alt="" /> */}
      <div className="flex flex-col gap-5 text-[rgba(9,8,15)]">
        <h4 className="text-2xl font-semibold">name</h4>
        <p className="text-lg opacity-60">Description</p>
        <p className="text-xl font-semibold opacity-80">Price:$</p>
        <button className="btn bg-[rgba(149,56,226,1)] text-white rounded-2xl">
          Add ot Cart
        </button>
      </div>

      <div className="text-red-400 text-2xl absolute right-10 top-5">
        <IoCloseCircleOutline />
      </div>
    </div>
  );
};

export default WishList;
