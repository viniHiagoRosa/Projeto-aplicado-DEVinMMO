import { Routes, Route } from 'react-router-dom'
import { Game } from '../pages/Game/Game';
import { Games } from '../pages/games/Games'
import { Noticias } from '../pages/Noticias/Noticias'



export const Router = () => (
    <Routes>
        <Route path ='/' element={<Games />} />
        <Route path ='noticias' element={<Noticias />} />
        <Route path = 'detalhes/:id' element={<Game />} />
    </Routes>
);