import './Blog.css';
import React from 'react';
import '../Common/Root.css';
import blogsData from '../../../Blog.json';
import { GrLinkNext } from "react-icons/gr";
import { FaAngleRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { IoTimeOutline } from 'react-icons/io5';
import { BsFillPersonFill } from 'react-icons/bs';

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
                <a className='blogcardbtn' href={blog.path}>{blog.button} <FaAngleRight className='blogcardicon' /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div 
      style={{
        margin:"0 auto",
        maxWidth:"1050px",
      }}
      className="course_pages">
        <button style={{ backgroundColor: '#007bff', color: '#FFFF' }}>1</button>
        <button>2</button>
        <button style={{ marginBottom: '20px' }}><GrLinkNext /></button>
      </div>
    </section>
  );
}

export default Blog;
