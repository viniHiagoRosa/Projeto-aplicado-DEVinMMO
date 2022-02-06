import styled from "styled-components"

export const FooterDiv = styled.div`
    background :rgba(241, 241, 241, 1);
    display: flex;
    padding: 10px;
    margin-top : 10px;
    align-items : center;
    justify-content : center;
`

export const Img = styled.img`
    width: 50px;
    margin: 5px;
    &:hover{
        width: 55px;
        transition: ease 0.2s
    }
`