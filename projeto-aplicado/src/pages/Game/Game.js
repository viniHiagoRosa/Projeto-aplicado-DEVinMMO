import { useEffect, useState } from "react"
import { getGame } from "../../services/Game-service";
import { Descricao, Detalhes, Img, ImgScreen, Paragrafo, PDetalhes, ScreeenShots, SpaceScreen, thumbnailDetalhe, TitleDetalhe } from "./Game.styled";

export const Game = () => {
    const [ detalhes, setDetalhes ] = useState({});
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        getGame().then((gameDetalhes => {
            const gameFiltro = gameDetalhes
            setDetalhes(gameFiltro)
            console.log(gameFiltro)
            setCarregando(false)      
        }))
    }, [])

    if(carregando){
        return <p>Carregando...</p>
        
    }

   

    return(
        
        <Detalhes>
            <div>
                
            <TitleDetalhe>
                {detalhes.title}    
            </TitleDetalhe>  
            <Img src={detalhes.thumbnail} />
                <PDetalhes>        
                    <Paragrafo>Editora: {detalhes.publisher}</Paragrafo> 
                    <Paragrafo>Genêro: {detalhes.genre}</Paragrafo>
                </PDetalhes>
                <Descricao>
                    <Paragrafo >{detalhes.short_description}</Paragrafo >
                </Descricao>
            </div>
            <SpaceScreen>

                {detalhes?. screenshots?.length && (<ScreeenShots src={detalhes.screenshots[0].image} alt={detalhes.title} />)}
                <div>

                {detalhes?. screenshots?.length && (<ImgScreen src={detalhes.screenshots[1].image} alt={detalhes.title} />)}
                {detalhes?. screenshots?.length && (<ImgScreen src={detalhes.screenshots[2].image} alt={detalhes.title} />)}
                {detalhes?. screenshots?.length && (<ImgScreen src={detalhes.screenshots[3].image} alt={detalhes.title} />)}
            
                </div>
            </SpaceScreen>
              
        </Detalhes>
        
        
        
       
        )
    }