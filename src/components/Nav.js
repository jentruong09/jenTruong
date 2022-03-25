// Navigation bar and working links
import React from 'react';
import '../styles/Nav.css'

export default function Nav(props) {
    const tabs = ['Home', 'About', 'Work', 'Contact', 'Resume'];

    return (
        <ul className='navBar'>
            {tabs.map(tab => (
                <li className='navItem' key={tab}>
                    {/* // ternary operator for link to page depending on which page user is on -- fix later if issues? */}
                    <a onClick={() => props.handlePageChange(tab)} className={props.currentPage === tab}>
                        {tab}
                    </a>
                </li>
            ))}
        </ul>
    )
}

// href={'#' + tab}
//className={props.currentPage === tab ? 'nav-link active' : 'nav-link'}