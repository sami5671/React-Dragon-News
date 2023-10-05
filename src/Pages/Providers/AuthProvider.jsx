import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);
// ====================create an instance of the google & gitHub auth provider==================
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
// ====================================================================================

// ====================================================================================
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // ===========================this state is for handling the loading ======================================
  const [loading, setLoading] = useState(true);
  // ===========================this state is for handling the loading =================================
  // ==================================Create User=======================================
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  ==================================Sign in user==================================================
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // ===============================Google sing in from firebase==============================
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // ===============================GitHub sing in from firebase==============================
  const signInWithGitHub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  // ===============================Sign Out============================
  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };
  // =========================================================================================
  // =========================Checking the user is signed in or not============================================
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("USER IN THE AUTH STATE CHANGED", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // =============================pataya disi context ar modde=======================================================
  const authInfo = {
    createUser,
    signInUser,
    user,
    logOut,
    loading,
    signInWithGoogle,
    signInWithGitHub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
