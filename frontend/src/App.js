import React from 'react';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;




// import React, { useState, useEffect } from 'react';


// export default function App () {

//   const [allCanecas, setAllCanecas] = useState([]);
//   const [allCamisas, setAllCamisas] = useState([]);
//   const [allSqueezes, setAllSqueezes] = useState([]);
//   const [allAdesivos, setAllAdesivos] = useState([]);



//   useEffect(() => {

//     const getItens = async () => {

//       const res = await fetch('http://localhost:3003/itens');
//       const json = await res.json()

//       const todosItens = json;

//       const todasCanecas = todosItens.canecas.map(({id, nome, descricao, valor, linkMl, foto }) => {
//           return { id, nome, descricao, valor,linkMl,foto };});

//       const todosSqueezes = todosItens.squeezes.map(({id, nome, descricao, valor, linkMl, foto }) => {
//           return { id, nome, descricao, valor,linkMl,foto };});

//       const todasCamisas = todosItens.camisas.map(({id, nome, descricao, valor, linkMl, foto }) => {
//           return { id, nome, descricao, valor,linkMl,foto };});

//       const todosAdesivos = todosItens.adesivos.map(({id, nome, descricao, valor, linkMl, foto }) => {
//           return { id, nome, descricao, valor,linkMl,foto };});


//       setAllCanecas(todasCanecas);
//       console.log(todasCanecas);

//       setAllSqueezes(todosSqueezes)
//       console.log(todosSqueezes);

//       setAllCamisas(todasCamisas)
//       console.log(todasCamisas);

//       setAllAdesivos(todosAdesivos)
//       console.log(todosAdesivos);
//     }

//     //executando a função acima
//     getItens();

//   }, [])






//     return (
//       <div>
//         testetetetete
//       </div>
//     )
    
// }