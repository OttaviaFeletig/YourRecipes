import React, { createContext, useState } from 'react';
import firebase from '../firebase/firebase';

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const auth = firebase.auth();
  const db = firebase.firestore();

  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [regname, setRegname] = useState('');
  const [regemail, setRegemail] = useState('');
  const [regpassword, setRegpassword] = useState('');
  const [regpassword2, setRegpassword2] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [myBookmarkedRecipiesId, setMyBookmarkedRecipesId] = useState([]);

  //register user with email, name, psw to firebase and login
  const sendRegistration = e => {
      e.preventDefault();
      //check if same psw was given both times at registration
      if (regpassword === regpassword2) {
        auth.createUserWithEmailAndPassword(regemail, regpassword).then(function (result) {
          return result.user.updateProfile({
            displayName: regname,
          });
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        console.log('passwords dont match');
      }
    };

  //check user status, if no user logged in, it returns null
  auth.onAuthStateChanged(user=> {
    if (user) {
      setIsLoggedIn(true);
      //get name of user, and save it
      setName(user.displayName);
      setUserId(user.uid);
    }else {
      setIsLoggedIn(false);
    }});

  const sendLogin = e => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(loginEmail, loginPassword)
      .then(cred => {
        //get the id of the recipes the user bookmarked
        db.collection('users').doc(cred.user.uid).get().then(doc=>console.log(doc.data()));
      });
    };

  const signOut = e => {
      e.preventDefault();
      firebase.auth().signOut();
    };

  //create a doc with the id = userId, and add recipeId inside
  const sendUserData = () => {
    db.collection('users').doc(userId).set({
      recipeId: '716293',
    });
  };

  return (
    <LoginContext.Provider value={{ myBookmarkedRecipiesId, setMyBookmarkedRecipesId, signOut, sendLogin,  loginEmail, setLoginEmail, loginPassword, setLoginPassword, sendRegistration, name, setName, isLoggedin, setIsLoggedIn, regname, setRegname, regemail, setRegemail, regpassword, setRegpassword, regpassword2, setRegpassword2 }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
