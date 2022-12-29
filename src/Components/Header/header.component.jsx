import React from "react";

import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import './header.style.scss';

const Header = ({currentUser}) => {
    return(
        <div className="header">
            <Link to = '/' className="logo-container">
                <h1>Vartalaap</h1>
            </Link>
            <div className="options">

                 {
                    currentUser ?
                        <Link to = 'userprofile' className="option">
                        User Profile
                        </Link>
                        :
                        null
                 }

                {
                    !currentUser ?
                        <Link to = '/signinsignup' className="option">
                            Register/Login
                        </Link>
                        :
                        <div className="option" onClick={() => auth.signOut()}>Sign out</div>
                }
            </div>
        </div>
    );
}

export default Header;