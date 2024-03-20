import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const NavMenuLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: 800,
}));
