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
        background-image: url('https://i.pinimg.com/originals/05/da/2a/05da2a8d0f95327244676edabfb7b72b.jpg');
        background-attachment: fixed;
    }
`