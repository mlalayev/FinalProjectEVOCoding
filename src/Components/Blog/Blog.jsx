import React from "react";
import "./Blog.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import blogData from "../../../Blog.json";
import { useTranslation } from "react-i18next";


function Blog() {
    const {t,i18n}=useTranslation()
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

      <div className="toppart">
        {blogData[i18n.language].map((post) => (
          <div className="leftone"
          style={{
            marginBottom:"10px"
          }}
          key={post.id}>
            <div className="box1img">
              <img src={post.image} alt="box1img" />
            </div>
            <div className="pelements">
              <BsFillPersonFill size={20} />
              <p>{post.author}</p>
              <img src={post.authorImg} alt="iconsaat" />
              <p>{post.date}</p>
            </div>
            <div className="textone">
              <div className="boldtext">
                <h1 className="h1">{post.title}</h1>
              </div>
              <div className="ptext">
                <p>{post.content}</p>
              </div>
              <div className="readmoretext">
                <a href={post.link}>Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render other sections similarly using blogData */}

    </section>
  );
}

export default Blog;
