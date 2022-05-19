// Body for contact info
import React from 'react';
import '../styles/Contact.css'


export default function Contact() {

    return (
        <div className='contactArea'>
            <div className='otherContact'>
                <h3 className='contactTitle'> Contact me here: </h3>
                <div className="full-content" id="contact">
                    <ul className='contactList'>
                        <li className='indContact'>
                            <a href="mailto: jennifertruong09@gmail.com"><img className='contactImg' src='https://i.imgur.com/0CBz6xh.png' alt='email' /></a>
                            <a href="mailto: jennifertruong09@gmail.com" className='wordLinks'> <p> jennifertruong09@gmail.com </p></a>
                        </li>
                        <li className='indContact'>
                            <a href="https://github.com/jentruong09"><img className='contactImg' src='https://i.imgur.com/K74n3yJ.png' alt='github' /></a>
                            <a href="https://github.com/jentruong09" className='wordLinks'> <p> jentruong09 </p></a>
                        </li>
                        <li className='indContact'>
                            <a href="https://www.linkedin.com/in/jennifertruong09/"><img className='contactImg' src='https://i.imgur.com/sq41iit.png' alt='linkedin' /></a>
                            <a href="https://www.linkedin.com/in/jennifertruong09/" className='wordLinks'> <p> jennifertruong09 </p></a>
                        </li>
                    </ul>
                </div>
            </div> 
        </div >
    )
}
