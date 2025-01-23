import { FormControl, Stack, Typography, useMediaQuery } from "@mui/material";
import InputStyled from "../components/inputStyled";
import LinkBox from "../components/linkBox";
import { Link } from "react-router-dom";
import point from "../assets/point.svg";
import arroba from "../assets/@.svg";
import phone from "../assets/phone.svg";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const isMobile = useMediaQuery("(max-width:770px)");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = <K extends keyof FormState>(
    field: K,
    value: FormState[K]
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const sendEmail = () => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...form }
      )
      .then(
        (response) => {
          console.log(response, response.text);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!form.name.trim()) {
      console.error("El campo 'name' es obligatorio.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      console.error("El campo 'email' no es válido.");
      return;
    }

    if (!form.message.trim()) {
      console.error("El campo 'message' es obligatorio.");
      return;
    }

    sendEmail();
    console.log("Formulario enviado");
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <Stack py={15}>
        <Stack
          spacing={7}
          direction={"column"}
          textAlign={"center"}
          alignItems={"center"}
        >
          <Typography variant="h2">Contacto</Typography>
          <Typography variant="h4">¿En qué podemos ayudarte?</Typography>
          <Stack
            component={"form"}
            onSubmit={handleSubmit}
            minWidth={"min(100%, 800px)"}
          >
            <FormControl
              sx={({ typography }) => ({
                ...typography.h5,
                minWidth: "min(100%, 800px)",
              })}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 0, md: 2 }}
              >
                <InputStyled
                  placeholder="Nombre"
                  width={isMobile ? "100%" : undefined}
                  onChange={(value) => handleChange("name", value)}
                  required
                />
                <InputStyled
                  placeholder="Email"
                  width={isMobile ? "100%" : undefined}
                  onChange={(value) => handleChange("email", value)}
                  required
                />
              </Stack>
              <InputStyled
                placeholder="Mensaje"
                rows={8}
                width="100%"
                onChange={(value) => handleChange("message", value)}
                required
              />
              <Stack ml={"auto"} pt={5}>
                <LinkBox type="button" buttonType="submit" text="ENVIAR" />
              </Stack>
            </FormControl>
          </Stack>
        </Stack>
        <Stack
          direction={"column"}
          spacing={2.3}
          sx={{ "& a": { textDecoration: "none" } }}
        >
          <Link to="/contacto">
            <Stack
              component={"p"}
              direction={"row"}
              spacing={3}
              alignItems={"center"}
            >
              <Stack
                component="img"
                src={point}
                alt="point"
                width={17}
                height={23}
              />
              <Typography variant="h3" fontSize={14}>
                Lamadrid 470, Rosario, Santa Fe
              </Typography>
            </Stack>
          </Link>
          <Link to="/contacto">
            <Stack
              component={"p"}
              direction={"row"}
              spacing={3}
              alignItems={"center"}
            >
              <Stack
                component="img"
                src={arroba}
                alt="@"
                width={20}
                height={20}
              />
              <Typography variant="h3" fontSize={14}>
                comercial@mangoodev.com
              </Typography>
            </Stack>
          </Link>
          <Link to="/contacto">
            <Stack
              component={"p"}
              direction={"row"}
              spacing={3}
              alignItems={"center"}
            >
              <Stack
                component="img"
                src={phone}
                alt="phone"
                width={20}
                height={20}
              />
              <Typography variant="h3" fontSize={14}>
                (+54) 3415 991838
              </Typography>
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </div>
  );
};

export default Contact;
