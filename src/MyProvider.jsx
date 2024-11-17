import { useEffect, useState } from 'react';
import { MyContext } from './MyContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase.config';

const googleProvider = new GoogleAuthProvider()

const MyProvider = ({ children }) => {
    const [open, setOpened] = useState(false);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // method-1
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // method-2
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // method-3
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
    }, [])

    // method-4
    const logOut = () => {
        return signOut(auth)
    }

    // method-5
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const info = { open, setOpened, createUser, signInUser, user, setUser, loading, logOut, googleSignIn }

    return (
        <MyContext.Provider value={info}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;