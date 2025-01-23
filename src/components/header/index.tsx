import { Drawer, Stack, Typography, useMediaQuery } from "@mui/material";
import mangoodev from "./../../assets/mangoodev.svg";
import { Link } from "react-router-dom";
import LinkStyled from "../linkStyled";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:1025px)");

  return (
    <Stack
      direction={"row"}
      width={"min(100%, 1440px)"}
      mx="auto"
      sx={({ breakpoints }) => ({
        display: "flex",

        justifyContent: "space-between",
        alignItems: "center",
        [breakpoints.down("md")]: {
          height: 80,
        },
        [breakpoints.up("md")]: {
          height: 120,
        },
      })}
    >
      <Link to="/">
        <Stack
          component="img"
          src={mangoodev}
          alt="MangooDev Logo"
          width={210}
          height={35}
        />
      </Link>
      {isMobile ? (
        <>
          {/* <IconButton onClick={() => setOpen(!open)}> */}
          <MenuIcon
            fontSize="large"
            color="primary"
            onClick={() => setOpen(!open)}
          />
          {/* </IconButton> */}
          <Drawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            sx={{
              "& .MuiDrawer-paper": {
                width: 400,
                height: "100vh",
                paddingTop: "50px",
                paddingBottom: "50px",
                paddingLeft: "min(10vw, 50px)",
                paddingRight: "min(10vw, 50px)",
                backgroundColor: "black",
                color: "white",
                fontSize: "1.5rem",
                fontWeight: 700,
                position: "fixed",
                top: 0,
                right: 0,
                zIndex: 3,
                transform: "translateX(400px)",
                transition: "transform .6s ease",
                boxShadow: "rgba(8, 106, 216, .25) 0px 10px 40px",
                // transform: "translateX(0)",
              },
            }}
          >
            {/* Contenido del menú */}
            <Stack
              sx={{
                width: "100%",
                height: "100%",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "1rem",
              }}
            >
              <CloseIcon
                fontSize="large"
                sx={{ ml: "auto", cursor: "pointer" }}
                onClick={() => setOpen(false)}
              />
              <Stack>
                <LinkStyled to="https://www.behance.net/mangoodev">
                  <Typography variant={"h4"}>/NUESTRO TRABAJO</Typography>
                </LinkStyled>
                <LinkStyled to="/contacto">
                  <Typography variant={"h4"}>/CONTACTO</Typography>
                </LinkStyled>
              </Stack>
            </Stack>
          </Drawer>
        </>
      ) : (
        <Stack component="nav" direction="row" spacing={5}>
          <LinkStyled to="https://www.behance.net/mangoodev">
            <Typography>/NUESTRO TRABAJO</Typography>
          </LinkStyled>
          <LinkStyled to="/contacto">
            <Typography>/CONTACTO</Typography>
          </LinkStyled>
        </Stack>
      )}
    </Stack>
  );
};

export default Header;
