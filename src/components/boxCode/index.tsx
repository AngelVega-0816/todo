import { Stack, Typography } from "@mui/material";
import { typewriterCursor } from "../../utils/keyframes";

const BoxCode = () => {
  return (
    <Stack
      sx={({ palette, breakpoints }) => ({
        width: "min(100%, 520px)",
        height: 280,
        padding: "30px",
        bgcolor: palette.common.black,
        border: `1px solid ${palette.overlays?.white15}`,
        borderRadius: "8px",
        boxShadow: "20px -20px 120px 20px rgba(8, 106, 216, .25)",
        fontSize: ".875rem",
        [breakpoints.down("xl")]: {
          width: "min(100%, 480px)",
        },
      })}
    >
      <Typography component={"p"} variant="body1" lineHeight={"1.5"}>
        <span>{"#include <stdio.h>"}</span>
        <br></br>
        <br></br>
        <Stack>{"int main() {"}</Stack>
        <Stack ml={2}>
          <span>{`printf("Hello World");`}</span>
          <span>{"return 0;"}</span>
        </Stack>
        <Stack component="span" direction="row">
          {"}"}
          <Stack
            sx={{
              display: "block",
              animation: `${typewriterCursor} 1s infinite`,
            }}
          >
            |
          </Stack>
        </Stack>
      </Typography>
    </Stack>
  );
};

export default BoxCode;
