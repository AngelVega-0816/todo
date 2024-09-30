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

const editTask = async (newTask: TaskType): Promise<TaskType> => {
  try {
    const response = await axios.put(
      `${config.apiUrl}/updatetask/${newTask.id}`,
      newTask
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        console.error("Tarea no encontrada");
        throw new Error("Tarea no encontrada");
      } else if (error.response?.status === 500) {
        console.error("Error interno del servidor");
        throw new Error("Error interno del servidor");
      } else {
        console.error(error);
        throw error;
      }
    } else {
      console.error(error);
      throw error;
    }
  }
};

const deleteTask = async (idTask: number): Promise<string> => {
  try {
    const response = await axios.delete(`${config.apiUrl}/delete/${idTask}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        console.error("Tarea no encontrada");
        throw new Error("Tarea no encontrada");
      } else if (error.response?.status === 500) {
        console.error("Error interno del servidor");
        throw new Error("Error interno del servidor");
      } else {
        console.error(error);
        throw error;
      }
    } else {
      console.error(error);
      throw error;
    }
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

export { getTasks, saveTask, editTask, deleteTask, getTasksHistory };
