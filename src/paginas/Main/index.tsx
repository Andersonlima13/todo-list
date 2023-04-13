import React, { useState } from "react";
//import Button from "../../components/Button";
import './styles.css'


const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [todolist, settodolist] = useState<string[]>([]);

  const handleAddClick = () => {
    settodolist([ ...todolist, inputValue]) //...(spread) vai continuar adicionando itens ao array, // sem ele o valor seria substituido, guardando apenas um valor (inputvalue) é o novo valor
    setInputValue('')
  };
  const handleClear = () => {
    settodolist([])
  }
  





    return (
        <div className="container">
         <h1 className="title text-light"> Adicionar Tarefa</h1>
          <div className="form">
            <input className='todo-input' type="text" placeholder="Adicionar Uma Tarefa"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            />
            <button onClick={handleAddClick} className='botao'> + </button>    
          </div>
          <div className='todo-list'>
            <ul>
            {todolist.map((todo) => 
            <li onClick={() => DeleteItem(todo.id)} className='list-item text-light'> {todo}</li>)
            }
            </ul>
          </div>
          <div className="tarefas">
          
            <h2>
              voce tem {todolist.length} tarefas pendentes
            </h2>
            <button className="delete text-light" onClick={handleClear}> <i className="fa-solid fa-trash"></i>  </button>
    
          </div>
        </div>
    );
}

export default Main;