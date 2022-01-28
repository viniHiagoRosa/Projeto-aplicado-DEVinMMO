import styles from './Card.module.css'

export const Card_Game = ({game}) => {
  return(
  <div className={styles.Geral}>
    <li className={styles.li}>        
      <div className={styles.Card}>
        <img className={styles.img} src={game.thumbnail} alt={game.title} />
        <div className={styles.lista}>
          <p key={game} className={styles.li} >{game.title}</p>
          <p key={game} className={styles.li} >{game.genre}</p>
        </div>
      </div>               
    </li>      
  </div>      
  );    
};

