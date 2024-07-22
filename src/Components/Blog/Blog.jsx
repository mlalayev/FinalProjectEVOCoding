import React from "react";
import "./Blog.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import blogData from "../../../Blog.json";
import { useTranslation } from "react-i18next";


function Blog() {
  const { t, i18n } = useTranslation()
  return (
    <section className="Blog">
      <div className="apportpart">
        <div className="PagesBackground">
          <div className="BackgorundText">
            <div className="UpText">
              <h2>Blog Grid</h2>
            </div>
            <div className="DownText">
              <a href="/">Home</a>
              <FaAngleRight />
              <span>Blog Grid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
