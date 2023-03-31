// Holds the design/created by J.T.
import React from 'react';
import '../styles/Footer.css'
import link from '../assets/apps/link.json'

export default function Footer() {
    return (
        <div className='footer'>
            {/* <div className='otherContact'>
                <div className="full-content" id="contact">
                    <ul className='contactList'>
                        <li>
                            <a href="mailto: jennifertruong09@gmail.com"><img className='contactImg' src='https://i.imgur.com/hi8b397.png' alt='email' /></a>
                        </li>
                        <li>
                            <a href="https://github.com/jentruong09"><img className='contactImg' src='https://i.imgur.com/K74n3yJ.png' alt='github' /></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jennifertruong09/"><img className='contactImg' src='https://i.imgur.com/sq41iit.png' alt='linkedin' /></a>
                        </li>
                    </ul>
                </div>
            </div> */}
            <p>For a new and updated portfolio, please visit: <a href={link.link}>New Portfolio</a></p>
            <p>Designed and Built by Jennifer Truong <span>&copy;</span>2022</p>
        </div>
    )
}

