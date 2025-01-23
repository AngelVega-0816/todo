import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import mangoodev from "./../../assets/mangoodev.svg";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:1025px)");

  return (
    <Stack
      sx={({ palette }) => ({
        paddingTop: "5rem",
        paddingBottom: "5rem",
        "& a": {
          textDecoration: "none",
          "&:hover": {
            color: palette.primary.main, // Cambiar color en el hover del enlace
          },
        },
        "& a:hover .MuiTypography-caption": {
          color: palette.primary.main, // Cambiar color del Typography al hacer hover en el enlace
        },
      })}
      component={"footer"}
    >
      {isMobile ? (
        <Stack
          direction={"column"}
          textAlign={"center"}
          alignItems={"center"}
          spacing={3}
        >
          <Stack
            component="img"
            src={mangoodev}
            alt="mangoodev"
            width={160}
            height={33}
          />
          <Stack direction={"column"}>
            <Link to="/">
              <Typography variant="caption" color={"#ffffff80"}>
                Metodología
              </Typography>
            </Link>
            <Link to="/">
              <Typography variant="caption" color={"#ffffff80"}>
                Equipo
              </Typography>
            </Link>
            <Link to="/">
              <Typography variant="caption" color={"#ffffff80"}>
                Búsquedas
              </Typography>
            </Link>
            <Link to="/">
              <Typography variant="caption" color={"#ffffff80"}>
                Novedades
              </Typography>
            </Link>
            <Link to="/">
              <Typography variant="caption" color={"#ffffff80"}>
                Clientes
              </Typography>
            </Link>
          </Stack>
          <Stack
            sx={({ palette }) => ({
              width: "100%",
              borderBottom: `2px solid ${palette.overlays?.white15}`,
            })}
          />
          <Typography
            variant="caption"
            color={"#ffffff80"}
            fontSize=".75rem"
            lineHeight={1.8}
          >
            <span>Lamadrid 470</span>
            <br></br>
            <span>Rosario. Santa Fe.</span>
            <br></br>
            <span>comercial@mangoodev.com</span>
            <br></br>
            <span>(+54) 341 6541469</span>
          </Typography>
          <Typography variant="caption" color={"#ffffff80"} fontSize=".75rem">
            © 2025 · MangooDev. Todos los derechos reservados
          </Typography>
        </Stack>
      ) : (
        <Stack direction={"column"} rowGap="3.75rem">
          <Stack direction="row" justifyContent={"space-between"}>
            <Stack
              direction={"row"}
              // sx={{
              //   "& a": {
              //     textDecoration: "none",
              //   },
              // }}
              spacing={7}
            >
              <Stack direction={"column"} spacing={2}>
                <Typography variant="body1">NOSOTROS</Typography>
                <Stack direction={"column"} spacing={0.6}>
                  <Link to="/">
                    <Typography variant="caption" color={"#ffffff80"}>
                      Metodología
                    </Typography>
                  </Link>
                  <Link to="/">
                    <Typography variant="caption" color={"#ffffff80"}>
                      Novedades
                    </Typography>
                  </Link>
                  <Link to="/">
                    <Typography variant="caption" color={"#ffffff80"}>
                      Equipo
                    </Typography>
                  </Link>
                  <Link to="/">
                    <Typography variant="caption" color={"#ffffff80"}>
                      Búsquedas
                    </Typography>
                  </Link>
                </Stack>
              </Stack>

              <Stack direction={"column"} spacing={2}>
                <Typography variant="body1">SERVICIOS</Typography>
                <Stack direction={"column"} spacing={0.6}>
                  <Link to="/">
                    <Typography variant="caption" color={"#ffffff80"}>
                      Design Thinking
                    </Typography>
                  </Link>
                  <Link to="/">
                    <Typography variant="caption" color={"#ffffff80"}>
                      Desarrollo de software
                    </Typography>
                  </Link>
                  <Link to="/">
                    <Typography variant="caption" color={"#ffffff80"}>
                      Aplicaciones
                    </Typography>
                  </Link>
                </Stack>
              </Stack>

              <Stack direction={"column"} spacing={2}>
                <Typography variant="body1">CLIENTES</Typography>
                <Stack direction={"column"} spacing={0.6}>
                  <Link to="/">
                    <Typography variant="caption" color={"#ffffff80"}>
                      Nuestros Clientes
                    </Typography>
                  </Link>
                  <Link to="/">
                    <Typography variant="caption" color={"#ffffff80"}>
                      Contactanos
                    </Typography>
                  </Link>
                </Stack>
              </Stack>

              <Stack direction={"column"} spacing={2}>
                <Typography variant="body1">SOCIAL</Typography>
                <Stack direction={"column"} spacing={0.6}>
                  <Link
                    to="https://www.facebook.com/mangoo.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography variant="caption" color={"#ffffff80"}>
                      Facebook
                    </Typography>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/company/mangoodev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography variant="caption" color={"#ffffff80"}>
                      LinkedIn
                    </Typography>
                  </Link>
                  <Link
                    to="https://www.instagram.com/mangoo.dev/#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography variant="caption" color={"#ffffff80"}>
                      Instagram
                    </Typography>
                  </Link>
                </Stack>
              </Stack>
            </Stack>

            <Stack direction={"column"} spacing={1.25}>
              <Stack
                component="img"
                src={mangoodev}
                alt="mangoodev"
                width={160}
                height={33}
              />
              <Typography
                variant="caption"
                color={"#ffffff80"}
                fontSize=".75rem"
              >
                <span>Lamadrid 470</span>
                <br></br>
                <span>Rosario. Santa Fe.</span>
                <br></br>
                <span>comercial@mangoodev.com</span>
                <br></br>
                <span>(+54) 341 6541469</span>
              </Typography>
            </Stack>
          </Stack>

          <Typography variant="caption" color={"#ffffff80"} fontSize=".75rem">
            © 2025 · MangooDev. Todos los derechos reservados
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default Footer;
