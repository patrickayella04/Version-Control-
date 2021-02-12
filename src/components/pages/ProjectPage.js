import React from 'react';
import FooterArea from '../organisms/footer-organism/Footer-area';
import NavArea from '../organisms/navBarArea-organism/NavBarArea';
import ProjectShowArea from '../organisms/project-organism/Showcase-area';
import ProjectTextArea from '../organisms/project-organism/Text-area';




function ProjectPage() {
    return (
        <>
        <div className="body">

            <NavArea />
            <ProjectShowArea />
            <ProjectTextArea />
            <FooterArea />

            </div> 
            
    </>
    )
}

export default ProjectPage