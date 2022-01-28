import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Card_Noticias } from "./components/Card-Noticias/Card-Noticias";
import { getNoticias } from "./services/Noticias-services";
import styles from './components/Card-Noticias/Card-Noticias.module.css'
import { Card_Game } from "./components/Card-Game/Card-Game";

const App = () => {
  const [noticias, setNoticias] = useState([]);
  const [ noticiasFiltrados, setNoticiasFiltrado] = useState([]);
  const [termoBusca, setTermoBusca] = useState('');

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
     const listaFiltrada = noticias.filter((noticia)=> {
     return termoBusca.includes(noticia.title)})
     setNoticiasFiltrado(listaFiltrada)
     console.log(listaFiltrada)
     return 
    }
    setNoticiasFiltrado(noticias)
 }, [termoBusca, noticias]);



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
        />

      <ul className={styles.ul}>
        {noticiasFiltrados.length === 0 
        ? 'Nenhum jogo encontrado'
        : noticiasFiltrados.map((noticia) => <Card_Noticias key={noticia.id} noticia={noticia}/> )}          
      </ul>
    </div>
    </>
  ) 
}        
      
export default App;


