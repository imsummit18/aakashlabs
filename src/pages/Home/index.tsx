import About from "../About";
import Service from "../Service";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Slider from "./components/slider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <div className="w-full max-w-[1440px] m-auto">
        <About />
        <Service />
      </div>
      <Footer />
    </>
  );
};

export default Home;
