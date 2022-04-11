// Body for contact info
import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import '../styles/Contact.css'


export default function Contact() {
    // const [formState, setFormState] = useState({ name: "", email: "", message: "" });

    // const { name, email, message } = formState;
    // const [errorMessage, setErrorMessage] = useState("")

    // function handleChange(el) {
    //     if (el.target.name === 'email') {
    //         const validEmail = validateEmail(el.target.value);
    //         if (!validEmail) {
    //             setErrorMessage('You need to enter a vaild email.');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if (!el.target.value.length) {
    //             setErrorMessage(`${el.target.name} is required.`);
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }
    //     if (!errorMessage) {
    //         setFormState({ ...formState, [el.target.name]: el.target.value });
    //     }
    // }

    // function handleSubmit(el) {
    //     el.preventDefault();
    //     console.log(formState)
    // }

    return (
        <div className='contactArea'>
            {/* <h3> Contact me: </h3> */}
            {/* <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name </label>
                    <input type='text' className="form-control" dafaultvalue={name} onBlur={handleChange} name='name' />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address </label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" dafaultvalue={email} onBlur={handleChange} name='email' />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" dafaultvalue={message} onBlur={handleChange} name='message'></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className='errorMessage'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit' className='submit btn btn-dark' onSubmit={handleSubmit}>Submit</button>
            </form> */}

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
