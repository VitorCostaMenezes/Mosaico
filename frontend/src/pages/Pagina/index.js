import React, { useState, useEffect} from 'react';
import CardCanecas from '../../components/CardCanecas';
import CSS from './styles.css'



export default function Pagina() {

    // const [todos, setSotodos] = useState(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']);
    const [todos, setSotodos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage, setTodosPerPage] = useState(9);
    const [upperPageBound, setUpperPageBound] = useState(3);
    const [lowerPageBound, setLowerPageBound] = useState(0);
    const [isPrevBtnActive, setIsPrevBtnActive] = useState('disabled');
    const [isNextBtnActive, setIsNextBtnActive ] = useState('');
    const [ pageBound, setPageBound] = useState(3);


   

    useEffect(() => {

        const getItens = async () => {
    
          const res = await fetch('http://localhost:3003/itens');
          
          const json = await res.json()
    
          const todosItens = json;
    
            setSotodos(todosItens.canecas);


            const teste = document.querySelector("ul li.active");
            // const teste2 = document.querySelector('ul li#'+ currentPage);
            // const teste2 = document.querySelector(`ul li#tt${currentPage}`);
            const teste2 = document.querySelector(`ul li`);
                
            // document.querySelectorAll("ul li.active").removeClass('active');
            // document.querySelector('ul li#'+ currentPage).addClass('active');
    
            teste.classList.remove('active');
            teste2.classList.add('active' );

         
        }
    
        getItens();
    
      }, [])



 
    // useEffect( () => {

    //    const getItens = async () => {
       
    //     const teste = document.querySelector("ul li.active");
    //     // const teste2 = document.querySelector('ul li#'+ currentPage);
    //     const teste2 = document.querySelector(`ul li`);
            
    //     // document.querySelectorAll("ul li.active").removeClass('active');
    //     // document.querySelector('ul li#'+ currentPage).addClass('active');

    //     teste.classList.remove('active');
    //     teste2.classList.add('active');
    //     }
    
    //    getItens();
    
    //   })
    

    


    function handleClick(event) {

      let listid = Number(event.target.id);
        setCurrentPage(listid)

        const teste = document.querySelector("ul li.active");
        // const teste2 = document.querySelector(`ul li#tt${currentPage}` );
        const teste2 = document.querySelector(`ul li` );
            
        // teste.classList.remove('active');
        teste2.classList.add('active');


        // document.querySelector("ul li.active").removeClass('active');
        // document.querySelector('ul li#'+listid).addClass('active');
        setPrevAndNextBtnClass(listid);
    }
   


    function setPrevAndNextBtnClass(listid) {

      let totalPage = Math.ceil(todos.length / todosPerPage);

      setIsNextBtnActive('disabled');
      setIsPrevBtnActive('disabled') ;


      if(totalPage === listid && totalPage > 1){

          setIsPrevBtnActive('');

      }
      else if(listid === 1 && totalPage > 1){

          setIsNextBtnActive('');
      }

      else if(totalPage > 1){
          setIsNextBtnActive('');
          setIsPrevBtnActive('');
      }
  }
  
  function  btnIncrementClick() {


        setUpperPageBound(upperPageBound + pageBound);
        setLowerPageBound(lowerPageBound + pageBound);
        let listid = upperPageBound + 1;
        setCurrentPage(listid);
        setPrevAndNextBtnClass(listid);
  };


  function   btnDecrementClick() {
      setUpperPageBound(upperPageBound - pageBound);
      setLowerPageBound(lowerPageBound - pageBound);
      let listid = upperPageBound - pageBound;
      setCurrentPage(listid);
      setPrevAndNextBtnClass(listid);
  };


  function btnPrevClick() {
      if((currentPage -1)%pageBound === 0 ){
          setUpperPageBound(upperPageBound - pageBound);
          setLowerPageBound(lowerPageBound - pageBound);
      }
      let listid = currentPage - 1;
      setCurrentPage(listid);
      setPrevAndNextBtnClass(listid);
  };


  function btnNextClick() {
      if((currentPage +1) > upperPageBound ){
          setUpperPageBound(upperPageBound + pageBound);
          setLowerPageBound(lowerPageBound + pageBound);
      }
      let listid = currentPage + 1;
      setCurrentPage(listid);
      setPrevAndNextBtnClass(listid);
  };




     
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);





    //   const renderTodos = currentTodos.map((todo, index) => {
    //   const renderTodos = currentTodos.map((infos) => {
    //     // return <li key={id}>{nome} </li>;

    //     return  <CardCanecas infos={infos} /> ;
    //   });


    // const renderTodos = currentTodos;




      
      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
        pageNumbers.push(i);
      };

      const renderPageNumbers = pageNumbers.map(number => {
          if(number === 1 && currentPage === 1){
              return(
                  <li key={number} className='active' id={number}><a href='#' id={number} onClick={handleClick}>{number}</a></li>
              )
          }
          else if((number < upperPageBound + 1) && number > lowerPageBound){
              return(
                  <li key={number} id={number}><a href='#' id={number} onClick={handleClick}>{number}</a></li>
              )
          }
      });
      let pageIncrementBtn = null;
      if(pageNumbers.length > upperPageBound){
          pageIncrementBtn = <li className=''><a href='#' onClick={btnIncrementClick}> &hellip; </a></li>
      }
      let pageDecrementBtn = null;
      if(lowerPageBound >= 1){
          pageDecrementBtn = <li className=''><a href='#' onClick={btnDecrementClick}> &hellip; </a></li>
      }
      let renderPrevBtn = null;
      if(isPrevBtnActive === 'disabled') {
          renderPrevBtn = <li className={isPrevBtnActive}><span id="btnPrev"> Prev </span></li>
      }
      else{
          renderPrevBtn = <li className={isPrevBtnActive}><a href='#' id="btnPrev" onClick={btnPrevClick}> Prev </a></li>
      }
      let renderNextBtn = null;
      if(isNextBtnActive === 'disabled') {
          renderNextBtn = <li className={isNextBtnActive}><span id="btnNext"> Next </span></li>
      }
      else{
          renderNextBtn = <li className={isNextBtnActive}><a href='#' id="btnNext" onClick={btnNextClick}> Next </a></li>
      }
      return (
        <div>
          {/* <ul> */}
            {/* {renderTodos} */}
          {/* </ul> */}

            <CardCanecas infos={currentTodos} />

        <div className="paginar">

          <ul className="pagination">
            {renderPrevBtn}
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
            {renderNextBtn}
          </ul>
        </div>
        </div>
      );

      }
    

     
  

// import React, { Component } from 'react'

// export default class TodoApp extends Component {
//         constructor() {
//           super();
//           this.state = {
//             todos: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
//             currentPage: 1,
//             todosPerPage: 3,
//             upperPageBound: 3,
//             lowerPageBound: 0,
//             isPrevBtnActive: 'disabled',
//             isNextBtnActive: '',
//             pageBound: 3
//           };
//           this.handleClick = this.handleClick.bind(this);
//           this.btnDecrementClick = this.btnDecrementClick.bind(this);
//           this.btnIncrementClick = this.btnIncrementClick.bind(this);
//           this.btnNextClick = this.btnNextClick.bind(this);
//           this.btnPrevClick = this.btnPrevClick.bind(this);
//           // this.componentDidMount = this.componentDidMount.bind(this);
//           this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
//         }
//         componentDidUpdate() {
//               ("ul li.active").removeClass('active');
//               ('ul li#'+this.state.currentPage).addClass('active');
//         }
//         handleClick(event) {
//           let listid = Number(event.target.id);
//           this.setState({
//             currentPage: listid
//           });
//           ("ul li.active").removeClass('active');
//           ('ul li#'+listid).addClass('active');
//           this.setPrevAndNextBtnClass(listid);
//         }
//         setPrevAndNextBtnClass(listid) {
//           let totalPage = Math.ceil(this.state.todos.length / this.state.todosPerPage);
//           this.setState({isNextBtnActive: 'disabled'});
//           this.setState({isPrevBtnActive: 'disabled'});
//           if(totalPage === listid && totalPage > 1){
//               this.setState({isPrevBtnActive: ''});
//           }
//           else if(listid === 1 && totalPage > 1){
//               this.setState({isNextBtnActive: ''});
//           }
//           else if(totalPage > 1){
//               this.setState({isNextBtnActive: ''});
//               this.setState({isPrevBtnActive: ''});
//           }
//       }
//         btnIncrementClick() {
//             this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
//             this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
//             let listid = this.state.upperPageBound + 1;
//             this.setState({ currentPage: listid});
//             this.setPrevAndNextBtnClass(listid);
//       }
//         btnDecrementClick() {
//           this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
//           this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
//           let listid = this.state.upperPageBound - this.state.pageBound;
//           this.setState({ currentPage: listid});
//           this.setPrevAndNextBtnClass(listid);
//       }
//       btnPrevClick() {
//           if((this.state.currentPage -1)%this.state.pageBound === 0 ){
//               this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
//               this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
//           }
//           let listid = this.state.currentPage - 1;
//           this.setState({ currentPage : listid});
//           this.setPrevAndNextBtnClass(listid);
//       }
//       btnNextClick() {
//           if((this.state.currentPage +1) > this.state.upperPageBound ){
//               this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
//               this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
//           }
//           let listid = this.state.currentPage + 1;
//           this.setState({ currentPage : listid});
//           this.setPrevAndNextBtnClass(listid);
//       }
//         render() {
//           const { todos, currentPage, todosPerPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;
//           // Logic for displaying current todos
//           const indexOfLastTodo = currentPage * todosPerPage;
//           const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//           const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  
//           const renderTodos = currentTodos.map((todo, index) => {
//             return <li key={index}>{todo}</li>;
//           });
  
//           // Logic for displaying page numbers
//           const pageNumbers = [];
//           for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
//             pageNumbers.push(i);
//           }
  
//           const renderPageNumbers = pageNumbers.map(number => {
//               if(number === 1 && currentPage === 1){
//                   return(
//                       <li key={number} className='active' id={number}><a href='#' id={number} onClick={this.handleClick}>{number}</a></li>
//                   )
//               }
//               else if((number < upperPageBound + 1) && number > lowerPageBound){
//                   return(
//                       <li key={number} id={number}><a href='#' id={number} onClick={this.handleClick}>{number}</a></li>
//                   )
//               }
//           });
//           let pageIncrementBtn = null;
//           if(pageNumbers.length > upperPageBound){
//               pageIncrementBtn = <li className=''><a href='#' onClick={this.btnIncrementClick}> &hellip; </a></li>
//           }
//           let pageDecrementBtn = null;
//           if(lowerPageBound >= 1){
//               pageDecrementBtn = <li className=''><a href='#' onClick={this.btnDecrementClick}> &hellip; </a></li>
//           }
//           let renderPrevBtn = null;
//           if(isPrevBtnActive === 'disabled') {
//               renderPrevBtn = <li className={isPrevBtnActive}><span id="btnPrev"> Prev </span></li>
//           }
//           else{
//               renderPrevBtn = <li className={isPrevBtnActive}><a href='#' id="btnPrev" onClick={this.btnPrevClick}> Prev </a></li>
//           }
//           let renderNextBtn = null;
//           if(isNextBtnActive === 'disabled') {
//               renderNextBtn = <li className={isNextBtnActive}><span id="btnNext"> Next </span></li>
//           }
//           else{
//               renderNextBtn = <li className={isNextBtnActive}><a href='#' id="btnNext" onClick={this.btnNextClick}> Next </a></li>
//           }
//           return (
//             <div id="app">
//               <ul>
//                 {renderTodos}
//               </ul>
//               <ul className="pagination">
//                 {renderPrevBtn}
//                 {pageDecrementBtn}
//                 {renderPageNumbers}
//                 {pageIncrementBtn}
//                 {renderNextBtn}
//               </ul>
//             </div>
//           );
//         }
//       }

// ReactDOM.render(
//     <TodoApp />,
//     document.getElementById('app')
//   );
