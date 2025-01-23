import { Stack, Typography, useMediaQuery } from "@mui/material";
import "@splidejs/react-splide/css/core";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LinkBox from "../components/linkBox";
import BoxCode from "../components/boxCode";
import BoxReadme from "../components/boxReadme";
import pasteSearch from "../assets/paste-search.svg";
import subtitles from "../assets/subtitles.svg";
import rocket from "../assets/rocket.svg";
import desSoft from "../assets/desarrollo-software.svg";
import mobile from "../assets/mobile.svg";
import arrow from "../assets/arrow.svg";
import { Link, useNavigate } from "react-router-dom";
import Orbit from "../components/orbit";
import InputStyled from "../components/inputStyled";
import { useEffect, useState } from "react";
import Modal from "../components/modal";
import AOS from "aos";
import "aos/dist/aos.css";
import Lines from "../components/lines";
import Readme from "../components/readme";

const arrClients = [
  "advanta-blanco",
  "arneg-blanco",
  "autocredito",
  "caja-de-valores-blanco",
  "genomma-blanco",
  "IEB-blanco",
  "le-club-blanco",
  "MB-blanco",
  "pecam-blanco",
  "viewstream-blanco",
  "vinito-blanco",
  "weya-blanco",
  "winefor-blanco",
];

const arrImages = [
  {
    name: "advanta",
    link: "https://www.behance.net/gallery/188417963/Advanta",
  },
  {
    name: "arneg",
    link: "https://www.behance.net/gallery/198483587/Arneg",
  },
  {
    name: "genomma",
    link: "https://www.behance.net/gallery/178779261/Dashboard-CRM-Laboratorio-Internacional",
  },
  {
    name: "IEB-1",
    link: "https://www.behance.net/gallery/168850963/IEB",
  },
  {
    name: "MB",
    link: "https://www.behance.net/gallery/172421483/App-MB",
  },
  {
    name: "portada-06",
    // link: ""
  },
];

const Home = () => {
  const isBelow630px = useMediaQuery("(max-width:630px)");
  const isBelow900px = useMediaQuery("(max-width:900px)");
  const isBelow1015px = useMediaQuery("(max-width:1015px)");
  const isBelow1026px = useMediaQuery("(max-width:1026px)");
  const isBelow1275px = useMediaQuery("(max-width:1275px)");
  const isAbove1600px = useMediaQuery("(min-width:1600px)");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (item: string) => {
    navigate(item);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Stack width={"min(100%, 1440px)"} m="auto" py={"5rem"} rowGap="10rem">
      <div data-aos="fade-up">
        <Stack
          component="section"
          direction={{ xs: "column", lg: "row" }}
          justifyContent={{ xs: "inherit", lg: "space-between" }}
          alignItems={{ xs: "center", lg: "inherit" }}
          rowGap={"3.75rem"}
        >
          <Stack
            direction="column"
            rowGap={"3.75rem"}
            alignItems={{ xs: "center", lg: "start" }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: {
                  xs: "center",
                  lg: "start",
                },
              }}
            >
              Desarrolla con nosotros el software o aplicación que necesitas
            </Typography>
            <LinkBox type="a" to="/contacto" />
          </Stack>
          <BoxCode />
        </Stack>
      </div>

      <div data-aos="fade-up">
        <Stack component="section" direction="column" spacing={15} pb={"120px"}>
          <Stack
            direction="column"
            alignItems="center"
            textAlign="center"
            spacing={1.25}
          >
            <Typography variant="body1">QUÉ HACEMOS</Typography>
            <Typography variant="h2">
              Brindamos soluciones que se destacan
            </Typography>
          </Stack>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            gap="3.75rem 60px"
            sx={({ breakpoints }) => ({
              [breakpoints.up("lg")]: {
                "& > :nth-child(2)": {
                  marginTop: "3.75rem",
                },
              },
            })}
          >
            <BoxReadme
              svg={pasteSearch}
              title="Design thinking"
              description="Aplicamos pensamiento de diseño para resolver problemas y darle prioridad a las necesidades y expectativas de la persona usuaria."
            />
            <BoxReadme
              svg={desSoft}
              title="Desarrollo de software"
              description="Creamos e implementamos soluciones tecnológicas listas para responder a requerimientos específicos y agilizar los procesos de nuestros clientes."
            />
            <BoxReadme
              svg={mobile}
              title="Aplicaciones"
              description="La combinación de creatividad, tecnología y análisis centrado en la experiencia de la persona usuaria, nos permite arribar a productos innovadores, amigables y exitosos."
            />
          </Stack>
        </Stack>
      </div>
      <div data-aos="fade-up">
        <Stack mx={"auto"} gap="120px" direction={"column"}>
          <Stack spacing={1} alignItems={isBelow1026px ? "center" : "inherit"}>
            <Typography variant="body1">EL PROCESO</Typography>
            <Typography
              variant="h2"
              sx={{
                textAlign: isBelow1026px ? "center" : "start !important",
              }}
            >
              Cómo realizamos tu <br /> proyecto
            </Typography>
          </Stack>
          <Stack
            sx={{
              width: "min(100%, 760px)",
              margin: "0 auto",
              display: "grid",
              gridTemplateRows: "auto 16.5px auto",
              gridTemplateColumns: "98.5px 32px 76.5px 32px auto",

              "& article": {
                width: "min(100%, 552px)",
                height: "fit-content",
                display: "flex",
                flexDirection: "row",
                columnGap: "20px",
                zIndex: 2,

                "& .container-readme": {
                  width: "min(100%, 500px)",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "1.25rem",
                },
              },

              "@media (max-width:1026px)": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                rowGap: "3.75rem",
              },
            }}
          >
            <Lines />
            <Stack
              component="article"
              sx={{
                gridRow: 1,
                gridColumn: "2 / 6",
              }}
            >
              <Stack
                component={"img"}
                src={pasteSearch}
                width={32}
                height={32}
              />
              <Stack className="container-readme">
                <Stack
                  direction="row"
                  alignItems="center"
                  minHeight={32}
                  columnGap={1.25}
                >
                  <Typography variant="h3">{"Pre-Lanzamiento"}</Typography>
                </Stack>
                <Readme
                  title="research.md"
                  description={
                    "Definimos los objetivos, planificamos y delineamos estrategias para el desarrollo, ejecución y gestión del producto."
                  }
                />
              </Stack>
            </Stack>
            <Stack
              component="article"
              sx={{
                gridRow: 3,
                gridColumn: "4 / 6",
                "@media (min-width:1027px)": {
                  mt: 3,
                },
              }}
            >
              <Stack component={"img"} src={subtitles} width={27} height={22} />
              <Stack className="container-readme">
                <Stack
                  direction="row"
                  alignItems="center"
                  minHeight={32}
                  columnGap={1.25}
                >
                  <Typography variant="h3">{"Lanzamiento"}</Typography>
                </Stack>
                <Readme
                  title="development.md"
                  description={
                    "Probamos, validamos, recopilamos información e iteramos. Previo a concluir el desarrollo, lo chequeamos junto con el cliente y lo acompañamos en la puesta en marcha."
                  }
                />
              </Stack>
            </Stack>
            <Stack
              component="article"
              sx={{
                gridRow: 4,
                gridColumn: "2 / 6",
                "@media (min-width:1027px)": {
                  mt: 1,
                },
              }}
            >
              <Stack component={"img"} src={rocket} width={28} height={27} />
              <Stack className="container-readme">
                <Stack
                  direction="row"
                  alignItems="center"
                  minHeight={32}
                  columnGap={1.25}
                >
                  <Typography variant="h3">{"Post-Lanzamiento"}</Typography>
                </Stack>
                <Readme
                  title="deploy.md"
                  description={
                    "Recopilamos datos y métricas para analizar cómo los usuarios interactúan con el producto. Identificamos patrones y aplicamos mejoras."
                  }
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </div>
      <div data-aos="fade-up">
        <Stack
          direction="column"
          spacing={3.5}
          sx={{ width: "min(100%, 1440px)" }}
        >
          <Stack
            direction="column"
            alignItems="center"
            textAlign="center"
            spacing={1.25}
          >
            <Typography variant="body1">CASOS DE ÉXITO</Typography>
            <Typography variant="h2">Nuestro Trabajo</Typography>
          </Stack>
          <Splide
            hasTrack={false}
            options={{
              type: "loop",
              perPage: isBelow630px ? 1 : isBelow900px ? 2 : 3,
              perMove: 1,
              pagination: false,
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              className="splide__arrows"
              sx={{
                li: {
                  // width: "inherit !important",
                  // justifyContent: "space-around",
                },
              }}
            >
              <Stack
                className="splide__arrow splide__arrow--prev"
                component="img"
                src={arrow}
                alt="arrow"
                width={32}
                height={32}
                my={"auto"}
                sx={{
                  cursor: "pointer",
                }}
              />
              <SplideTrack
                style={{
                  maxWidth:
                    !isBelow1275px && !isAbove1600px
                      ? 1048
                      : isAbove1600px
                      ? 1300
                      : "inherit",
                }}
              >
                {arrImages.map((e, i) => (
                  <SplideSlide key={i}>
                    <Stack
                      component="img"
                      src={`/projects/${e.name}.jpg`}
                      alt="Image 1"
                      onClick={() => handleItemClick(e.name)}
                      sx={{
                        width: {
                          xs: 200,
                          lg: 300,
                          xl: 380,
                        },
                        height: {
                          xs: 170,
                          lg: 255,
                          xl: 300,
                        },
                        mx: "auto",
                        border: "1px solid #545454",
                        borderRadius: "12px",
                        boxShadow: "0 0 13px 5px rgba(8, 106, 216, .25)",
                        transition: "ease all .5s",
                      }}
                    />
                  </SplideSlide>
                ))}
              </SplideTrack>
              <Stack
                className="splide__arrow splide__arrow--next"
                component="img"
                src={arrow}
                alt="arrow"
                width={32}
                height={32}
                my={"auto"}
                sx={{ transform: "rotate(180deg)", cursor: "pointer" }}
              />
            </Stack>
          </Splide>
        </Stack>
      </div>
      <div data-aos="fade-up">
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 5, lg: "" }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction={"column"} rowGap={"1.875rem"}>
            <Typography variant="h2">Quiénes Somos</Typography>
            <Typography
              variant="subtitle1"
              maxWidth={"35ch"}
              sx={{ textAlign: { xs: "center", lg: "start" } }}
            >
              Somos un grupo interdisciplinario de profesionales especializados
              en el diseño, desarrollo e implementación de software y
              aplicaciones a medida.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                "& :hover": {
                  color: "#086ad8",
                  transition: "all 0.3s ease",
                },
                cursor: "pointer",
                margin: { xs: "auto", lg: "inherit" },

                "& a": {
                  width: "fit-content",
                  paddingBottom: "0.5em",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: "10px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "white",
                  textDecoration: "none",
                  ":hover": {
                    color: "#086ad8",
                    transition: "all 0.3s ease",
                  },
                },
              }}
            >
              <Link to="/equipo">
                Más sobre nosotros
                <ArrowRightAltIcon />
              </Link>
            </Typography>
          </Stack>
          <Orbit />
        </Stack>
      </div>
      <div data-aos="fade-up">
        <Stack direction={"column"} spacing={7}>
          <Stack direction={"column"} alignItems={"center"} spacing={2.6}>
            <Typography variant="h2">Hablemos</Typography>
            <Typography variant="caption">
              Ingresa tu correo y nos pondremos en contacto.
            </Typography>
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            justifyContent={"center"}
            alignItems={"center"}
            component={"form"}
          >
            <InputStyled placeholder="correo@dominio.com" />
            <LinkBox
              type="button"
              text="ENVIAR"
              action={() => {
                console.log();
              }}
            />
          </Stack>
        </Stack>
      </div>

      <div data-aos="fade-up">
        <Stack>
          <Splide
            hasTrack={false}
            options={{
              type: "loop",
              perPage: isBelow1015px ? 2 : isBelow1275px ? 4 : 5,
              perMove: 1,
              arrows: false,
              pagination: false,
              autoplay: true,
              interval: 4000,
              speed: 2000,
            }}
          >
            <SplideTrack>
              {arrClients.map((e, i) => (
                <SplideSlide
                  key={i}
                  style={{
                    width: 165,
                    height: 61,
                  }}
                >
                  <Stack
                    component="img"
                    src={`/clients/${e}.png`}
                    alt={e}
                    sx={{
                      height: "100%",
                      mx: "auto",

                      opacity: 0.2,
                      transition: "opacity .5s ease",

                      "&:hover": {
                        opacity: 0.62,
                      },
                    }}
                  />
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </Stack>
      </div>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{ overflow: "auto" }}
      />
    </Stack>
  );
};

export default Home;
