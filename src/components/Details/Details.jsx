import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  const products = useLoaderData();
  return (
    <div className="rounded-b-[32px] p-1 pt-0 m-3 mt-0 border border-y-0 border-[#e5e5e5]">
      <div className="hero bg-[rgba(149,56,226,1)] rounded-b-[32px] py-5 relative pb-56">
        <div className="hero-content text-center w-11/12 mx-auto text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br /> the coolest accessories,
              we have it all!
            </p>
            <button className="btn text-[rgba(149,56,226,1)] rounded-[32px] py-4 px-7 normal-case">
              Shop Now
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto absolute top-[320px] p-5 bg-[rgba(255,255,255,0.3)] border border-white rounded-[32px]">
          <img className="rounded-[32px] h-[400px]" src="./banner.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Details;
