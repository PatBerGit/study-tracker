import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export const SignUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // logs user's details
            console.log("User >>", user);
            //router.push("/dashboard");
        })
        .catch((error) => {
            console.error(error);
        });
}

export const SignIn = (email: string, password: string, router: AppRouterInstance) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // logs user's details
            console.log("User >>", user);
            router.push("/dashboard");
        })
        .catch((error) => {
            console.error(error);
        });
};

export const LogOut = (router: AppRouterInstance) => {
    signOut(auth)
        .then(() => {
            router.push("/");
        })
        .catch((error) => {
            console.error(error);
        });
};