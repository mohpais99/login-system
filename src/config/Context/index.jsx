import React, { useContext, useState, useEffect } from 'react';
import { auth } from "../Firebase";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(false)

    function signup(email, password, fullname) {
        return auth.createUserWithEmailAndPassword(email, password).then(() => {
            return setprofile(fullname)
        })
    }

    function setprofile(name) {
        var user = auth.currentUser;
        return user.updateProfile({displayName: name})
    }

    function signin(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signout() {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })

    const value = {
        currentUser,
        signup,
        signin,
        signout
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
