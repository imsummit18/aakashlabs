import Button from "../../../components/Button";

const Main = () => {
  return (
    <div
      id="#about"
      className=" p-20 pt-[100px] flex  items-center justify-center  "
    >
      <div className="w-1/2 mr-[60px]">
        <p className=" border-b-[2px] w-fit  mt-10  pb-1  border-[black]   mb-8 text-xl text-[black]  font-bold uppercase letter-spacing-[2px]">
          Our Story
        </p>
        <p className=" font-semibold pb-5 text-primary-600 text-[40px]">
          Establish a Robust Commercial Identity
        </p>
        <p className=" text-lg mb-14">
          Combining our unrivaled specialism in specific digital activities with
          a strategic & differentiated approach, Aakash Labs is able to meet the
          increasingly complex needs of clients in an effortless yet productive
          manner in the constantly evolving digital landscape.
        </p>
        {/* <Button text={"View Mor More"} variant="primary" className="" /> */}
      </div>
      <div className="w-[40%] mt-10">
        <img
          className="rounded-full h-[400px]"
          src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default Main;
