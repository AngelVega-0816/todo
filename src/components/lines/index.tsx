import { Stack } from "@mui/material";
import line1 from "../../assets/line-1.svg";
import line2 from "../../assets/line-2.svg";
import line3 from "../../assets/line-3.svg";

const Lines = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        width: 224,
        height: 748,
        display: "flex",
        flexDirection: "row",
        gridRow: "1 / 4",
        gridColumn: "1 / 5",
        position: "relative",

        "@media (max-width:1026px)": {
          display: "none",
        },
      }}
    >
      <Stack
        component="img"
        src={line1}
        alt="line"
        width={116}
        height={262}
        position="absolute"
        top={0}
        left={0}
      />
      <Stack
        component="img"
        src={line2}
        alt="line"
        width={15}
        height={709}
        position={"absolute"}
        top={37}
        left={107}
      />
      <Stack
        component="img"
        src={line3}
        alt="line"
        width={111}
        height={530}
        position={"absolute"}
        top={37}
        right={0}
      />
    </Stack>
  );
};

export default Lines;
