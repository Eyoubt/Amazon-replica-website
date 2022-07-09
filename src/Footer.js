import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import usa from "./images/usa.png";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <div className="footer">
      <h5 onClick={scrollToTop}>Back to top</h5>
      <div className="footer_lists">
        <ul>
          <h3>Get to Know Us</h3>
          <a href="">
            <li>Careers</li>
          </a>
          <a href="">
            <li>Amazon Newsletter</li>
          </a>
          <a href="">
            <li>About Amazon</li>
          </a>
          <a href="">
            <li>Sustainablity</li>
          </a>
          <a href="">
            <li>Press Center</li>
          </a>
          <a href="">
            <li>Invester Relations</li>
          </a>
          <a href="">
            <li>Amazon Devices</li>
          </a>
          <a href="">
            <li>Amazon Science</li>
          </a>
        </ul>
        <ul>
          <h3>Make Money with Us</h3>
          <a href="">
            <li>Sell products on Amazon</li>
          </a>
          <a href="">
            <li>Sell apps on Amazon</li>
          </a>
          <a href="">
            <li>Supply on Amazon</li>
          </a>
          <a href="">
            <li>Become an Affiliate</li>
          </a>
          <a href="">
            <li>Become a Delivery Driver</li>
          </a>
          <a href="">
            <li>Start a package delivery business</li>
          </a>
          <a href="">
            <li>Advertise your products</li>
          </a>
          <a href="">
            <li>Self-Publish with Us</li>
          </a>
        </ul>
        <ul>
          <h3>Amazon Payment Products</h3>
          <a href="">
            <li>Amazon Rewards Visa Signature Cards</li>
          </a>
          <a href="">
            <li>Amazon Store Card</li>
          </a>
          <a href="">
            <li>Amazon Secured Card</li>
          </a>
          <a href="">
            <li>Amazon Business Card</li>
          </a>
          <a href="">
            <li>Shop with Points</li>
          </a>
          <a href="">
            <li>Credit Card Marketplace</li>
          </a>
          <a href="">
            <li>Reload Your Balance</li>
          </a>
          <a href="">
            <li>Amazon Currency Converter</li>
          </a>
        </ul>
        <ul>
          <h3>Let Us Help You</h3>
          <a href="">
            <li>Amazon and COVID-19</li>
          </a>
          <a href="">
            <li>Your Account</li>
          </a>
          <a href="">
            <li>Your Orders</li>
          </a>
          <a href="">
            <li>Shipping Rates & Policies</li>
          </a>
          <a href="">
            <li>Amazon Prime</li>
          </a>
          <a href="">
            <li>Returns & Replacements</li>
          </a>
          <a href="">
            <li>Manage Your Content and Devices</li>
          </a>
          <a href="">
            <li>Amazon Assistant</li>
          </a>
          <a href="">
            <li>Help</li>
          </a>
        </ul>
      </div>
      <div className="logos">
        <a href="" className="amazon_logo">
          <img
            className="amazon_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </a>
        <a className="lang" href="">
          <div className="globe">🌐</div>
          <span>English</span>
        </a>
        <a className="ctry" href="">
          <span className="usa_">
            <img className="usa" src={usa} alt="yo" />
          </span>
          <span>United States</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
