import React from 'react';
import './sign-in.style.scss';
import FormInput from '../Form-input/form-input.component';
import {auth, signInWithGoogle} from './../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-buttom.component';

class SignIn extends React.Component{
constructor(props){
    super(props);
    this.state = {
        email : "",
        password : "",
    };
}
handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try{
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ email : "" , password : ""});
    }catch(error){
        console.log(error);
    }

}

handleChange = (event) => {
const {value, name} = event.target;
this.setState({ [name] : value});
}
render(){
    return(
        <div className= "sign-in">
            <h2 className= "title">I already have an account.</h2>
            <span>Sign with your Email and Password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" type = "email" handleChange = {this.handleChange} value = {this.state.email} label="Email" required />
                <FormInput name="password" type = "password" handleChange = {this.handleChange} label = "Password" value={this.state.password} required />
                <div className="buttons">
                <CustomButton type="submit">SIGN IN</CustomButton>
                <CustomButton type="button" onClick = {signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                </div>
            </form>
        </div>
    )
}
}

export default SignIn;