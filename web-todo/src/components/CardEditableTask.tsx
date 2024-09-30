import useTaskStore from "../store/taskStore";
import TaskCard from "./TaskCard";

interface TaskType {
  description: string;
  title: string;
  id: number;
  occupiedSides?: string;
  editable?: boolean;
}

const CardEditableTask = ({ ...rest }: TaskType) => {
  const { editTask } = useTaskStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    if (title === rest.title && description === rest.description) {
      console.log("No se puede actualizar con los mismos valores");
    } else {
      editTask({ title, description, id: rest.id });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TaskCard {...rest} />
    </form>
  );
};

export default CardEditableTask;
