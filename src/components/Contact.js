// Body for contact info
import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
// add validation for emails


export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });

    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState("")

    function handleChange(el) {
        if (el.target.name === 'email') {
            const validEmail = validateEmail(el.target.value);
            if (!validEmail) {
                setErrorMessage('You need to enter a vaild email.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!el.target.value.length) {
                setErrorMessage(`${el.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [el.target.name]: el.target.value });
        }
    }

    function handleSubmit(el) {
        el.preventDefault();
        console.log(formState)
    }

    return (
        <div className='contactArea'>
            <h3> Contact me: </h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name </label>
                    <input type='text' className="form-control" dafaultValue={name} onBlur={handleChange} name='name' />
                </div>
                <div clasName="form-group">
                    <label htmlfor="email">Email address </label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" dafaultValue={email} onBlur={handleChange} name='email'/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" dafaultValue={message} onBlur={handleChange} name='message'></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className='errorMessage'>{errorMessage}</p>
                    </div>
                )}
            </form>

            <div className='otherContact'>
                <h3> You can contact me here as well: </h3>
                <div class="full-content" id="contact">
                <ul>
                    {/* <li>
                        <a href="mailto: jennifertruong09@gmail.com"><i class="fas fa-envelope"></i> Email</a>
                    </li> */}
                    <li>
                        <a href="https://github.com/jentruong09"><i class="fab fa-github-square"></i> GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jennifertruong09/"><i class="fab fa-linkedin"></i> LinkedIn</a>
                    </li>
                </ul>
            </div>
            </div>
        </div >
    )
}
