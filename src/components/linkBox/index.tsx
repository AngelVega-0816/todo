import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinkBoxProps {
  type: "a" | "button";
  to?: string; // Solo requerido si el tipo es "a"
  text?: string;
  action?: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
  buttonType?: "button" | "submit" | "reset"; // Tipo de botón
}

const LinkBox = ({
  type,
  to,
  text = "Hablemos",
  action,
  buttonType = "button",
}: LinkBoxProps) => {
  if (type === "a" && !to) {
    throw new Error("Prop 'to' es requerida cuando el tipo es 'a'.");
  }

  return type === "a" ? (
    <StyledLink to={to!} onClick={action}>
      <Typography variant="body2">{text}</Typography>
    </StyledLink>
  ) : (
    <StyledButton type={buttonType} onClick={action}>
      <Typography variant="body2">{text}</Typography>
    </StyledButton>
  );
};

export default LinkBox;

const StyledLink = styled(Link)`
  width: 200px;
  height: 60px;
  margin: 0 6px 6px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 8px;
  color: #fff;
  font-size: 0.875rem;
  text-transform: uppercase;
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    width: 206px;
    height: 66px;
    border: 2px solid #fff;
    border-radius: 6px 12px 12px 12px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-2px, -2px);
    animation: box-glow 3s ease infinite;
  }

  &:hover {
    transform: scale(0.98);
    transition: all 0.1s ease;
  }

  @keyframes box-glow {
    0% {
      box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.1);
    }
    50% {
      box-shadow: 0px 0px 15px 7.5px rgba(255, 255, 255, 0.1);
    }
    100% {
      box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.1);
    }
  }
`;

const StyledButton = styled.button`
  width: 200px;
  height: 60px;
  margin: 0 6px 6px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 8px;
  color: #fff;
  font-size: 0.875rem;
  text-transform: uppercase;
  position: relative;
  background: transparent;
  cursor: pointer;

  &::after {
    content: "";
    width: 206px;
    height: 66px;
    border: 2px solid #fff;
    border-radius: 6px 12px 12px 12px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-2px, -2px);
    animation: box-glow 3s ease infinite;
  }

  &:hover {
    transform: scale(0.98);
    transition: all 0.1s ease;
  }

  @keyframes box-glow {
    0% {
      box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.1);
    }
    50% {
      box-shadow: 0px 0px 15px 7.5px rgba(255, 255, 255, 0.1);
    }
    100% {
      box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.1);
    }
  }
`;
