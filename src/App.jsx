import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  return (
      <div className="flex flex-col items-center justify-center w-full px-10">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<p>404</p>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
