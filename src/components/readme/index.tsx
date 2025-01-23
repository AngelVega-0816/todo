import { Stack, Typography } from "@mui/material";
import readme from "../../assets/readme.svg";

const Readme = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Stack
      sx={({ palette }) => ({
        boxShadow: "0 0 60px 20px rgba(8, 106, 216, .25)",
        minHeight: 150,
        backgroundColor: palette.common.black,
        border: `1px solid ${palette.overlays?.white15}`,
        borderRadius: 2,
      })}
    >
      <Stack
        sx={({ palette }) => ({
          padding: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: 1.25,
          borderBottom: `1px solid ${palette.overlays?.white15}`,
        })}
      >
        <Stack component="img" src={readme} width={14} height={16} />
        <Typography variant="subtitle2">{title}</Typography>
      </Stack>
      <Typography component="p" variant="caption" p={3}>
        {description}{" "}
      </Typography>
    </Stack>
  );
};

export default Readme;
