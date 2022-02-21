export const  getNoticias = async () => {
    try{
        const response = await fetch("https://mmo-games.p.rapidapi.com/latestnews", {
            method: "GET",
            headers: {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key": "67d6bfb19fmsh0e33f43c1d09d2cp17ecb6jsn50f36d33e033"
            }
        })
        const listaNoticias = await response.json();
        return listaNoticias;        
    }catch(erro){
        console.error(erro.message);
    };
} 