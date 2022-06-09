import React from 'react'
import Header from './header';

const ProjectsBody = () => {
    return(
        <div className="bodyBox">
            <div className="text">
                Here you will find data-science-related projects! 
                This page will be updated as I build them!
            </div>
            
        </div>
    );
};

const Projects = () => {
    return (
        <>
            <div className="pageHeader">
                <Header />
            </div>
            <div className="pageBody">
                <ProjectsBody />
            </div>
        </>
    )
}

export default Projects;