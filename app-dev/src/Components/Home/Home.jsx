import { Outlet } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Carousel />
      <Services />
      <section id="plan-section">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
