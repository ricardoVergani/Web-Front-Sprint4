import { useState } from "react"
import Modal from "./Modal"




export default function Teste(){

    const[open, setOpen] = useState(false)




    return(
        <div>
            <h1> Cabecalho </h1>
            <Modal open = {open} setClose={setOpen}/>
            <button onClick={()=> setOpen(true)}> Modal Abrir </button>

            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptas optio fugiat laborum fuga, consectetur sint suscipit assumenda adipisci totam quae, maxime pariatur quos, cumque alias nostrum necessitatibus repudiandae culpa qui maiores iste quo ipsa. Harum sint, sit laborum eligendi perferendis maiores sapiente aperiam deserunt culpa earum omnis esse reprehenderit.</p>
        </div>
    )
}