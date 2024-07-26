import './ContactUs.css';
import React from 'react';
import '../Common/Root.css';
import ContactUsOneSection from './ContactUsOneSection/ContactUsOneSection';
import ContactUsTwoSection from './ContactUsTwoSection/ContactUsTwoSection';

const ContactUs = () => {
  return (
    <>
   <ContactUsOneSection/>
   <ContactUsTwoSection/>
   </>
  )
}

export default ContactUs;