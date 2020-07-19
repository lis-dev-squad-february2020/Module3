import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './auth/auth-service';

class Navbar extends Component {
    service = new AuthService();

    logoutUser = () => {
        this.service.logout()
            .then(() => {
                this.props.setCurrentUser(null);
                localStorage.clear();
            })
    }

    render() {
        if (this.props.loggedInUser) {
            return (
                <nav>
                    <ul>
                        <li>
                            Welcome {this.props.loggedInUser.username}
                        </li>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/images/add'>Add Image</Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <button onClick={this.logoutUser}>Logout</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            )
        } else {
            return (
                <nav>
                    <ul>
                        <li>
                           <Link to='/login'>Login</Link>
                        </li>
                        <li>
                           <Link to='/login-google'>Login using Google</Link>
                        </li>
                        <li>
                           <Link to='/signup'>Signup</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/images/add'>Add Image</Link>
                        </li>
                        <li>
                           <Link to='/map'>Map</Link>
                        </li>
                    </ul>
                </nav>
            )
        }

    }
}

export default Navbar;