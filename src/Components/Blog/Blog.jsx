import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoTimeOutline } from 'react-icons/io5';
import { FaAngleRight } from 'react-icons/fa';
import blogsData from '../../../Blog.json';
import './Blog.css'; // Replace with your actual CSS file

function Blog() {
  const { t, i18n } = useTranslation();

  return (
    <section className="sectionblog">
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
      <div className="cardholderblog">
        {blogsData[i18n.language].map((blog, index) => (
          <div className="blogcard" key={index}>
            <img src={blog.image} alt="" className="blogimage" />
            <div className="blogtextholder">
              <div className="blogcardinfotext">
                <p><BsFillPersonFill /> {blog.author}</p>
                <p><IoTimeOutline /> {blog.date}</p>
              </div>
              <div className="blogcardinfotexttwo">
                <h1>{blog.title}</h1>
                <p>{blog.description}</p>
                <button className="blogcardbtn">{blog.button} <FaAngleRight /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
