import React from 'react';
//Styled
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Images
import athlete from '../img/athlete-small.png';
import goodtimes from '../img/goodtimes-small.png';
import theracer from '../img/theracer-small.png';
//Animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

const OurWork = () => {
    return(
        <Work variants = {pageAnimation} initial = "hidden" animate = "show" exit = "exit" style = {{background: "#ffffff"}}>
            <Movie>
                <h1>The Athlete</h1>
                <div className = "line"></div>
                <Link to = "/work/the-athlete">
                    <img src = {athlete} alt = "the-athlete"/>
                </Link>
            </Movie>
            <Movie>
                <h1>The Racer</h1>
                <div className = "line"></div>
                <Link to = "/work/the-racer">
                    <img src = {theracer} alt = "the-racer"/>
                </Link>
            </Movie>
            <Movie>
                <h1>Good Times</h1>
                <div className = "line"></div>
                <Link to = "/work/good-times">
                    <img src = {goodtimes} alt = "good-time"/>
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div) `
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
h2{
    padding: 1rem 0rem;    
}
`
const Movie = styled.div `
padding-bottom: 10rem;
.line{
    min-height: 0.5rem;
    background-color: #cccccc;
    margin-bottom: 3rem;
}
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`

export default OurWork;