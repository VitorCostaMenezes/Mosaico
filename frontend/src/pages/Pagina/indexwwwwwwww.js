import React, { useState, useEffect } from 'react';


export default function Paginasss() {

    const [allHome, setAllHome] = useState([]);  ///  o segredo são as chaves
    const [currentPage, setCurrentPage] = useState(1);  
    const [todosPerPage, setTodosPerPage] = useState(5);  

    useEffect(() => {

        const getItens = async () => {
    
        const res = await fetch('http://localhost:3003/itens');
          const json = await res.json()
    
          const todoshome = json;
    
          setAllHome(todoshome.home);
         
        }
    
        getItens();
    
      }, [])

    //   handleClick(event){
    //       setCurrentPage: Number(event.target.id)
       
    //   }


      // Logic for displaying current todos
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = allHome.slice(indexOfFirstTodo, indexOfLastTodo);
  
      const renderTodos = currentTodos.map(({nome, id, link, foto, foto2, foto3}) => {
        return <li key={id}>{nome}</li>;
      });
  
      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(allHome.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }
  
      const renderPageNumbers = pageNumbers.map((number) => {
        return (
          <li key={number} id={number} onClick={ (event) => setCurrentPage(Number(event.target.id))}>
            {number}
          </li>
        );
      });




    return (
        
        <div>
            <ul>{renderTodos}</ul>
            <ul id="page-numbers">{renderPageNumbers}</ul>
        </div>
            
        
    )
}





// console.clear();

// class TodoApp extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
//       currentPage: 1,
//       todosPerPage: 2
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }


//   handleClick(event) {
//     this.setState({
//       currentPage: Number(event.target.id)
//     });
//   }

//   render() {
//     const { todos, currentPage, todosPerPage } = this.state;

//     // Logic for displaying current todos
//     const indexOfLastTodo = currentPage * todosPerPage;
//     const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//     const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

//     const renderTodos = currentTodos.map((todo, index) => {
//       return <li key={index}>{todo}</li>;
//     });

//     // Logic for displaying page numbers
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
//       pageNumbers.push(i);
//     }

//     const renderPageNumbers = pageNumbers.map((number) => {
//       return (
//         <li key={number} id={number} onClick={this.handleClick}>
//           {number}
//         </li>
//       );
//     });

//     return (
//       <div>
//         <ul>{renderTodos}</ul>
//         <ul id="page-numbers">{renderPageNumbers}</ul>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<TodoApp />, document.getElementById("app"));