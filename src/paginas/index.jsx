import { Button, Container, Flex, Input, Item, Spacer } from "../components"

import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faTrash } from '@fortawesome/free-solid-svg-icons'





function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);

  const DeleteAll = () => {
    
    if (!setListTask([])) return alert("Nenhuma tarefa para excluir");
    setListTask([])
  }
  
 

  const addTask = () => {
    if (!task) return alert("Preencha uma tarefa");
    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    };
    setListTask([...listTask, newTask]);
    setTask("");
  };

  const removeTask = (id) => {
    const newList = listTask.filter((task) => task.id !== id);
    setListTask(newList);
  };

  const toggleChecked = (id, checked) => {
    const index = listTask.findIndex((task) => task.id === id);
    const newList = listTask;
    newList[index].checked = !checked;
    setListTask([...newList]);
  };

  return (
    <Container>
      <h1 className="title">TODO LIST</h1>
      <Spacer />

      <Flex direction="row">
      <Button className="text-light" onClick={DeleteAll}>
                APAGAR TUDO </Button>
        <Input
          value={task}
          placeholder="Digite sua tarefa"
          onChange={(e) => setTask(e.target.value)}
        />
        <Button  onClick={addTask}>Adicionar</Button>
      
      </Flex>
      <Spacer margin="16px" />

      <ul>
        {listTask.map((task) => (
          <>
            <Item Item checked={task.checked} key={task.id}>
              <p>{task.task}</p>
              <Flex direction="row">
                <Button className="text-dark" onClick={() => toggleChecked(task.id, task.checked)}>
               CONCLUÍDA <FontAwesomeIcon icon={faListCheck}/>
                </Button>
                <Button className="text-dark" onClick={() => removeTask(task.id)}>
                APAGAR <FontAwesomeIcon icon={faTrash}/>
                </Button>
                
              </Flex>
            </Item>
            <Spacer margin="12px" />
          </>
        ))}
      </ul>
    </Container>
  );
}

export default App;