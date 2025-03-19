//import React
import React from 'react';
// Import Link to navigate between pages
import { Link } from 'react-router-dom';
// Import the CSS file for styling
import './Navbar.css';

const Navbar = () => {
    return (
     // fill in the rest here!
     // add Home and NotHome, including links (after routing established)
     <div>
        
        <nav className='navbar'>
            <h1>My React Website</h1>
            <ul>
                <li>
                    <Link to='/Home'>Home</Link>
                </li>
                <li>
                    <Link to='/NotHome'>NotHome</Link>
                </li>
            </ul>
        </nav>
     </div>
     
    );
  };
  
  // Always export your components so they can be imported in other files
  export default Navbar;