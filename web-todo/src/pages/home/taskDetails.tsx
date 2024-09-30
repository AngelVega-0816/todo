import { motion } from "framer-motion";
import TaskCard from "../../components/taskCard";
import {
  getTasksHistory,
  TaskHistoryType,
  TaskType,
} from "../../service/tasks.service";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

interface TaskDetailsProps {
  setSelectedId: React.Dispatch<React.SetStateAction<string | undefined>>;
  task: TaskType;
}

const TaskDetails = ({ setSelectedId, task }: TaskDetailsProps) => {
  const [taskHistory, setTaskHistory] = useState<{
    history: TaskHistoryType[];
    load: boolean;
  }>({ history: [], load: true });

  useEffect(() => {
    console.log(task);
    getTasksHistory(task.id)
      .then((res) => {
        setTaskHistory((prev) => ({ ...prev, history: res }));
      })
      .finally(() => setTaskHistory((prev) => ({ ...prev, load: false })));
  }, []);

  return (
    <motion.div
      animate={{
        backdropFilter: "blur(8px)",
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => setSelectedId(undefined)}
    >
      <Stack width="80%" maxWidth={1150} direction="row">
        <motion.div
          layoutId={`${task.id}`}
          className="containerAWDOINOI"
          style={{ width: 250, height: 358 }}
          onClick={(e) => e.stopPropagation()}
        >
          <TaskCard {...task} />
        </motion.div>
        <Stack direction="column">
          {!taskHistory.load &&
            taskHistory.history?.map((history) => (
              <TaskCard
                description={history.description}
                title={history.title}
                key={history.id}
              />
            ))}
        </Stack>
      </Stack>
    </motion.div>
  );
};

export default TaskDetails;
