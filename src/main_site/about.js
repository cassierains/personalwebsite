import React from 'react';
import Header from './header';
import WordPortfolio from './wordpressPortfolio';
import './sass_files/styles.css'

const AboutBody = () => {
    return(
        <div className="bodyBox">
            <div className='title'>
                About Me
            </div>
            <div className="text">
                Hey! My name is Cassandra. I'm finishing up my BS in neuroscience. During my undergrad, 
                I was a research assistant in a psycholinguistics lab focusing on natural language processing.
                I'm interested in working with large data sets to extrapolate ways to imporove user experience,
                and building user-friendly applications. I excel at writing concise, readable, reusable code.
            </div>

            <div className='title'>
                About this Website
            </div>

            <div className='text'>
                This website was built entirely using React and Sass for styling.
            </div>

            <div className='title'>
                What's New?
            </div>
            <WordPortfolio />
            <div className='text'>
                You can learn more about these web pages on the "Apps" tab!
            </div>
        </div>
    );
};

const About = () => {
    return (
        <>
            <div className="aboutHeader">
                <Header />
            </div>
            <div className="pageBody">
                <AboutBody />
            </div>
        </>
    );
};

export default About;