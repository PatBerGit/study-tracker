import Image from 'next/image';
import styles from './style.module.scss';
import Link from 'next/link';

export default function Settings(){

return(
    <>
    <div className={styles.container}>
        <h2 className={styles.heading}>Settings</h2>
        <form className={styles.form} action="post">
            <div className={styles.labelAndField2}>
                <label className={styles.labelInput} htmlFor="courseTitle">Course title</label>
                <input className={styles.textInput} type="text" name="courseTitle"></input>
            </div>
            <div className={styles.labelAndField1}>
                <label className={styles.labelInput} htmlFor="courseStartDate">Start date</label>
                <input className={styles.textInput} type="date" name="courseStartDate"></input>
            </div>
            <div className={styles.labelAndField1}>
                <label className={styles.labelInput} htmlFor="courseEndDate">End date</label>
                <input className={styles.textInput} type="date" name="courseEndDate"></input> 
            </div>
            <div className={styles.labelAndField2}>
                <label className={styles.labelInput} htmlFor="description">Description</label>
                <input className={styles.descriptionInput} type="text" name="description"></input> 
            </div>
            <button className={styles.btn}>Save</button>
        </form>
        
    </div>
    
    </>
);


}