import React from 'react';

import SignIn from '../../Components/Sign-In/sign-in.component';
import SignUp from '../../Components/sign-up/sign-up.component';

import './Sign-in-and-up.style.scss'

const SignInAndSignUp = () => (
    <div className="sign-in-and-up">
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSignUp;