import { useEffect, useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const LOCAL_STORAGE_KEY = "react-todos";
function App() {
  const [toDos, setToDos] = useState([
    {
      id: "0",
      task: "Read",
      completed: false,
    },
    {
      id: "1",
      task: "Meditate",
      completed: false,
    },
  ]);

  useEffect(() => {
    const storageToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageToDos) {
      setToDos(storageToDos);
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos));
  }, [toDos]);

  const addToDo = (toDo) => {
    setToDos([toDo, ...toDos]);
  };

  const toggleComplete = (id) => {
    setToDos(
      toDos.map((toDo) => {
        if (toDo.id === id) {
          return {
            ...toDo,
            completed: !toDo.completed,
          };
        }
        return toDo;
      })
    );
  };

  const removeToDo = (id) => {
    setToDos(
      toDos.filter((toDo) => {
        return toDo.id !== id;
      })
    );
  };

  return (
    <div className="App bg-slate-50 h-100 py-5">
      <h1 className="sm:text-3xl text-2xl font-medium my-3 text-slate-900">
        Add items to your list
      </h1>
      <ToDoForm addToDo={addToDo}></ToDoForm>
      <ToDoList
        toggleComplete={toggleComplete}
        removeToDo={removeToDo}
        toDos={toDos}
      />
    </div>
  );
}

export default App;
