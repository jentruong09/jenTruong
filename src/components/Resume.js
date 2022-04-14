// Body for my resume - add link to pdf file of resume?
// Add list of all tech skills - like demo
import React from 'react';
import '../styles/Resume.css'

export default function Resume() {
    return (
        <div className='resumeSection'>
            <h4 className='resumeDownload'>
                Download a PDF of my resume: <a className='resumeLink' href='https://drive.google.com/file/d/1vcjXKBoyuQjLxYHz0j819O8UoQaFm_6e/view?usp=sharing'>Resume</a>
            </h4>
            <div className='technologies'>
               
                {/* <div className='container'>
                    <div className="image" >
                        <img src="https://i.imgur.com/ZVRpS3t.png" class="notCard" alt='html'/>
                    </div>
                    <div className="image" >
                        <img src="https://i.imgur.com/JwY3JVq.png" class="notCard" alt='css'/>
                    </div>
                    <div className="image" >
                        <img src="https://i.imgur.com/fmCTb6Q.png" class="notCard" alt='js'/>
                    </div>
                </div> */} 
                <h4> Front End Proficiencies: </h4>
                <ul className='front-prof-list'>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        React.js
                    </li>
                    <li>
                        jQuery
                    </li>
                    <li>
                        Framework - BootStrap
                    </li>
                    <li>
                        Responsive Web Design
                    </li>
                </ul>

                <h4> Back End Proficiencies:</h4>
                <ul className='front-prof-list'>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        MySQL
                    </li>
                    <li>
                        NoSQL - MongoDB, Mongoose
                    </li>
                    <li>
                        APIs - RESTful, third-part, server-side, web
                    </li>
                    <li>
                        Templating Language - Handlebars
                    </li>
                </ul>
            </div>
        </div>
    )
}