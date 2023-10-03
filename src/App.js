import { useState } from "react";

import Header from "./components/Header";
import InputBar from "./components/InputBar";
import List from "./components/List";
import TaskCount from "./components/TaskCount";

import taskDB from './taskDB'
import './App.css'

function App() {

  const [tasks, setTasks] = useState(taskDB);

  // add a task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  // delete a task
  const deleteTask = (index) => {
    setTasks(
      tasks.filter((_, i) => i !== index)
    );
  }

  // move up the task
  const moveUpTask = (index) => {

    if (index === 0) return;
    else {
      const copyarray = [...tasks];

      const temp = copyarray[index - 1];
      copyarray[index - 1] = copyarray[index];
      copyarray[index] = temp;

      setTasks(copyarray);
    }

  }

  const moveDownTask = (index) => {

    const copyarray = [...tasks];
    if (index === copyarray.length - 1) return;
    else {
      const temp = copyarray[index + 1];
      copyarray[index + 1] = copyarray[index];
      copyarray[index] = temp;

      setTasks(copyarray);
    }
  }

  return (
    <>
      <Header />
      <InputBar addTask={addTask}></InputBar>
      <TaskCount tasks={tasks} />
      <List
        tasks={tasks}
        deleteTask={deleteTask}
        moveUpTask={moveUpTask}
        moveDownTask={moveDownTask}
      />
    </>
  );
}

export default App