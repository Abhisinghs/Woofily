import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer_section">
        <ul>
          <li>
            <h4>Support</h4>
          </li>
          <li>
            <Link to="/">Help Center</Link>
          </li>
          <li>
            <Link to="/">Service</Link>
          </li>
          <li>
            <Link to="/">Blogs</Link>
          </li>
          <li>
            <Link to="/cancellation_policies ">
              Cancellation & Refund Policy
            </Link>
          </li>
          <li>
            <Link to="/privacy_policies">Privacy & Policy</Link>
          </li>
          <li>
            <Link to="/terms_and_condition">Terms & Conditions</Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Footer;
