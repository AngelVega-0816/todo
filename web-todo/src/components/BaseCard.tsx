import { Stack, SxProps, Theme } from "@mui/material";
import { BorderSide } from "../utils/gridArray.utils";

interface BaseCardProps {
  occupiedSides: string | undefined;
  children: React.ReactNode;
  custom?: SxProps<Theme>;
}

const valueBorderRadius = 6;

const BaseCard = ({ occupiedSides, children, custom }: BaseCardProps) => {
  let sx;

  if (occupiedSides) {
    const sides = occupiedSides?.split(" ") || "";
    const borderRadius: { [key in BorderSide]: any } = {
      [BorderSide.TOP]: {
        borderTopLeftRadius: valueBorderRadius,
        borderTopRightRadius: valueBorderRadius,
      },
      [BorderSide.RIGHT]: {
        borderTopRightRadius: valueBorderRadius,
        borderBottomRightRadius: valueBorderRadius,
      },
      [BorderSide.BOTTOM]: {
        borderBottomRightRadius: valueBorderRadius,
        borderBottomLeftRadius: valueBorderRadius,
      },
      [BorderSide.LEFT]: {
        borderTopLeftRadius: valueBorderRadius,
        borderBottomLeftRadius: valueBorderRadius,
      },
    };
    sx =
      sides &&
      sides.reduce(
        (acc: any, side: string) => ({
          ...acc,
          ...borderRadius[side as BorderSide],
        }),
        {}
      );
  }

  return (
    <Stack
      width={250}
      height={358}
      p={5}
      spacing={3}
      borderRadius={4}
      sx={{
        ...sx,
        ...custom,
      }}
    >
      {children}
    </Stack>
  );
};

export default BaseCard;
