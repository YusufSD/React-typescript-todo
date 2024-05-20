import { ChangeEvent, FC } from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import { todoType } from "./apptype";
import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [day, setDay] = useState<number | string>("");
  const [todolist, setTodoList] = useState<todoType[]>([]);
  const [control, setControl] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      if (e.target.value > "0") {
        setDay(e.target.value);
      }
    }
  };

  const addNewTask = (): void => {
    if (task !== "" && day !== "") {
      const newTask = {
        id: Math.floor(Math.random() * 1000000),
        taskName: task,
        workDay: day,
      };
      setTodoList([...todolist, newTask]);
      setControl(false);
      setTask("");
      setDay("");
    } else {
      setControl(true);
      setTimeout(() => {
        setControl(false);
      }, 3000);
    }
  };

  const deleteTask = (idDelete: number): void => {
    setTodoList(
      todolist.filter((taskFilter) => {
        return taskFilter.id !== idDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="taskCard">
        <h3>TODO TASK</h3>
        <input
          type="text"
          name="task"
          value={task}
          placeholder="Task Giriniz"
          onChange={handleChange}
        />
        <input
          type="number"
          name="day"
          value={day}
          placeholder="Gün Giriniz"
          onChange={handleChange}
        />
        {control && (
          <div className="kontrol">*Lütfen Tüm Alanları Eksiksiz Doldurun</div>
        )}
        <button onClick={addNewTask}>Yeni Task Ekle</button>
      </div>

      <div className="TasksDiv">
        {todolist.map((task: todoType, index: number) => {
          return (
            <TodoItem key={index} taskProps={task} deleteTask={deleteTask} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
