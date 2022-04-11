import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import RentPage from "./pages/RentPage";
import SalePage from "./pages/SalePage";

import "./App.css";
import About from "./pages/About";
import Search from "./pages/Search";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/purpose=for-rent" element={<RentPage />} />
          <Route path="/purpose=for-sale" element={<SalePage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
