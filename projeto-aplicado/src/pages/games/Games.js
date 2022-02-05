import { useEffect, useState } from "react";
import { getGames } from "../../services/Games-service";
import { Card_Game } from '../../components/Card-Game/'
import { Busca, Ul } from './games.styled'
import { Link,  useNavigate,  useParams } from "react-router-dom";

export const Games = () => {
    const [termoBusca, setTermoBusca] = useState('');  
    const [games, setGames] = useState([]);
    const [ gamesFiltrados, setGamesFiltrado] = useState([]);

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      getGames().then((listaGames) => {
        const gamesFilter = listaGames.slice(0,16)
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
          
          
          <Link to={`detalhes/${id}`}>
          
            <Card_Game key={game.id} game={game}/> {id}

          </Link>
          
          
          )}          
        </Ul>
  
        </div>
     )
}