import React from 'react';
import Header from './header';

//declare all of the parts of my page

const Jobs = () => {
    return(
        <>
            <div className='title'>
                Job Experiences
            </div>
            <div className='text'>
                HopeLab (imi app) - April 2022-May 2022(short contract)<br/>
                &emsp; Extensively tested the "imi" app<br/>
                &emsp; Found 78 UI/UX bugs<br/>
            </div>
        </>
    );
};

const Uni = () => {
    return(
        <>
            <div className='title'>
                University Experiences
            </div>
            <div className='text'>
                Bag of Arguments Research (Staub Lab) - R, Python<br/>
                &emsp; Assisted with a project exploring word pre-activation using thematic role reversals <br/>
                &emsp; Helped code 2 online experiments in JavaScript whose results were stored in an SQL database<br/>
                &emsp; Used NLTK to standardize subject responses<br/>
                &emsp; Data collected will be used to fit a computational model that quantifies word pre-activation<br/>
                &emsp; Industry applications in search engines and auto complete software<br/><br/>
                Dr. Caleb Rounds - Molecular/cellular biology - September 2020-May 2021<br/>
                &emsp; Ran discussion sessions and graded work<br/>
                &emsp; Coordinated weekly quiz sessions that improved student performance by 20%<br/>
                &emsp; Curated supplemental learning material for students who fell behind or started late<br/><br/>
                Dr. Kyle Cave - Cognitive Psychology - January 2021-May 2021<br/>
                &emsp; Generated questions for exams and quizzes and programmed them into Moodle<br/>
                &emsp; Troubleshot online gradebook and exam issues<br/>
                &emsp; Created diagrams describing cognitive theories for use in exam study material<br/>
            </div>
        </>
    );
};

const Technologies = () => {
    return(
        <>
            <div className='title'>
                Programming Languages, Packages and Technologies
            </div>
            <div className='text'>
                JavaScript(React, Sass/Scss)<br/>
                Python(scikit-learn, pandas, seaborn), R(tidyverse, dplyr, knitr)<br/>
                SQL<br/>
                Jupyter Notebook<br/>
                Netlify<br/>
            </div>
        </>
    );
};

const Education = () => {
    return(
        <>
            <div className='title'>
                Education
            </div>
            <div className='text'>
                UMass Amherst, Bachelor of Science, Neuroscience (quantitative) - 3.927 GPA (December 2022*)<br/>
                *I only have one more class left so I have plenty of time to work<br/>
            </div>
        </>
    );
};

const ResumeBody = () => {
    return(
        <>
            <Jobs />
            <Uni />
            <Technologies />
            <Education />
        </>
    );
};

const Resume = () => {
    return (
        <>
            <div className="pageHeader">
                <Header />
            </div>
            <div className="pageBody">
                <ResumeBody />
            </div>
        </>
    )
}

export default Resume;