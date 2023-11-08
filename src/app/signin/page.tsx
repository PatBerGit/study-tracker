'use client'
import styles from "./page.module.scss";
import React from "react";
import { SignIn } from "@/firebase/utils";
import { useRouter } from 'next/navigation'
import Link from "next/link";

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (ev: React.SyntheticEvent) => {
        ev.preventDefault()

        await SignIn(email, password, router);

        return router.push("/")

    }
    return (
        <div className={styles.signinContainer}>
            <h1 className={styles.header}>Sign in</h1>
            <form onSubmit={handleForm} className={styles.form}>
                <label htmlFor="email">
                    <p className={styles.label}>Email</p>
                    <input className={styles.input} onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p className={styles.label}>Password</p>
                    <input className={styles.input} onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>
                <button className={styles.button} type="submit">Sign in</button>
            </form>
            <p className={styles.noAccount}>Don&#39;t have an account?</p>
            <Link href={"/signup"}><button className={styles.button} type="button">Register</button></Link>
        </div>
    );
}

export default Page;