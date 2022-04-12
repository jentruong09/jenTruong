// Landing page
import React from "react";
import '../styles/Home.css'

export default function Home() {
    return (
        <div className="whoAmI">
            <div className="nameAndTitle">
                <p className="p-tag">Hello! I'm</p>
                <h3 className="name">Jennifer Truong,</h3>
                <h3 className="title">Full-Stack Web Developer.</h3>
                <p className="p-tag">I like to design and build things for the web.</p>
            </div>
            <div className="emoji"> 
                <img src='https://i.imgur.com/tFjQNpc.png' className="pic" alt='pic'/>
            </div>
        </div>
    );
}
