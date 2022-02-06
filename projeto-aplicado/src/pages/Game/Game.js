import { useEffect, useState } from "react"
import { getGame } from "../../services/Game-service";
import {  Descricao, Detalhes, Img, ImgScreen, Paragrafo, PDetalhes, ScreeenShots, SpaceScreen, TitleDescription, TitleDetalhe } from "./Game.styled";
import { Formulario } from "../../components/Formulario";
import { useParams } from "react-router-dom";

export const Game = () => {
    const [ detalhes, setDetalhes ] = useState({});
    const [carregando, setCarregando] = useState(true);
    const { id } = useParams()
    

    useEffect(() => {
        getGame(id).then((gameDetalhes => {
            const gameFiltro = gameDetalhes
            setDetalhes(gameFiltro)
            console.log(gameFiltro)
            setCarregando(false)      
                
            
                
        }))
    }, [])  

    console.log(carregando, detalhes)

    if(carregando){
        return <p>Carregando...</p>
        
    }
    return(
        <>
        <Detalhes>
            <div>
                
            <TitleDetalhe>
                {detalhes.title}    
            </TitleDetalhe>  
            <Img src={detalhes.thumbnail} />
                <PDetalhes>  
                    <div>
                        <TitleDescription>Editora</TitleDescription>
                    <Paragrafo>{detalhes.publisher}</Paragrafo> 
                    </div>   
                    <div>
                    <TitleDescription> Genero</TitleDescription>
                    <Paragrafo>{detalhes.genre}</Paragrafo>
                    </div>   
                </PDetalhes>
                <Descricao>
                <TitleDescription> Descrição </TitleDescription> 
                    <Paragrafo > {detalhes.short_description}</Paragrafo >

                <TitleDescription>Requisitos do Sistema </TitleDescription>
                <Paragrafo > Sistema Operacional: {detalhes.minimum_system_requirements.os}</Paragrafo>
                <Paragrafo > Processador: {detalhes.minimum_system_requirements.processor}</Paragrafo>
                <Paragrafo > Memória: {detalhes.minimum_system_requirements.memory}</Paragrafo>
                <Paragrafo > Gráficos: {detalhes.minimum_system_requirements.graphics}</Paragrafo>
                <Paragrafo > Espaço de disco: {detalhes.minimum_system_requirements.storage}</Paragrafo>
                </Descricao>
            </div>
            <SpaceScreen>

                {detalhes?.screenshots?.length && (<ScreeenShots src={detalhes.screenshots[0].image} alt={detalhes.title} />)}
                <div>
    
                {detalhes?.screenshots?.length && (<ImgScreen src={detalhes.screenshots[1].image} alt={detalhes.title} />)}
                {detalhes?.screenshots?.length && (<ImgScreen src={detalhes.screenshots[2].image} alt={detalhes.title} />)}
                {detalhes?.screenshots?.length && (<ImgScreen src={detalhes.screenshots[3].image} alt={detalhes.title} />)}
            
                </div>
            </SpaceScreen>              
        </Detalhes>
        <Formulario />      

        </>   
        )
    }