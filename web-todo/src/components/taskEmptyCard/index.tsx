import { ChangeEvent } from "react";
import BaseCard from "../baseCard";
import InputText from "../inputText";
import { saveTask } from "../../service/tasks.service";
import useTaskStore from "../../store/taskStore";

const TaskEmptyCard = ({ occupiedSides }: { occupiedSides: string }) => {
  const { addTask } = useTaskStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    saveTask({ title, description })
      .then((res) => {
        addTask(res);
      })
      .catch((err) => console.log("Hubo un error", err));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <BaseCard
      occupiedSides={occupiedSides}
      custom={{
        border: ({ palette }) => `2px dashed ${palette.secondary.main}`,
      }}
      children={
        <form onSubmit={handleSubmit}>
          <InputText getChanges={handleChange} name="title" />
          <InputText maxRows={5} getChanges={handleChange} name="description" />
          <button type="submit">GUARDAR</button>
        </form>
      }
    />
  );
};

export default TaskEmptyCard;
