export const getGame = async (id) => {
  try{
      const response = await fetch(`https://mmo-games.p.rapidapi.com/game?id=${id}`, {
              method: "GET",
              headers: {
                  "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                  "x-rapidapi-key": "67d6bfb19fmsh0e33f43c1d09d2cp17ecb6jsn50f36d33e033"
                }
            })
           const gameDetalhes = await response.json();
           return gameDetalhes
           
        
}catch(erro){
            console.error(erro.message);
        };
} 