import React from 'react';
import './NotFoundPage.css'
import ErrorImg from '../../../assets/Pages/404page/errorpage.png'
import { GoArrowRight } from "react-icons/go";
import { IoArrowUndo } from "react-icons/io5";

const NotFoundPage = () => {
  return (
    <div className="ErrorPageContainer">
      <div className="ErrorImage">
        <img src={ErrorImg} alt="ErrorImg" />
      </div>
      <h3>We are Sorry, Page not found</h3>
      <form action="#" className='ErrorPageSearchForm'>
        <input type="text" placeholder='Search...' className='ErrorPageSearchInput' required />
        <button type='submit' className='ErrorPageSearchBtn'><i><GoArrowRight /></i></button>
        </form>
      <div className="ErrorPageBackHome">
      <i><IoArrowUndo /></i>
      <a href="/">Back to Homepage</a>
      </div>
    </div>
  )
}

export default NotFoundPage;