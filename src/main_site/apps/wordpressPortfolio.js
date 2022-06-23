import React from 'react'
import socmed from '../pictures/soc_med.png'
import urhome from '../pictures/ur_home.png'
import urkarn from '../pictures/ur_karn.png'
import blogcomments from '../pictures/blog_comments.png'

//these are the functions that open a new window when the wordpress example images are clicked
function linkMedToSite() {window.open("https://mysocialmedia982271996.wordpress.com/")}
function linkUrHoToSite() {window.open("https://urzaedh.wordpress.com")}
function linkUrKaSite() {window.open("https://urzaedh.wordpress.com/2022/05/22/diving-into-the-deep-end/")}

// define the objects that will be a part of the portfolio
const SocMed = () => {
    return (
        <div className='portfolioDisplay'>
            <img className='portfolioLink'
                src={socmed}
                alt="social media hub website link"
                onClick={linkMedToSite}>
            </img>
        </div>
    );
};

const UrHome = () => {
    return (
        <div className='portfolioDisplay'>
            <img className='portfolioLink'
                src={urhome}
                alt="urza edh blog post link"
                onClick={linkUrHoToSite}>
            </img>
        </div>
    );   
};

const UrKarn = () => {
    return (
        <div className='portfolioDisplay'>
            <img className='portfolioLink'
                src={urkarn}
                alt="urza edh blog home link"
                onClick={linkUrKaSite}>
            </img>
        </div>
    );
};



const Comments = () => {
    return (
        <div className='portfolioDisplay'>
            <img className='portfolioLink'
                src={blogcomments}
                alt="urza edh blog comments via karn post link"
                onClick={linkUrKaSite}>
            </img>
        </div>
    );
};

const WordPortfolio = () => {
    return (
        <>
            <UrHome />
            <UrKarn />
            <Comments />
            <SocMed />
        </>
    );
};

export default WordPortfolio