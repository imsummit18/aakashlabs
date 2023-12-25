import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterText from "../../../components/FooterText";

const footerData1 = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/",
  },
  {
    id: 3,
    title: "News",
    path: "/",
  },
  {
    id: 4,
    title: "Careers",
    path: "/",
  },
  {
    id: 5,
    title: "Blogs",
    path: "/",
  },
  {
    id: 6,
    title: "Contact",
    path: "/",
  },
];
const footerData2 = [
  {
    id: 1,
    title: "Link ",
    path: "/",
  },
  {
    id: 2,
    title: "Link",
    path: "/",
  },
  {
    id: 3,
    title: "Link",
    path: "/",
  },
  {
    id: 4,
    title: "Link",
    path: "/",
  },
  {
    id: 5,
    title: "Link",
    path: "/",
  },
  {
    id: 6,
    title: "Link",
    path: "/",
  },
];

const Footer = () => {
  return (
    <div className=" bg-[black] text-[white] ">
      <div className=" w-full space-x-20  max-w-[1440px] m-auto p-20  ">
        <div className="flex space-x-10 justify-between ">
          <div className="flex   w-[30%] flex-col space-y-2">
            <h1 className="text-4xl">Aakash Labs</h1>
            <p className="text-sm pt-2">
            Allow us to be your trusted guide as we jointly explore the unlimited potential of tomorrow 's inventions.
            </p>
            <p className="text-lg pt-4">info@aakashlabs.com</p>
            <p>01-4530196</p>
            <div className="flex space-x-4 pt-3 cursor-pointer">
              <FaFacebook size={22} />
              <FaInstagram size={22} />
              <FaLinkedin size={22} />
            </div>
          </div>
          <div className="flex space-x-20 w-[50%]">
            <FooterText data={footerData1} />
            <FooterText data={footerData2} />
            <FooterText data={footerData2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
