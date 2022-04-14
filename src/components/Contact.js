// Body for contact info
import React from 'react';
import '../styles/Contact.css'


export default function Contact() {

    return (
        <div className='contactArea'>
            <div className='otherContact'>
                <h3> You can contact me here: </h3>
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
            </div> 
        </div >
    )
}
