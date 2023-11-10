import styled from "styled-components"


export const DivMain = styled.div`

    background-color: gold;
    display: flex;
    flex-direction: column;
    padding: 30px;
    justify-content: center;

    & h1{
        text-align: center;
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
        }
    }
`