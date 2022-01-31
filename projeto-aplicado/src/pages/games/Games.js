import { useEffect, useState } from "react";
import { getGames } from "../../services/Game-service";
import { Card_Game } from '../../components/Card-Game/'

export const Games = () => {
    const [termoBusca, setTermoBusca] = useState('');  
    const [games, setGames] = useState([]);
    const [ gamesFiltrados, setGamesFiltrado] = useState([]);
    useEffect(() => {
      getGames().then((listaGames) => {
        const gamesFilter = listaGames.slice(0,12)
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
        <input
          onChange={(event) => {
            setTermoBusca(event.target.value);
          }}
          type="text"
          placeholder="Digite o nome do Jogo"
          />
       
      
      
          <ul>
          {gamesFiltrados.length === 0 
          ? 'Nenhuma Noticia encontrada'
          : gamesFiltrados.map((game) => <Card_Game key={game.id} game={game}/> )}          
        </ul>
  
        </div>
     )

}