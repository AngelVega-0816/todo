import { Button, Stack, Typography } from "@mui/material";
import useTaskStore from "../store/taskStore";
import BaseCard from "./BaseCard";
import InputText from "./InputText";

interface TaskType {
  description: string;
  title: string;
  id: number;
  occupiedSides?: string;
  editable?: boolean;
}

const TaskCard = ({
  description,
  title,
  id,
  occupiedSides,
  editable = false,
}: TaskType) => {
  const { deleteTask } = useTaskStore();

  return (
    <BaseCard
      occupiedSides={occupiedSides}
      custom={{
        bgcolor: "secondary.main",
      }}
      children={
        <>
          <Stack direction="row">
            <Button
              variant="contained"
              type={`${editable ? "submit" : "button"}`}
              onClick={(e) => {
                e.stopPropagation();
                !editable && deleteTask(id);
              }}
            >
              {editable ? "EDIT" : "DELETE"}
            </Button>
          </Stack>

          {editable ? (
            <InputText
              name="title"
              value={title}
              getChanges={(e) => {
                console.log(e.target.value);
              }}
            />
          ) : (
            <Typography
              variant="h4"
              px={3}
              textAlign="center"
              sx={{
                wordWrap: "break-word",
                textOverflow: "ellipsis",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {title}
            </Typography>
          )}
          {editable ? (
            <InputText name="description" value={description} />
          ) : (
            <Typography
              variant="body1"
              textAlign="center"
              sx={{
                wordWrap: "break-word",
                textOverflow: "ellipsis",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 8,
                WebkitBoxOrient: "vertical",
              }}
              pb={2}
            >
              {description}
            </Typography>
          )}
        </>
      }
    />
    // <motion.div>
    //   <Stack
    //     bgcolor="secondary.main"
    //     width={250}
    //     height={358}
    //     p={5}
    //     spacing={3}
    //     borderRadius={4}
    //     sx={{
    //       ...sx,
    //     }}
    //   >
    //     <Typography
    //       variant="h4"
    //       px={3}
    //       textAlign="center"
    //       sx={{
    //         wordWrap: "break-word",
    //         textOverflow: "ellipsis",
    //         overflow: "hidden",
    //         display: "-webkit-box",
    //         WebkitLineClamp: 3,
    //         WebkitBoxOrient: "vertical",
    //       }}
    //     >
    //       {title}
    //     </Typography>
    //     <Typography
    //       variant="body1"
    //       textAlign="center"
    //       sx={{
    //         wordWrap: "break-word",
    //         textOverflow: "ellipsis",
    //         overflow: "hidden",
    //         display: "-webkit-box",
    //         WebkitLineClamp: 8,
    //         WebkitBoxOrient: "vertical",
    //       }}
    //       pb={2}
    //     >
    //       {description}
    //     </Typography>
    //   </Stack>
    // </motion.div>
  );
};

export default TaskCard;
