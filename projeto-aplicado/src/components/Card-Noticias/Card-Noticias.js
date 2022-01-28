import styles from './Card-Noticias.module.css';

export const Card_Noticias = ({noticia}) => {
    return(
    <div >
      <li >        
        <div className={styles.card}>
          <div className={styles.notas}>
            <img src={noticia.main_image} alt={noticia.title} className={styles.img}/>
            <div>
              <h1 className={styles.h1}>{noticia.title}</h1>
              <p className={styles.p}>{noticia.short_description}</p>
            </div>            
          </div>
          <div className={styles.button}>
            <a href={noticia.article_url} target="_blank" className={styles.a}> Ver </a>
          </div>
          
        </div>               
      </li>      
    </div>      
    );    
  };