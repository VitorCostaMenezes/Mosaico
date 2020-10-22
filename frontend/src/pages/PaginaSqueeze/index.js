import React, { useState, useEffect} from 'react';
import CardSqueezes from '../../components/CardSqueezes';
import CSS from './styles.css'




export default function PaginaSqueeze() {

    const [todos, setSotodos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage, setTodosPerPage] = useState(6);
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
    
            setSotodos(todosItens.squeezes);


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



    function handleClick(event) {

      let listid = Number(event.target.id);
        setCurrentPage(listid)

        const teste = document.querySelector("ul li.active");
        const teste2 = document.querySelector(`ul li` );
            
        teste2.classList.add('active');


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

            <CardSqueezes infos={currentTodos} />

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
    

     
