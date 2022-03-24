// Body for my resume - add link to pdf file of resume?
// Add list of all tech skills - like demo
import React from 'react';
import '../styles/Resume.css'

export default function Resume() {
    return (
        <div>
            <h5 className='resumeDownload'>
                Download a PDF of my resume: <a href='https://drive.google.com/file/d/1HVZDekGzx4APc4imO8JMF6-DEq4I2TGH/view?usp=sharing'>Resume</a>
            </h5>
            <div className='technologies'>
                <h5> Proficiencies </h5>
                <div className='container'>
                    <div className="image" >
                        <img src="https://i.imgur.com/ZVRpS3t.png" class="notCard" alt='html'/>
                    </div>
                    <div className="image" >
                        <img src="https://i.imgur.com/JwY3JVq.png" class="notCard" alt='css'/>
                    </div>
                    <div className="image" >
                        <img src="https://i.imgur.com/fmCTb6Q.png" class="notCard" alt='js'/>
                    </div>
                </div>
                {/* <ul>
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
                        BootStrap
                    </li>
                </ul> */}
            </div>
        </div>
    )
}