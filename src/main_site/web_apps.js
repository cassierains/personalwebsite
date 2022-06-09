import React from 'react';
import Header from './header';
import WordPortfolio from './wordpressPortfolio';

const WebAppsBody = () => {
    return(
        <>
            <div className="text">
                Here you will find applications I've built! 
                As I build them they will be added here!
            </div>

            <div className="title">
                WordPress Portfolio
            </div>

            <div className="text">
                These web pages were created using just the basic functionalities of WordPress!
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