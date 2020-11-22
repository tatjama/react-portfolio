import React from 'react';
//Sections import
import home1 from '../img/home1.png';

const AboutSection = () => {
    return(
        <div className = "about-section">
            <div className = "title">
                <div className = "description">
                    <div className = "hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className = "hide">
                        <h2> your <span>dreams</span> come</h2>
                    </div>
                    <div className = "hide">
                        <h2> reality.</h2>
                    </div>
                    
                </div>
                <p>Contact us for every photography, videography idea, we have professionals
                    with amazing skills.
                </p>
                <button>Contact Us</button>
            </div>
            <div className = "image">
                <img src = {home1} alt = "gay-with-camera"/>
            </div>
        </div>
    )
}

export default AboutSection;