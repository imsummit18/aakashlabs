import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const slideData = [
  {
    id: 1,
    text: "Slider1",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 2,
    text: "Slider2",
    image:
      "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    text: "Slider2",
    image:
      "https://plus.unsplash.com/premium_photo-1672243970579-8cd2d0e9e0b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    text: "Slider4",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    text: "Slider5",
    image:
      "https://images.unsplash.com/photo-1624280433509-b01afeaf68e5?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide = () => {
    const newIndex = slideIndex >= slideData.length - 1 ? 0 : slideIndex + 1;
    setSlideIndex(newIndex);
  };
  const prevSlide = () => {
    const newIndex = slideIndex <= 0 ? slideData.length - 1 : slideIndex - 1;
    setSlideIndex(newIndex);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [slideIndex]);
  return (
    <div className="  mt-[12vh]">
      <div className="  h-[88vh] w-full  overflow-hidden relative">
        {slideData.map((el, index) => (
          <div
            className={`w-full transition-opacity duration-1000 absolute w-full opacity-0 ${
              slideIndex === index ? "opacity-100" : ""
            }`}
          >
            <img src={el.image} className="w-full" alt="Images" />
          </div>
        ))}
      </div>
      <div className="flex realtive">
        <button
          className=" bg-primary-500 text-[white] p-2 rounded hover:bg-primary-700 duration-800 ease-in-out absolute top-1/2 left-5"
          onClick={prevSlide}
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          className="  bg-primary-500 text-[white] p-2 rounded hover:bg-primary-700 duration-800 ease-in-out absolute top-1/2 right-5"
          onClick={nextSlide}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
