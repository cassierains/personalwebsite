import { useState } from 'react'
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
        <>
            <img className='portfolioLink'
                src={socmed}
                alt="social media hub website link"
                value={1}
                onClick={linkMedToSite}>
            </img>
        </>
    );
};

const UrHome = () => {
    return (
        <>
            <img className='portfolioLink'
                src={urhome}
                alt="urza edh blog post link"
                value={2}
                onClick={linkUrHoToSite}>
            </img>
        </>
    );   
};

const UrKarn = () => {
    return (
        <>
            <img className='portfolioLink'
                src={urkarn}
                alt="urza edh blog home link"
                value={3}
                onClick={linkUrKaSite}>
            </img>
        </>
    );
};



const Comments = () => {
    return (
        <>
            <img className='portfolioLink'
                src={blogcomments}
                alt="urza edh blog comments via karn post link"
                value={4}
                onClick={linkUrKaSite}>
            </img>
        </>
    );
};


const WordPortfolio = () => {
    const[display, setDisplay] = useState(1)//portfolio example state
    //define the function to move between portfolio examples
    function wordpressNext() {
        if (display === 4) {
            setDisplay(1)
        } else {
            setDisplay(display + 1)
        }
    }
    function wordpressPrevious() {
        if (display === 1) {
            setDisplay(4)
        } else {
            setDisplay(display - 1)
        }
    }
    return (
        <div className='portfolioWhole'>
            <button className="portfolioNav" onClick={wordpressPrevious}>{"<"}</button>

            {display === 1 ? (
                <SocMed />):
            display === 2 ? (
                <UrHome />):
            display === 3 ? (
                <UrKarn />):
            display === 4 ? (
                <Comments />): (
                <SocMed />)
            }
            <button className="portfolioNav" onClick={wordpressNext}>{">"}</button>
        </div>
    );
};

export default WordPortfolio