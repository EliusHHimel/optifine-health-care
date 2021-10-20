import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, updateProfile, signOut } from "firebase/auth"
import initializeAuthentication from "../Firebase/firebase.init";


const useFirebase = () => {
    initializeAuthentication();

    const [user, setUser] = useState({});
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleName = event => {
        setName(event.target.value)
    }

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }
    const signInUsingGitHub = () => {
        return signInWithPopup(auth, githubProvider)

    }

    // Login using email and password
    const loginHandler = event => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setUser(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

    }
    // Sign Up using email and password
    const registrationHandler = event => {
        event.preventDefault();

        if (password.length < 6) {
            setError('Password must contain at least 6 characters.');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setUser(user)
                setError('');
                updateDisplayName();
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const updateDisplayName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {

        });
    }

    // Sign out/log out
    const signOutHandle = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [auth])

    return {
        user,
        email,
        password,
        error,
        handleName,
        signInUsingGoogle,
        signInUsingGitHub,
        loginHandler,
        registrationHandler,
        signOutHandle,
        handleEmail,
        handlePassword
    }
}

export default useFirebase;