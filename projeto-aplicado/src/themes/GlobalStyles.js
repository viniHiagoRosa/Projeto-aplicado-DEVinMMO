import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
    }

    html {
        font-family: 'Montserrat';
    }

    body{
        background-image: url('http://static.marriedgames.com.br/CapaPost.png');
    }
`