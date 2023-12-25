import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { slideData } from "../../../data";


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
