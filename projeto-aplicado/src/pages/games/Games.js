import { useEffect, useState } from "react";
import { getGames } from "../../services/Games-service";
import { CardGame } from '../../components/Card-Game/'
import { Busca, Ul } from './games.styled'

export const Games = () => {
    const [termoBusca, setTermoBusca] = useState('');  
    const [games, setGames] = useState([]);
    const [ gamesFiltrados, setGamesFiltrado] = useState([]);
  
    
    useEffect(() => {
      getGames().then((listaGames) => {
        const gamesFilter = listaGames
        setGames(gamesFilter);
        setGamesFiltrado(gamesFilter);
        console.log(gamesFilter)
      })
    }, []);

    useEffect(() => {
     if(termoBusca){
      const listaFiltrada = games.filter((game) =>
      game.title.toUpperCase().includes(termoBusca.toUpperCase()))
       setGamesFiltrado(listaFiltrada)          
      }else{
        setGamesFiltrado(games)
      }
      }, [termoBusca, games]);

    return (
        <div>
        <Busca
          onChange={(event) => {
            setTermoBusca(event.target.value);
          }}
          type="text"
          placeholder="Digite o nome do Jogo"
          />  
        <Ul>            
          {gamesFiltrados.length === 0 
          ? 'Nenhuma Noticia encontrada'
          : gamesFiltrados.map((game) =>                       
            <CardGame key={game.id} game={game}  />              
          )}          
        </Ul>
  
        </div>
     )
}