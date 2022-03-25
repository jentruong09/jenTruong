// Body for about me content
import React from 'react';
import '../styles/About.css'

export default function About() {
    return (
        <div className='aboutArea'>
            <div className='about'>
                <p>
                    Welcome! My name is Jennifer Truong, you can call me Jen! I have a background in Accounting and after a few years in the field,
                    I decided I wanted to take on my next challenge, web development. Through web development, I am able to create web designs that incorporates my interests and creativity.
                    I am a full-stack web developer based in New York City and I enjoy designing and building applications for the web.
                </p>
            </div>
            <div className='aboutPic'>
                <img src='https://i.imgur.com/Yks2X8q.png' className='mePic' alt='mePic'/>
            </div>
        </div>
    )
}