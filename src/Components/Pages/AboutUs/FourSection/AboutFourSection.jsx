import React from 'react'
import './AboutFourSection.css'
import CardAvatarOneImg from '../../../../assets/Pages/AboutUs/avatar1.png'
import CardAvatarTwoImg from '../../../../assets/Pages/AboutUs/avatar2.png'
import CardAvatarThreeImg from '../../../../assets/Pages/AboutUs/avatar3.png'
import CardAvatarFourImg from '../../../../assets/Pages/AboutUs/avatar4.png'

const AboutFourSection = () => {
  return (
    <>
    <div className="AboutFourSectionContainer">
    <div className="AboutFourSectionText">
        <h2>Our Team</h2>
       <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</i>
        </div>
        <div className="AboutFourCardSection">
            <div className="AboutFourSectionCardItem">
                <div className="RoundDiv">
                    <img src={CardAvatarOneImg} alt="RoundDivImg" />
                </div>
                <h5>Manuella Nevoresky</h5>
                <p>CEO - FOUNDER</p>
            </div>
            <div className="AboutFourSectionCardItem">
                <div className="RoundDiv">
                    <img src={CardAvatarTwoImg} alt="RoundDivImg" />
                </div>
                <h5>Samuel Hardy</h5>
                <p>MANAGING DIRECTOR</p>
            </div>
            <div className="AboutFourSectionCardItem">
                <div className="RoundDiv">
                    <img src={CardAvatarThreeImg} alt="RoundDivImg" />
                </div>
                <h5>Tom Sunderland</h5>
                <p>SUPERVISOR</p>
            </div>
            <div className="AboutFourSectionCardItem">
                <div className="RoundDiv">
                    <img src={CardAvatarFourImg} alt="RoundDivImg" />
                </div>
                <h5>John Tarly</h5>
                <p>TEAM LEADER</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutFourSection;