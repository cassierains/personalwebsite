import React from 'react';
import Header from './header';
import WordPortfolio from './wordpressPortfolio';

const WebAppsBody = () => {
    return(
        <>
            <div className="title">
                WordPress Portfolio
            </div>

            <div className="text">
                These web pages were created using just the basic functionalities of WordPress!
                I've begun freelancing building websites and I wanted a quick, low-cost option
                for clients. Wordpress is one of the best platforms to do that on!
            </div>
            
            <WordPortfolio />
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