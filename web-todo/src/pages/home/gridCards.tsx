import { Grid2 } from "@mui/material";
import TaskCard from "../../components/TaskCard";
import { useEffect, useState } from "react";
import { useGridCounter } from "../../hooks/useGridCounter";
import { getOccupiedSides } from "../../utils/gridArray.utils";
import { AnimatePresence, motion } from "framer-motion";
import TaskDetails from "./taskDetails";
import useTaskStore from "../../store/taskStore";
import TaskEmptyCard from "../../components/TaskEmptyCard";

const GridCards = () => {
  const { tasks, getTasks } = useTaskStore();
  const grid = useGridCounter({
    percent: 0.8,
    columnWidth: 250,
    gap: 8,
    quantityItems: (tasks?.length || 0) + 1,
    maxWidth: 1300,
  });
  const [occupiedSides, setOccupiedSides] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string>();

  useEffect(() => {
    setOccupiedSides(
      getOccupiedSides({
        itemsCount: tasks?.length || 0,
        columns: grid.columns,
        rows: grid.rows,
      })
    );
  }, [grid, tasks]);

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <>
      <Grid2
        container
        margin="auto"
        sx={{
          width: "80%",
          gap: 2,
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          maxWidth: "1282px",
        }}
        position="relative"
      >
        {tasks?.map((task, index) => (
          <motion.div
            key={task.id}
            layoutId={`${task.id}`}
            onClick={() => setSelectedId(`${task.id}`)}
          >
            <TaskCard {...task} occupiedSides={occupiedSides[index]} />
          </motion.div>
        ))}
        <TaskEmptyCard occupiedSides={occupiedSides[-1]} />
      </Grid2>
      <AnimatePresence>
        {selectedId && tasks?.length && (
          <TaskDetails
            setSelectedId={setSelectedId}
            task={tasks.find((task) => task.id === parseInt(selectedId))!}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default GridCards;
