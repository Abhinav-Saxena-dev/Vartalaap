import logo from './logo.svg';
import './App.css';

import {Navigate, Route, Routes} from 'react-router-dom';

import UserProfile from './Pages/UserProfile-Page/userprofile.component';
import SignInAndSignUp from './Pages/Sign-in-and-up/Sign-in-and-up.component.jsx';

import { createUserProfileDocument } from './services/user.service';

import {auth} from './firebase/firebase.utils';
import { useEffect, useState } from 'react';
import Header from './Components/Header/header.component';
import WriteBlog from './Pages/EditBlog/editblog.component';

import { userActions } from './redux/userReducer/userReducer';
import { useSelector, useDispatch } from 'react-redux';
import { onSnapshot } from 'firebase/firestore';
import LandingPage from './Pages/Landing-Page/landing-page.component';

const App = () => {
  
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.user.currentUser)
  console.log(currentUser);

  let unsubscribeFromAuth = null

  useEffect(() => {

    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef,snapshot => {
          dispatch(userActions.setCurrentUser({
            currentUser : {
              id : snapshot.id,
              ...snapshot.data(),
            }
          }))
        })

      }
      else{
        dispatch(userActions.setCurrentUser(userAuth))
      }
    })

    return () => {
      unsubscribeFromAuth();
    }
  }, [])

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Routes>
        <Route path = '/' element = {<LandingPage/>} />
        <Route path = '/userprofile' element = {<UserProfile/>}/>
        <Route path = '/signinsignup' element = {currentUser ? <Navigate replace to='/' /> : <SignInAndSignUp /> }/>
        <Route path = '/editblog' element = {<WriteBlog/>} />
      </Routes>
    </div>
  );
}

export default App;
