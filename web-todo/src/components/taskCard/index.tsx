import { Typography } from "@mui/material";
import BaseCard from "../baseCard";

interface TaskType {
  description: string;
  title: string;
  occupiedSides?: string;
  id?: number;
}

const TaskCard = ({ description, title, occupiedSides }: TaskType) => {
  return (
    <BaseCard
      occupiedSides={occupiedSides}
      custom={{
        bgcolor: "secondary.main",
      }}
      children={
        <>
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
