import React from "react";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    image:
      "https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg",
    description:
      "We provide high quality web development services using the latest technologies.",
  },
  {
    id: 2,
    title: "App Development",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPVTGaNHcdubtsjsoPmqBFUYgAA_qpljMtpNzOj4siMw&s",
    description:
      "Our team specializes in developing innovative and user-friendly mobile applications.",
  },
  {
    id: 3,
    title: "Digital Marketing",
    image:
      "https://thumbs.dreamstime.com/b/digital-marketing-business-concept-business-concept-businessman-click-digital-marketing-button-virtual-screen-text-typography-125648024.jpg",
    description:
      "We offer comprehensive digital marketing strategies to help your business grow online.",
  },
  {
    id: 4,
    title: "Graphic Designing",
    image:
      "https://media.licdn.com/dms/image/D4D12AQHYC_ZczxV2zw/article-cover_image-shrink_720_1280/0/1695524296879?e=2147483647&v=beta&t=VJkWc3l89UdKGn2pEkDo4IWINkztx2V3u0tdzPL8ILA",
    description:
      "Our graphic designers create visually stunning graphics to represent your brand.",
  },
];
const Service = () => {
  return (
    <div id="#services" className="p-20 bg-[#eeeeee]">
      <h1 className="text-[48px] font-bold text-center text-primary-700">
        Our Services
      </h1>

      <div className="flex  space-x-14 mt-14 rounded">
        {servicesData.map((item) => (
          <div className="w-1/4  cursor-pointer h-fit hover:scale-110 transition duration-900 ease-in-out  rounded bg-[white] shadow-shadow">
            <img
              className="w-full h-[200px] rounded  rounded-b-none"
              src={item.image}
              alt={item.title}
            />
            <div className="mt-2 p-4 ">
              <p className="text-xl mb-2 font-semibold">{item.title}</p>
              <p className="text-[#696969]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
