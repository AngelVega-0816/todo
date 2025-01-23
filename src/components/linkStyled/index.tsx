import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const LinkStyled = ({
  to,
  children,
}: {
  to: string;
  children: string | React.ReactElement;
}) => {
  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Stack
        sx={{
          textDecoration: "none",
          transition: "text-decoration 0.3s ease, color 0.3s ease",
          "&:hover": {
            textDecoration: "underline",
            textDecorationThickness: "2px",
            textUnderlineOffset: "6px",
            color: "#fff",
          },
        }}
      >
        {children}
      </Stack>
    </Link>
  );
};

export default LinkStyled;
