import React, { useEffect, useState } from "react";
import { auth, db } from "../fire.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    keepFetchingUser();
  }, []);

  function keepFetchingUser() {
    auth.onAuthStateChanged(
      (user) => {
        setCurrentUser(user);
        if (user && !userData) fetchUserData(user);
        if (user) keepFetchingUserData(user);
        if (!user) setIsLoaded(true);
      },
      (error) => console.error(error),
      () => {
        setCurrentUser(null);
        setIsLoaded(false);
      }
    );
  }

  function fetchUserData(user) {
    db.ref()
      .child("users")
      .child(user.uid)
      .once(
        "value",
        (snapshot) => {
          setUserData(snapshot.val());
          setIsLoaded(true);
        },
        () => {
          setIsLoaded(true);
        }
      );
  }

  function keepFetchingUserData(user) {
    db.ref()
      .child("users")
      .child(user.uid)
      .on(
        "value",
        (snapshot) => {
          setUserData(snapshot.val());
        },
        () => {
          setIsLoaded(true);
        }
      );
  }

  return (
    <AuthContext.Provider value={{ currentUser, isLoaded, userData }}>
      {children}
    </AuthContext.Provider>
  );
};