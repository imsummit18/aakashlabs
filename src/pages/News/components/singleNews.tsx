import { useLocation } from "react-router-dom";
import Navbar from "../../Home/components/navbar";

const SingleNews = () => {
  const location = useLocation();
  const { title, description, content, source, publishAt, url, image } =
    location.state;
  console.log("location", location.state);
  return (
    <div>
      <Navbar />
      <div className="mt-[12vh] p-20 w-full max-w-[1440px] m-auto  pt-10 ">
        <p className="text-center font-bold text-4xl leading-[2]">{title}</p>
        <img className="my-8  w-screen h-[500px]" src={image} alt="" />
        <p className="text-base my-2 font-medium">{description}</p>
        <p className="text-base my-2 font-medium">{content}</p>
        <a
          href={url}
          className="text-base my-2 text-primary-500 cursor-pointer"
        >
          {url}
        </a>
        <p className=" text-base my-2 ">{source?.name}</p>
        <a
          href={source.url}
          className="text-base my-2 text-primary-500 cursor-pointer"
        >
          {source.url}
        </a>
        <p className="font-bold text-base italic mt-2">
          {new Date(publishAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default SingleNews;
