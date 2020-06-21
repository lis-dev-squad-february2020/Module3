import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props){
    return (
        <div>
            <ul>
                <li><Link to="/beers">See All Beers</Link></li>
                <li><Link to="/random-beer">Random Beer</Link></li>
                <li><Link to="/new-beer">Add New</Link></li>
            </ul>
        </div>
    )
}

export default Nav;
