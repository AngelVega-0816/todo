import { create } from "zustand";
import {
  deleteTask,
  editTask,
  getTasks,
  TaskType,
} from "../service/tasks.service";

interface TaskStore {
  tasks: TaskType[];
  getTasks: () => void;
  editTask: (newTask: TaskType) => void;
  deleteTask: (idTask: number) => void;
  addTask: (task: TaskType) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  getTasks: async () => {
    try {
      const tasks = await getTasks();
      set(() => ({ tasks }));
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  editTask: async (newTask: TaskType) => {
    try {
      const taskUpdated = await editTask(newTask);
      set((state) => ({
        tasks: state.tasks?.map((task) => {
          if (task.id === taskUpdated.id) {
            return taskUpdated;
          } else {
            return task;
          }
        }),
      }));
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  deleteTask: async (idTask: number) => {
    try {
      await deleteTask(idTask);
      set((state) => ({
        tasks: state.tasks?.filter((task) => task.id !== idTask),
      }));
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  addTask: (task: TaskType) =>
    set((state) => ({ tasks: [...state.tasks, task] })),
}));

export default useTaskStore;
