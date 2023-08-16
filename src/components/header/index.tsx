import Image from 'next/image';
import styles from './style.module.scss'
import Link from 'next/link';

export default function Header(){

return(
    <>
    <header className={styles.sticky}>
        <Link href={"/"}>
            <Image className={styles.logo} src={"/../public/img/logo.jpeg"} alt="Study tracker logo" width="300" height="300"></Image>
        </Link>
        <div className={styles.headerContainer}>
        <h1 className={styles.title}>Study tracker</h1>
        </div>
        <nav className="navBar"></nav>

    </header>
    </>
);


}