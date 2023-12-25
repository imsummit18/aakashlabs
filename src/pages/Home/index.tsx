import Service from "../Service";
import AboutHome from "./components/about";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Slider from "./components/slider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <div className="w-full max-w-[1440px] m-auto">
        <AboutHome />
      </div>
        <Service />
      <Footer />
    </>
  );
};

export default Home;
