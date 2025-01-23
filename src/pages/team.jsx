import { Stack, Typography, useMediaQuery } from "@mui/material";
import CardTeam from "../components/cardTeam";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "@splidejs/react-splide/css/core";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import arrow from "../assets/arrow.svg";

const team: { name: string; position: string; img: string }[] = [
  {
    name: "Nicolás Orozco",
    position: "Founder & CEO",
    img: "nico.jpg",
  },
];

const Team = () => {
  const isBelow630px = useMediaQuery("(max-width:630px)");
  const isBelow900px = useMediaQuery("(max-width:900px)");
  const isBelow1150px = useMediaQuery("(max-width:1150px)");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <Stack minHeight={"100vh"} direction={"column"} gap={8} py={"5rem"}>
        <Stack
          spacing={3}
          direction={"column"}
          textAlign={"center"}
          alignItems={"center"}
        >
          <Typography variant="h2">Quiénes Somos</Typography>
          <Typography variant="caption" maxWidth={"69ch"}>
            Somos un grupo interdisciplinario de profesionales especializados en
            el diseño, desarrollo e implementación de software y aplicaciones a
            medida. Nos comprometemos con cada proyecto, contemplando el trabajo
            colaborativo como principal herramienta de desarrollo. Nos motiva
            empatizar y brindar soluciones tecnológicas que signifiquen un
            verdadera transformación para las empresas.
          </Typography>
        </Stack>
        <Stack mx={"auto"}>
          {team.map((e, i) => (
            <CardTeam key={i} {...e} />
          ))}
        </Stack>
        <Splide
          hasTrack={false}
          options={{
            type: "loop",
            perPage: isBelow630px
              ? 1
              : isBelow900px
              ? 2
              : isBelow1150px
              ? 3
              : 4,
            perMove: 1,
            pagination: false,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            className="splide__arrows"
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
            <SplideTrack>
              {[1, 2, 3, 4].map((e, i) => (
                <SplideSlide key={i}>
                  <Stack
                    component="img"
                    src={`/team/team-${e}.jpg`}
                    alt="Image 1"
                    sx={{
                      width: {
                        xs: 200,
                        lg: 230,
                        xl: 250,
                      },
                      height: {
                        xs: 200,
                        lg: 230,
                        xl: 250,
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
  );
};

export default Team;
