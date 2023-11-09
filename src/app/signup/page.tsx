'use client'
import styles from "./page.module.scss";
import React from "react";
import { SignUp } from "@/firebase/utils";
import { useRouter } from 'next/navigation';
import Link from "next/link";

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (ev: React.SyntheticEvent) => {
        ev.preventDefault()

        await SignUp(email, password);

        return router.push("/")
    }
    return (
        <div className={styles.signupContainer}>
            <h1 className={styles.header}>Sign up</h1>
            <form onSubmit={handleForm} className={styles.form}>
                <label htmlFor="email">
                    <p className={styles.label}>Email</p>
                    <input className={styles.input} onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p className={styles.label}>Password</p>
                    <input className={styles.input} onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="pazzw0rd!" />
                </label>
                <button className={styles.button} type="submit">Sign up</button>
            </form>
            <p className={styles.haveAccount}>Already have an account?</p>
            <Link href={"/signin"}><button className={styles.button} type="button">Sign in instead</button></Link>
        </div>
    );
}

export default Page;