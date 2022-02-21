import styled from "styled-components"

export const Li = styled.li`
    display: flex;
    margin-bottom: 15px;
    list-style: none;
    
`

export const Img = styled.img`    
    width: 220px;
    &:hover{
        width: 250px;
        transition: ease 0.3s
    }
`

export const Main = styled.main`
    justify-content: center;
    color:black;    
    margin: auto;
    cursor: pointer;
   
`

export const Container = styled.div`
    margin: 20px;
    border: 1px solid #111;
    border-radius: 3px;
    max-width: 300px;
    background:rgb(178, 189, 201);
    
`
export const P = styled.p`
    font-weight: bold;
    text-align: center;
    padding: 5px;
    max-width: 200px;
`




