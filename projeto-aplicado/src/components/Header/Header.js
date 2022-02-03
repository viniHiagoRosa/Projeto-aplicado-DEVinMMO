import { useNavigate } from 'react-router';
import styles from './Header.module.css'

export const Header = () => {

    const navigate = useNavigate();
    return(
        <header className={styles.Header}>
            <h1 > DEVinMMO </h1>
            <div>
                <button className={styles.button}  onClick={() => navigate('noticias')}  > Noticias </button>
                <button className={styles.button} onClick={() => navigate('/')} > Games </button>
            </div>
        </header>
    );
};