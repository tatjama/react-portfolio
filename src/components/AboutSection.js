import React from 'react';
//Sections import
import home1 from '../img/home1.png';
// Animation
import {motion} from 'framer-motion';
//Styled
import {About, Description, Image, Hide} from '../styles';

const AboutSection = () => {
    return(
        <About>            
            <Description>
                <motion.div className = "title">
                    <Hide>
                        <motion.h2>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2> your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2> true.</motion.h2>
                    </Hide>
                </motion.div>                
                <p>Contact us for every photography, videography idea that you have. We have professionals
                    with amazing skills.
                </p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src = {home1} alt = "gay-with-camera"/>
            </Image>
        </About>
    )
}

//Styled

export default AboutSection;