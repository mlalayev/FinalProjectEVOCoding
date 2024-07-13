import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage.jsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './Components/I18N/I18N.jsx';
import Header from './Components/Common/Header/Header.jsx';
import Events from './Components/Pages/Events/Events.jsx';
import Instructor from './Components/Pages/Instructor/Instructor.jsx';
import Testimonial from './Components/Pages/Testimonial/Testimonial.jsx';
import SamplePage from './Components/Pages/SamplePage/SamplePage.jsx';
import PageLeftSideBar from './Components/Pages/PageLeftSideBar/PageLeftSideBar.jsx';
import PageRightSideBar from './Components/Pages/PageRightSideBar/PageRightSideBar.jsx';
import NotFoundPage from './Components/Pages/NotFoundPage/NotFoundPage.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Footer from './Components/Common/Footer/Footer.jsx'
import Course from './Courses/course.jsx'
import View from './Courses/view.jsx';

import Buy from './Courses/buyNow.jsx'
import AboutUs from './Components/Pages/AboutUs/AboutUs.jsx';


 

function App() {
  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <Routes>
          <Route path="/" element={<>
            <Header />
            <MainPage />
            <Footer />
          </>} />
           <Route path='/aboutus' element={
            <>
              <Header />
              <AboutUs/>
            </>
          } />
          <Route path='/events' element={
            <>
              <Header />
              <Events/>
            </>
          } />
          <Route path='/instructor' element={
            <>
              <Header />
              <Instructor/>
            </>
          } />
          <Route path='/testimonial' element={
            <>
              <Header />
              <Testimonial/>
            </>
          } />
          <Route path='/samplepage' element={
            <>
              <Header />
              <SamplePage/>
            </>
          } />
          <Route path='/pageleftsidebar' element={
            <>
              <Header />
              <PageLeftSideBar/>
            </>
          } />
          <Route path='/pagerightsidebar' element={
            <>
              <Header />
              <PageRightSideBar/>
            </>
          } />
          <Route path='/404page' element={
            <>
              <Header />
              <NotFoundPage/>
            </>
          } />
          <Route path='/blog' element={
            <>
            <Header/>
            <Blog/>
            </>
          }/>
           <Route path='/all-courses' element={
            <>
              <Header />
              <Course/>
            </>
          } />

           <Route path='/view' element={
            <>
              <Header/>
              <View/>
            </>
          } />

            <Route path='/view/buyNow' element={
            <>
              <Header/>
              <Buy/>
            </>
          } />
        </Routes>
      </I18nextProvider>
    </Router>
  );
}

export default App;
