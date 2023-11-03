import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import firebase from "firebase/auth";
import firebase_app from "../firebase/config";
import { getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);
interface Props {
    children: React.ReactNode;
  }
export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};