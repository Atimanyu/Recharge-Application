import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="Vi-logo.svg" alt="Logo" className="logo" />
          <p>Vodafone Idea Limited</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            magni officiis natus qui maiores officia quisquam repellendus saepe
            labore ullam corrupti cumque, cum eum in nulla voluptatem fugit.
            Voluptate, voluptatibus?
          </p>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>About Vi</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Vodafone Idea Corp</a>
              </li>
              <li>
                <a href="#">Vodafone Idea Foundation</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>More from Vi</h4>
            <ul>
              <li>
                <a href="#">Postpaid Connection</a>
              </li>
              <li>
                <Link to="/adminlogin">Admin</Link>
              </li>
              <li>
                <a href="#">Port Number to Vi / MNP</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Explore on Vi app</h4>
            <ul>
              <li>
                <a href="#">Vi Games</a>
              </li>
              <li>
                <a href="#">Vi Movies & TV</a>
              </li>
              <li>
                <a href="#">Vi Jobs</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Regulatory & Quick Access</h4>
            <ul>
              <li>
                <a href="#">Telemarketing Registration</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
