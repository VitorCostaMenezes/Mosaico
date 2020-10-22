import React , { useState, useEffect }from 'react';
import { Link } from "react-router-dom";
import RetornaItens from '../../components/RetornaItens';
import Pagina from '../Pagina';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroUnit from '../../components/HeroUnit';




export default function Canecas () {
   
  //   const [allCanecas, setAllCanecas] = useState([]);  ///  o segredo são as chaves
 
  // useEffect(() => {

  //   const getItens = async () => {

  //     const res = await fetch('http://localhost:3003/itens');
  //     // const res = await fetch('http://localhost:1337/Mosaicos/1');
  //     // const res = await fetch('https://mosaicopersonalizados.herokuapp.com/Mosaicos/1');
  //     const json = await res.json()

  //     const todosItens = json;

  //     // const todasCanecas = todosItens.canecas.map(({id, nome, descricao, valor, linkMl, foto }) => {
  //     //   return { id, nome, descricao, valor,linkMl,foto };});

  //       // setAllCanecas(todasCanecas);
  //       // console.log(todasCanecas);

  //       setAllCanecas(todosItens.canecas);
     
  //   }

  //   getItens();

  // }, [])


    return (
      <div>

        <Header />

      
        
        <Pagina  />

        <Footer />

      </div>
    )
    
}