import React from 'react'
import './ContactUsTwoSection.css'

const ContactUsTwoSection = () => {
  return (
   <div className="ContactUsTwoSectionContainer">
    <h1>Feel Free to Contact with Us</h1>
    <form action="#">
    <div className="ContactUsTwoSectionTopInputs">
        <input type="text" placeholder='Name' required/>
        <input type="email" placeholder='Email' required/>
    </div>
    <div className="ContactUsTwoSectionBottomInputs">
    <input type="text" placeholder='Phone' required/>
    <input type="text" placeholder='Subject' required/>
    </div>
    <textarea name="textarea"></textarea>
    <button type='submit'>Submit</button>
    </form>
   </div>

  
  )
}

export default ContactUsTwoSection