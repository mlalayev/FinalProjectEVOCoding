import './ContactUs.css';
import React from 'react';
import '../Common/Root.css';
import ContactUsOneSection from './ContactUsOneSection/ContactUsOneSection';
import ContactUsTwoSection from './ContactUsTwoSection/ContactUsTwoSection';

const ContactUs = () => {
  return (
    <div className="contuctusdiv">
      <ContactUsOneSection />
      <ContactUsTwoSection />
    </div>
  )
}

export default ContactUs;