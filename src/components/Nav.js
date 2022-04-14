// Navigation bar and working links
import React from 'react';
import '../styles/Nav.css'
import {Link} from 'react-router-dom'

const styles = {
    color: {
        color: 'white'
    }
    
}

//props
export default function Nav() {
    // const tabs = ['Home', 'About', 'Work', 'Contact', 'Resume'];

    return (
        // <ul className='navBar'>
        //     {tabs.map(tab => (
        //         <li className='navItem' key={tab}>
        //             {/* // ternary operator for link to page depending on which page user is on -- fix later if issues? */}
        //             <a style={styles.color} href={'/jenTruong/'+tab} className={props.currentPage === tab ? 'nav-link active' : 'nav-link'}>
        //                 {tab}
        //             </a>
        //         </li>
        //     ))}
        // </ul>

        <ul className='navBar'>
            <li className='navItem'><Link to="/jenTruong/Home">Home</Link></li>
            <li className='navItem'><Link to="/jenTruong/About">About</Link></li>
            <li className='navItem'><Link to="/jenTruong/Work">Work</Link></li>
            <li className='navItem'><Link to="/jenTruong/Contact">Contact</Link></li>
            <li className='navItem'><Link to="/jenTruong/Resume">Resume</Link></li>
        </ul>
    )
}

// href={tab} onClick={() => props.handlePageChange(tab)} className={props.currentPage === tab ? 'nav-link active' : 'nav-link'}
//className={props.currentPage === tab ? 'nav-link active' : 'nav-link'}