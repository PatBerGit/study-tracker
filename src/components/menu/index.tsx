import Image from 'next/image';
import styles from './style.module.scss';
import Link from 'next/link';

export default function Menu(){

return(
    <>
    <menu className={styles.menuList}>
        <ul className={styles.menuList}>
            <li className={styles.menuItem}>Courses</li>
            <li className={styles.menuItem}>Schools</li>
            <li className={styles.menuItem}>Calendar</li>
            <Link className={styles.link} href={"/signup"}><li className={styles.menuItem}>Signup</li></Link>
        </ul>
    </menu>
    </>
);


}