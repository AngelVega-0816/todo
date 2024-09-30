import axios from "axios";
import { config } from "../config";

interface TaskBaseType {
  title: string;
  description: string;
}
export interface TaskType extends TaskBaseType {
  id: number;
}

export interface TaskHistoryType {
  id: number;
  taskId: number;
  title: string;
  description: string;
  updatedAt: Date;
}

const getTasks = async (): Promise<TaskType[]> => {
  try {
    const response = await axios.get(`${config.apiUrl}/tasks`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const saveTask = async (task: TaskBaseType): Promise<TaskType> => {
  try {
    const response = await axios.post(`${config.apiUrl}/savetask`, task);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getTasksHistory = async (id: number): Promise<TaskHistoryType[]> => {
  try {
    const response = await axios.get(`${config.apiUrl}/taskshistory/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getTasks, saveTask, getTasksHistory };
