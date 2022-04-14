// Navigation bar and working links
import React from 'react';
import '../styles/Nav.css'

const styles = {
    color: {
        color: 'white'
    }
    
}

//props
export default function Nav(props) {
    const tabs = ['Home', 'About', 'Work', 'Contact', 'Resume'];

    return (
        <ul className='navBar'>
            {tabs.map(tab => (
                <li className='navItem' key={tab}>
                    {/* // ternary operator for link to page depending on which page user is on -- fix later if issues? */}
                    <a style={styles.color} href={'/'+tab} className={props.currentPage === tab ? 'nav-link active' : 'nav-link'}>
                        {tab}
                    </a>
                </li>
            ))}
        </ul>
    )
}

// href={tab} onClick={() => props.handlePageChange(tab)} className={props.currentPage === tab ? 'nav-link active' : 'nav-link'}
//className={props.currentPage === tab ? 'nav-link active' : 'nav-link'}