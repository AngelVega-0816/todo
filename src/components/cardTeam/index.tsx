import { Stack, Typography } from "@mui/material";
import note from "../../assets/note.svg";

const CardTeam = ({
  name,
  position,
  img,
}: {
  name: string;
  position: string;
  img: string;
}) => {
  return (
    <Stack
      component="article"
      direction="column"
      sx={{
        width: "min(100%, 256px)",
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
        <Typography variant="h3">{name}</Typography>
      </Stack>
      <Stack
        sx={({ palette }) => ({
          boxShadow: "0 0 60px 20px rgba(8, 106, 216, .25)",
          minHeight: 150,
          backgroundColor: palette.common.black,
          border: `1px solid ${palette.overlays?.white15}`,
          borderRadius: 2,

          height: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
        })}
      >
        <Stack
          sx={({ palette }) => ({
            padding: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "start",
            columnGap: 1.25,
            borderBottom: `1px solid ${palette.overlays?.white15}`,
            width: "100%",
          })}
        >
          <Stack
            component="img"
            src={note}
            alt="readme"
            width={14}
            height={16}
          />
          <Typography variant="subtitle2" sx={{ pt: "2px" }}>
            {position}
          </Typography>
        </Stack>
        <Stack
          component="img"
          src={`/public/team/${img}`}
          alt={`${name} - ${position} at MangooDev`}
          // width={255}
          height={345}
        />
      </Stack>
    </Stack>
  );
};

export default CardTeam;
