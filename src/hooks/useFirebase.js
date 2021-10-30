import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState(' ');

    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    //google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    // observer of user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser(' ')
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, []);

    // logout
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser(' ')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    return {
        signInUsingGoogle,
        logOut,
        user,
        error,
        setUser,
        setError,
        setIsLoading,
        isLoading
    }

}
export default useFirebase;
