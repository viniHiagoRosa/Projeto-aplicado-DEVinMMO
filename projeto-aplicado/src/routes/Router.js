import { Routes, Route } from 'react-router-dom'
import { Games } from '../pages/games/Games'
import { Noticias } from '../pages/Noticias/Noticias'


export const Router = () => (
    <Routes>
        <Route path ='/' element={<Games />} />
    </Routes>
);