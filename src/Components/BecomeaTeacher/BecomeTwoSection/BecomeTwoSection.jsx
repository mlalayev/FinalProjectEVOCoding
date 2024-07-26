import Aos from "aos";
import "aos/dist/aos.css";
import '../../Common/Root.css';
import "./BecomeTwoSection.css";
import React, { useEffect } from "react";
import { FaBookmark } from "react-icons/fa";

const BecomeTwoSection = () => {
  useEffect(() => {
    Aos.init({
      offset: 120,
      duration: 2000,
      easing: "ease",
      once: true,
    });
  }, []);
  return (
    <>
    <div className="BecomeTwoSectionContainer">
      <div className="BecomeTwoSectionBody" data-aos="zoom-in">
      <div className="notification">
        <span>
          Please <a href="#">login</a> to send your request!
        </span>
       <div className="ribbon"><i><FaBookmark /></i></div>
      </div>
      </div>
      
      <div className="BecomeTwoSectionForm">
<div className="BecomeTwoSectionFormContainer">
  <div className="form-container login-container" data-aos="zoom-in-left">
    <form action="#">
      <h2>Login</h2>
      <label htmlFor="login-username">Username or email *</label>
      <input
        type="text"
        id="login-username"
        placeholder="Email or username"
        required
      />
      <label htmlFor="login-password">Password *</label>
      <input
        type="password"
        id="login-password"
        placeholder="Password"
        required
      />
      <div className="remember-me">
        <input type="checkbox" id="remember-me" required/>
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit">Login</button>
      <a href="#" className="forgot-password">
        Lost your password?
      </a>

    </form>
  </div>

  <div className="form-container register-container" data-aos="zoom-in-right">
    <form action="#">
      <h2>Register</h2>
      <label htmlFor="register-email">Email address *</label>
      <input type="email" id="register-email" placeholder="Email" required />
      <label htmlFor="register-username">Username *</label>
      <input
        type="text"
        id="register-username"
        placeholder="Username"
        required
      />
      <label htmlFor="register-password">Password *</label>
      <input
        type="password"
        id="register-password"
        placeholder="Password"
        required
      />
      <label htmlFor="register-confirm-password">Confirm Password *</label>
      <input
        type="password"
        id="register-confirm-password"
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  </div>
</div>

</div>
    </div>






</>
  );
};

export default BecomeTwoSection;
