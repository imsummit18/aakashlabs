import Button from "../../components/Button";

const About = () => {
  return (
    <div id="#about" className=" p-20 flex  items-center justify-center  ">
      <div className="w-1/2 mr-[60px]">
        <p className=" border-b-[2px] w-fit  mt-10  pb-1  border-[black]   mb-8 text-xl text-[black]  font-bold uppercase letter-spacing-[2px]">
          About Us
        </p>
        <p className=" font-semibold pb-5 text-primary-600 text-[40px]">
          Welcome to Aakash Labs
        </p>
        <p className=" text-lg mb-14">
          We are here to redefine the digital experience with unparalleled
          expertise and a strategic edge. Our unwavering commitment to
          excellence allows us to seamlessly address the ever-evolving and
          intricate needs of our clients in the dynamic world of digital
          innovation.
        </p>
        <Button text={"View More"} variant="primary" className="" />
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

export default About;
