import React from 'react';
import Header from './header';
import WordPortfolio from './apps/wordpressPortfolio';
import BiochemCalculator from './apps/biochem_calc';


const WebAppsBody = () => {
    return(
        <>
            <div className="title">
                Biochemistry Calculator
            </div>
            <BiochemCalculator />
            <div className="text">
                I made this calculator featuring the equations I'm using
                in the biochemistry class im taking! The computations
                actually aren't done in the web browser; they're done in the 
                back-end using Netlify Functions.
            </div>
            <div className="title">
                WordPress Portfolio
            </div>
            <WordPortfolio />
            <div className="text">
                These web pages were created using just the basic functionalities of WordPress!
                I've begun freelancing building websites and I wanted a quick, low-cost option
                for clients. Wordpress is one of the best platforms to do that on!
            </div>
            
        </>
    );
};

const WebApps = () => {
    return (
        <>
            <div className="pageHeader">
                <Header />
            </div>
            <div className="pageBody">
                <WebAppsBody />
            </div>
        </>
    )
}

export default WebApps;