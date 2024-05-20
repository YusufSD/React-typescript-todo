import { todoType } from "./apptype";

type PropsType = {
  taskProps: todoType;
  deleteTask(idDelete: number): void;
};

function TodoItem({ taskProps, deleteTask }: PropsType) {
  return (
    <div className="task">
      <p>{taskProps.taskName}</p>
      <p>{taskProps.workDay}</p>
      <button
        onClick={() => {
          deleteTask(taskProps.id);
        }}
      >
        Görevi Sil
      </button>
    </div>
  );
}

export default TodoItem;
