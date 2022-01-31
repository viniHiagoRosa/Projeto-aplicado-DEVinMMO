import { useEffect, useState } from "react";
import { Card_Noticias } from "../../components/Card-Noticias/Card-Noticias";
import { getNoticias } from "../../services/Noticias-services";

export const Noticias = () => {
  const [termoBusca, setTermoBusca] = useState('');  
  const [noticias, setNoticias] = useState([]);
  const [ noticiasFiltrados, setNoticiasFiltrado] = useState([]);

  useEffect(() => {
    getNoticias().then((listaNoticias) => {
      const noticiasFilter = listaNoticias.slice(0,12)
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
      <input
        onChange={(event) => {
          setTermoBusca(event.target.value);
        }}
        type="text"
        placeholder="Digite o nome do Jogo"
        />
     
    
    
        <ul>
        {noticiasFiltrados.length === 0 
        ? 'Nenhuma Noticia encontrada'
        : noticiasFiltrados.map((noticia) => <Card_Noticias key={noticia.id} noticia={noticia}/> )}          
      </ul>

      </div>
    )
}