import React from 'react'
import './ContactUsTwoSection.css'

const ContactUsTwoSection = () => {
  return (
   <div className="ContactUsTwoSectionContainer">
    <h1>Feel Free to Contact with Us</h1>
    <form action="#">
    <div className="ContactUsTwoSectionTopInputs">
        <input id='inputs' type="text" placeholder='Name' required/>
        <input id='inputs' type="email" placeholder='Email' required/>
    </div>
    <div className="ContactUsTwoSectionBottomInputs">
    <input id='inputs' type="text" placeholder='Phone' required/>
    <input id='inputs' type="text" placeholder='Subject' required/>
    </div>
    <textarea name="textarea"></textarea>
    <button type='submit'>Submit</button>
    </form>
   </div>

  
  )
}

export default ContactUsTwoSection