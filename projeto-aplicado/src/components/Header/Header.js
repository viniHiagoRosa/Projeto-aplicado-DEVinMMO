import styles from './Header.module.css'

export const Header = () => {
    return(
        <header className={styles.Header}>
            <h1 > DEVinMMO </h1>
            <div>
                <button className={styles.button}> Noticias </button>
                <button className={styles.button}> Games </button>
            </div>
        </header>
    )
}