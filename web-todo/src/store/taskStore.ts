import { create } from "zustand";
import { getTasks, TaskType } from "../service/tasks.service";

interface TaskStore {
  tasks: TaskType[];
  getTasks: () => void;
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
  addTask: (task: TaskType) =>
    set((state) => ({ tasks: [...state.tasks, task] })),
}));

export default useTaskStore;
