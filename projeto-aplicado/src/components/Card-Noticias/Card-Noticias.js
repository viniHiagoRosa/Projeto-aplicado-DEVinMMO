import { Botao, Card, Descricao, Imagem, Notas, Noticia, Title } from "./Card-Noticias.styled";


export const Card_Noticias = ({noticia}) => {
    return(
    <div >
      <Noticia>        
        <Card>
          <Notas>
          <Botao href={noticia.article_url} target="_blank" >
            <Imagem src={noticia.main_image} alt={noticia.title}/>
            
              <Title>{noticia.title}</Title>
              <Descricao> {noticia.short_description}</Descricao>
                       
           </Botao>
          </Notas>
          
        </Card>               
      </Noticia>      
    </div>      
    );    
  };