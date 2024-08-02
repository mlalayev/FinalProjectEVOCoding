import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './Components/I18N/I18N.jsx';
import View from './Courses/view.jsx';
import Buy from './Courses/buyNow.jsx';
import Course from './Courses/course.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Events from './Components/Pages/Events/Events.jsx';
import MainPage from './Components/MainPage/MainPage.jsx';
import AboutUs from './Components/Pages/AboutUs/AboutUs.jsx';
import Instructor from './Components/Pages/Instructor/Instructor.jsx';
import SamplePage from './Components/Pages/SamplePage/SamplePage.jsx';
import Testimonial from './Components/Pages/Testimonial/Testimonial.jsx';
import NotFoundPage from './Components/Pages/NotFoundPage/NotFoundPage.jsx';
import PageLeftSideBar from './Components/Pages/PageLeftSideBar/PageLeftSideBar.jsx';
import PageRightSideBar from './Components/Pages/PageRightSideBar/PageRightSideBar.jsx';
import BecomeTeacher from './Components/BecomeaTeacher/BecomeTeacher.jsx';
import MyProfile from './Components/MyProfile/MyProfile.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';
import LiveClass from './Components/LiveClass/LiveClass.jsx';
import Layout from './Components/Layout/Layout.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import Loader from './Components/Loader/Loader.jsx'; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000));
      } finally {
        setLoading(false); 
      }
    };

    load();
  }, []);

  return (
    <>
      <Router>
        <I18nextProvider i18n={i18n}>
          {loading ? (
            <Loader /> 
          ) : (
            <Routes>
              <Route path="/" element={<Layout><MainPage /></Layout>} />
              <Route path='/aboutus' element={<Layout><AboutUs /></Layout>} />
              <Route path='/events' element={<Layout><Events /></Layout>} />
              <Route path='/instructor' element={<Layout><Instructor /></Layout>} />
              <Route path='/testimonial' element={<Layout><Testimonial /></Layout>} />
              <Route path='/samplepage' element={<Layout><SamplePage /></Layout>} />
              <Route path='/pageleftsidebar' element={<Layout><PageLeftSideBar /></Layout>} />
              <Route path='/pagerightsidebar' element={<Layout><PageRightSideBar /></Layout>} />
              <Route path='/404page' element={<Layout><NotFoundPage /></Layout>} />
              <Route path='/blog' element={<Layout><Blog /></Layout>} />
              <Route path='/contactus' element={<Layout><ContactUs /></Layout>} />
              <Route path='/all-courses' element={<Layout><Course /></Layout>} />
              <Route path='/view' element={<Layout><View /></Layout>} />
              <Route path='/view/buyNow' element={<Layout><Buy /></Layout>} />
              <Route path='/becomeateacher' element={<Layout><BecomeTeacher /></Layout>} />
              <Route path='/myprofile' element={<Layout><MyProfile /></Layout>} />
              <Route path='/liveclass' element={<Layout><LiveClass /></Layout>} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='*' element={<Layout><NotFoundPage /></Layout>} />
            </Routes>
          )}
        </I18nextProvider>
      </Router>
    </>
  );
}

export default App;
