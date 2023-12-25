import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Error from "./components/Errorpage";
import News from "./pages/News";
import SingleNews from "./pages/News/components/singleNews";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<SingleNews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
