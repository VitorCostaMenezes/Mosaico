import React , { useState, useEffect }from 'react';
import { Link } from "react-router-dom";
import RetornaItens from '../../components/RetornaItens';
// import Album from '../../components/Teste';


export default function Canecas () {
   
    const [allCanecas, setAllCanecas] = useState([]);  ///  o segredo são as chaves
 
  useEffect(() => {

    const getItens = async () => {

      const res = await fetch('http://localhost:3003/itens');
      const json = await res.json()

      const todosItens = json;

      // const todasCanecas = todosItens.canecas.map(({id, nome, descricao, valor, linkMl, foto }) => {
      //   return { id, nome, descricao, valor,linkMl,foto };});


        // setAllCanecas(todasCanecas);
        // console.log(todasCanecas);


        setAllCanecas(todosItens.canecas);

     
    }

    //executando a função acima
    getItens();

  }, [])



    return (
      <div>

    
        
        <Link to="/home" id="home">
            <span>  Home </span>
        </Link>


        {/* <div>
            <span>  {allCanecas.map(({ id, nome, descricao, valor, linkMl, foto }) => {

                    return (
                      <label key={id}>      
                        
                        <span>Nome: {nome}</span> <br />
                        <span>Descricao: {descricao}</span><br />
                        <span>Valor: {valor}</span><br />
                        <span>Foto: {foto.im1}</span><br />
                        <span>link ML: {linkMl}</span><br /><br /><br />
      
                      </label>
                    );
                    })} </span>
        </div> */}

          <RetornaItens iten={allCanecas} /> 

          {/* <Album iten={allCanecas} /> */}


      </div>
    )
    
}