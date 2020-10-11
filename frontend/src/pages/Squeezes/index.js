import React , { useState, useEffect }from 'react';
import { Link } from "react-router-dom";


export default function Squeezes () {
   
    const [allSqueezes, setAllSqueezes] = useState([]);
  
 
  useEffect(() => {

    const getItens = async () => {

      const res = await fetch('http://localhost:3003/itens');
      // const res = await fetch('http://localhost:1337/Mosaicos/1');
      // const res = await fetch('https://mosaicopersonalizados.herokuapp.com/Mosaicos/1');

      const json = await res.json()

      const todosItens = json;

      const todosSqueezes = todosItens.squeezes.map(({id, nome, descricao, valor, linkMl, foto }) => {
        return { id, nome, descricao, valor,linkMl,foto };});


        setAllSqueezes(todosSqueezes)
        console.log(todosSqueezes);

     
    }

    //executando a função acima
    getItens();

  }, [])



    return (
      <div>

    
        
        <Link to="/home" id="home">
            <span>Home</span>
        </Link>


        <div>
            <span> Squeezes </span>
        </div>

      </div>
    )
    
}