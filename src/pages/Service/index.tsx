// const servicesData = [
//   {
//     id: 1,
//     title: "Web Development",
//     description:
//       "We provide high quality web development services using the latest technologies.",
//   },
//   {
//     id: 2,
//     title: "App Development",
//     description:
//       "Our team specializes in developing innovative and user-friendly mobile applications.",
//   },
//   {
//     id: 3,
//     title: "Digital Marketing",
//     description:
//       "We offer comprehensive digital marketing strategies to help your business grow online.",
//   },
//   {
//     id: 4,
//     title: "Graphic Designing",
//     description:
//       "Our graphic designers create visually stunning graphics to represent your brand.",
//   },

//   {
//     id: 5,
//     title: "UI/UX Design",
//     description:
//       "Our UI/UX designers create visually stunning graphics to represent your brand.",
//   },
//   {
//     id: 6,
//     title: "Socail Marketing",
//     description:
//       "Our graphic designers create visually stunning graphics to represent your brand.",
//   },
// ];
import {
  FaCode,
  FaMobileAlt,
  FaChartLine,
  FaPaintBrush,
  FaObjectGroup,
  FaShareAlt,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    icon: <FaCode size={24} />,
    description:
      "We provide high quality web development services using the latest technologies.",
  },
  {
    id: 2,
    title: "App Development",
    icon: <FaMobileAlt size={24} />,
    description:
      "Our team specializes in developing innovative and user-friendly mobile applications.",
  },
  {
    id: 3,
    title: "Digital Marketing",
    icon: <FaChartLine size={24} />,
    description:
      "We offer comprehensive digital marketing strategies to help your business grow online.",
  },
  {
    id: 4,
    title: "Graphic Designing",
    icon: <FaPaintBrush size={24} />,
    description:
      "Our graphic designers create visually stunning graphics to represent your brand.",
  },
  {
    id: 5,
    title: "UI/UX Design",
    icon: <FaObjectGroup size={24} />,
    description:
      "Our UI/UX designers create visually stunning graphics to represent your brand.",
  },
  {
    id: 6,
    title: "Social Marketing",
    icon: <FaShareAlt size={24} />,
    description:
      "Our graphic designers create visually stunning graphics to represent your brand.",
  },
];

const Service = () => {
  return (
    <div id="#services" className="p-20 bg-[#DCDCDC]">
      <h1 className="text-[48px] font-bold text-center  ">
        Our <span className="text-primary-700">Services</span>
      </h1>

      <div className="flex  flex-wrap  items-center justify-center mt-14 rounded-xl">
        {servicesData.map((item) => (
          <div className="w-1/4  p-4 py-8 mr-14 mb-12 cursor-pointer h-fit hover:scale-110 transition duration-900 ease-in-out  rounded-xl bg-[white] shadow-shadow hover:bg-primary-100">
            <div className="bg-primary-500 w-fit mb-4  text-[white] p-3 rounded-full m-auto">
              {item.icon}
            </div>
            <div className="  text-center">
              <p className="text-xl mb-2 font-semibold">{item.title}</p>
              <p className="text-[#696969] text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
