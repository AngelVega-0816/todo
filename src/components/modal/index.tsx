import { Modal as ModalMUI, ModalProps, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";

interface ModalOwnProps extends Omit<ModalProps, "children"> {
  children?: React.ReactNode;
}

const Modal = ({ ...rest }: ModalOwnProps) => {
  const { pathname } = useLocation();

  return (
    <ModalMUI
      {...rest}
      keepMounted
      sx={{
        ...rest.sx,
        overflow: "auto",
        width: "80%",
        height: "90%",
        maxWidth: 1000,
        "&::-webkit-scrollbar": {
          display: "none",
        },
        m: "auto",
        boxShadow: "0 0 13px 5px rgba(8, 106, 216, .25)",
      }}
    >
      <Stack>
        <Stack
          component="img"
          src={`/projects-details${pathname}.jpg`}
          alt="phone"
          width={"100%"}
          height={"100%"}
          overflow={"auto"}
        />
      </Stack>
    </ModalMUI>
  );
};

export default Modal;
