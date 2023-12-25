import { useLocation } from "react-router-dom";
import Navbar from "../../Home/components/navbar";
import Footer from "../../Home/components/footer";

const SingleNews = () => {
  const location = useLocation();
  const { title, description, content, source, publishAt, url, image } =
    location.state;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="mt-24 p-10 w-full max-w-5xl mx-auto bg-white rounded shadow-lg">
        <h1 className="text-center font-bold text-4xl mb-8">{title}</h1>
        <img className="w-full object-cover mb-8 rounded" src={image} alt="" />
        <p className="text-lg mb-4">{description}</p>
        <p className="text-lg mb-4">{content}</p>
        <a href={url} className="text-primary-500 underline mb-4 block">
          {url}
        </a>
        <p className="mb-4 text-lg">{source?.name}</p>
        <a href={source.url} className="text-primary-500 underline mb-4 block">
          {source.url}
        </a>
        <p className="font-bold text-lg italic mt-2">
          Published At: {new Date(publishAt).toLocaleDateString()}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SingleNews;
