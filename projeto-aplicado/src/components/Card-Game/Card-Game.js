import { Container, Img, Li, Main, P } from './Card-Game.styled.js'

export const Card_Game = ({game}) => {
  return(
  <Main>
    <Li>        
      <Container>
        <Img src={game.thumbnail} alt={game.title} /> 
        <div>
          <P>{game.title}</P>
        </div>
      </Container>               
    </Li>      
  </Main>      
  );    
};

