import Image from 'next/image';
import styles from './style.module.scss';
import Link from 'next/link';

export default function Menu(){

return(
    <>
    <menu className={styles.menuList}>
        <ul className={styles.menuList}>
            <Link className={styles.link} href={"/courses"}><li className={styles.menuItem}>Courses</li></Link>
            <Link className={styles.link} href={"/schools"}><li className={styles.menuItem}>Schools</li></Link>
            <Link className={styles.link} href={"/calendar"}><li className={styles.menuItem}>Calendar</li></Link>
            <Link className={styles.link} href={"/signin"}><li className={styles.menuItem}>Signin</li></Link>
        </ul>
    </menu>
    </>
);


}