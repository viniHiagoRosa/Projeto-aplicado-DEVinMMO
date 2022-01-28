import { useEffect, useState } from "react";
import { Card_Game } from "../components/Card-Game/Card-Game";
import { Header } from "../components/Header";
import { getGames } from "../services/Game-service";
import styles from './Card.module.css'

export const GameLista = ({title}) => {
    return(
        <>
            <h2>{title}</h2>
            <div>
                
            </div>
        </>
    )
}

const App = () => {
    const [games, setGames] = useState([]);
    const [gamesFiltrados, setGamesFiltrado] = useState([]);
    const [termoBusca, setTermoBusca] = useState('');
  
    useEffect(() => {
      getGames().then((listaGame) => {
        const gamesF = listaGame.slice(0,12)
        setGames(gamesF);
        setGamesFiltrado(gamesF);
        console.log(gamesF)
      })
    }, []);
  
   useEffect(() => {
     if(termoBusca){
  
       const listaFiltrada = games.filter((game)=> termoBusca.toUpperCase().includes(game.title.toUpperCase()))
       setGamesFiltrado(listaFiltrada)
       return 
      }
      setGamesFiltrado(games)
   }, [termoBusca, games]);
  
  
  
    return (  
      <>
      <Header />
      
      <div>
        <input
          onChange={(event) => {
            setTermoBusca(event.target.value);
          }}
          type="text"
          placeholder="Digite o nome do Jogo"
          className={styles.input}
          />
  
        <ul className={styles.ul}>
          {gamesFiltrados.length === 0 
          ? 'Nenhum jogo encontrado'
          : gamesFiltrados.map((game) => <Card_Game key={game.id} game={game}/> )}          
        </ul>
      </div>
      </>
    ) 
  }        
        
  export default App;