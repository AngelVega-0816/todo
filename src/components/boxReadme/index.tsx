import { Stack, Typography } from "@mui/material";
import Readme from "../readme";

const BoxReadme = ({
  svg,
  title,
  description,
}: {
  svg: string;
  title: string;
  description: string;
}) => {
  return (
    <Stack
      component="article"
      direction="column"
      sx={{
        width: "min(100%, 300px)",
        display: "flex",
        flexDirection: "column",
        rowGap: "1.25rem",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        minHeight={32}
        columnGap={1.25}
      >
        <Stack
          component="img"
          src={svg}
          alt="desarrollo de software"
          width={28}
          height={22}
        />
        <Typography variant="h3">{title}</Typography>
      </Stack>
      <Readme title="readme.md" description={description} />
    </Stack>
  );
};

export default BoxReadme;
