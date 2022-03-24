// Header Page that holds logo and nav bar?
import React, { useState } from 'react';
// import other components ->
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Resume from './Resume'


export default function Header() {
    // state for what the current page is and page is changed
    const [currentPage, handlePageChange] = useState('Home');

    // what page will render based on what is clicked
    const renderPage = () => {
        // can choose to use if statement if this doesn't work
        // switch case statment for all pages - make sure case name is exactly the same as the tabs later in Nav.js
        switch(currentPage) {
            case "Home":
                return <Home></Home>
            case "About":
                return <About></About>
            case "Work":
                return <Work></Work>
            case "Contact":
                return <Contact></Contact>
            case "Resume":
                return <Resume></Resume>
            default:
                return <Home></Home>
        }
    };

    // return to renderPage and handlePageChange
    return (
        <div>
            <div> 
                JT
            </div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            <div>
                {
                    renderPage()
                }
            </div>
        </div>
    )
}