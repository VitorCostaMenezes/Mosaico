import React , { useState, useEffect }from 'react';
import { Link } from "react-router-dom";


export default function Camisas () {
   
  const [allCamisas, setAllCamisas] = useState([]);
 
  useEffect(() => {

    const getItens = async () => {

      const res = await fetch('http://localhost:3003/itens');
      const json = await res.json()

      const todosItens = json;

      const todasCamisas = todosItens.camisas.map(({id, nome, descricao, valor, linkMl, foto }) => {
          return { id, nome, descricao, valor,linkMl,foto };});


      setAllCamisas(todasCamisas)
      console.log(todasCamisas);

     
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
            <span> Camisas </span>
        </div>

      </div>
    )
    
}