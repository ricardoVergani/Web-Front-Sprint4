import styled from "styled-components"


export const DivMain = styled.div`

    height: 100vh;
    background-color: #212121;
    display: flex;
    flex-direction: column;
    padding: 30px;
    justify-content: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 23px;
    text-align: justify;
    color: white;
    

    & h1{
        text-align: center;
        color: white;
    }

    & .divImg{
        display: flex;
        justify-content: center;
        height: 30%;
        margin: 30px;

        & img{
            border-radius: 10px;
        }
    }

    & .conteudo{

        & p{
            text-align: justify;
            text-indent: 20px;
            line-height: 2;
            color: white;
        }
    }


`


export const DivMainHome = styled.div`  /*Conteúdo da Home */
    height: 78%;
    background-color: #212121;
    padding: 5% 28%;
`