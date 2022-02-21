import { Link } from 'react-router-dom';
import { Container, Img, Li, Main, P } from './Card-Game.styled.js'
import styles from './Card-Game.module.css';

export const CardGame = ({game}) => {
  return(
  <Main>
    <Li>    
      <Container>
      <Link to={`/detalhes/${game.id}`} className={styles.Link} > 
        <Img src={game.thumbnail} alt={game.title} /> 
        <div>
          <P>{game.title}</P> 
        </div>
      </Link>    
      </Container>     
                
    </Li>      
  </Main>      
  );    
};

