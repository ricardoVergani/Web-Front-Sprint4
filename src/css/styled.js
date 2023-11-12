import styled from "styled-components"



export const DivMain = styled.div`

    height: 70%;
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
        margin-top: 20px;
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
            line-height: 2em;
            color: white;
            margin: 3% 14%;
            font-family: Arial, Helvetica, sans-serif;
        }

        & ul{

            & li{
                margin: 1% 24%;
                font-family: Arial, Helvetica, sans-serif;
                line-height: 2em;
            }
        }
    }


`


export const DivMainHome = styled.div`  /*Conteúdo da Home */
    min-height: 78%;
    background-color: #212121;
    padding: 5% 28%;

    @media (max-width:1200px) {
        
        
    }


    & .divImg{
        display: flex;
        justify-items: center;

        & img{
            max-height: 100%;
            width: 100%;
        }
    }
`

export const DivApp = styled.div`

    min-height: 100vh;
    
`