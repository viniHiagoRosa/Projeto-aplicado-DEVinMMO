import { useEffect, useState } from "react";
import { Card_Noticias } from "../../components/Card-Noticias/Card-Noticias";
import { getNoticias } from "../../services/Noticias-services";
import { Ul } from "../games/games.styled";
import { Busca } from "./Noticias.styled";

export const Noticias = () => {
  const [termoBusca, setTermoBusca] = useState('');  
  const [noticias, setNoticias] = useState([]);
  const [ noticiasFiltrados, setNoticiasFiltrado] = useState([]);

  useEffect(() => {
    getNoticias().then((listaNoticias) => {
      const noticiasFilter = listaNoticias.slice(0,9)
      setNoticias(noticiasFilter);
      setNoticiasFiltrado(noticiasFilter);
      console.log(noticiasFilter)
    })
  }, []);

 useEffect(() => {
   if(termoBusca){
    const listaFiltrada = noticias.filter((noticia) =>
    noticia.title.toUpperCase().includes(termoBusca.toUpperCase()))
     setNoticiasFiltrado(listaFiltrada)          
    }else{
      setNoticiasFiltrado(noticias)
    }
    }, [termoBusca, noticias]);

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
        {noticiasFiltrados.length === 0 
        ? 'Nenhuma Noticia encontrada'
        : noticiasFiltrados.map((noticia) => <Card_Noticias key={noticia.id} noticia={noticia}/> )}          
      </Ul>

      </div>
    )
}