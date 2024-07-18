import React from 'react';
import View from './Courses/view.jsx';
import Buy from './Courses/buyNow.jsx';
import Course from './Courses/course.jsx';
import i18n from './Components/I18N/I18N.jsx';
import Blog from './Components/Blog/Blog.jsx';
import { I18nextProvider } from 'react-i18next';
import Events from './Components/Pages/Events/Events.jsx';
import MainPage from './Components/MainPage/MainPage.jsx';
import Footer from './Components/Common/Footer/Footer.jsx';
import Header from './Components/Common/Header/Header.jsx';
import AboutUs from './Components/Pages/AboutUs/AboutUs.jsx';
import Instructor from './Components/Pages/Instructor/Instructor.jsx';
import SamplePage from './Components/Pages/SamplePage/SamplePage.jsx';
import Testimonial from './Components/Pages/Testimonial/Testimonial.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFoundPage from './Components/Pages/NotFoundPage/NotFoundPage.jsx';
import PageLeftSideBar from './Components/Pages/PageLeftSideBar/PageLeftSideBar.jsx';
import PageRightSideBar from './Components/Pages/PageRightSideBar/PageRightSideBar.jsx';
import BecomeTeacher from './Components/BecomeaTeacher/BecomeTeacher.jsx';
import MyProfile from './Components/MyProfile/MyProfile.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';
 

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
              <Footer/>
            </>
          } />
          <Route path='/events' element={
            <>
              <Header />
              <Events/>
              <Footer/>
            </>
          } />
          <Route path='/instructor' element={
            <>
              <Header />
              <Instructor/>
              <Footer/>
            </>
          } />
          <Route path='/testimonial' element={
            <>
              <Header />
              <Testimonial/>
              <Footer/>
            </>
          } />
          <Route path='/samplepage' element={
            <>
              <Header />
              <SamplePage/>
              <Footer/>
            </>
          } />
          <Route path='/pageleftsidebar' element={
            <>
              <Header />
              <PageLeftSideBar/>
              <Footer/>
            </>
          } />
          <Route path='/pagerightsidebar' element={
            <>
              <Header />
              <PageRightSideBar/>
              <Footer/>
            </>
          } />
          <Route path='/404page' element={
            <>
              <Header />
              <NotFoundPage/>
              <Footer/>
            </>
          } />
          <Route path='/blog' element={
            <>
            <Header/>
            <Blog/>
            <Footer/>
            </>
          }/>
          <Route path='/contactus' element={
            <>
            <Header/>
           <ContactUs/>
            <Footer/>
            </>
          }/>
           <Route path='/all-courses' element={
            <>
              <Header />
              <Course/>
              <Footer/>
            </>
          } />

           <Route path='/view' element={
            <>
              <Header/>
              <View/>
              <Footer/>
            </>
          } />

            <Route path='/view/buyNow' element={
            <>
              <Header/>
              <Buy/>
              <Footer/>
            </>
          } />
            <Route path='/becomeateacher' element={
            <>
              <Header/>
              <BecomeTeacher/>
              <Footer/>
            </>
          } />
            <Route path='/myprofile' element={
            <>
              <Header/>
              <MyProfile/>
              <Footer/>
            </>
          } />
        </Routes>
      </I18nextProvider>
    </Router>
  );
}

export default App;
