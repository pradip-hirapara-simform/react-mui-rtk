import { AppBar, Box, Container, MenuItem, SelectChangeEvent, Stack, Toolbar } from "@mui/material";
import i18next from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import { Images } from "../../theme/Images";
import Select from "../mui/Select/Select";
import { NavMenuLink } from "./Nav.styles";
import { languages } from "./../../utils/i18-language";

function Nav() {
  const { t } = useTranslation();
  const [themeValue, themeChange] = useTheme();
  const [languagesValue, setLanguagesValue] = useState("en");

  const languagesChange = (e: SelectChangeEvent) => {
    i18next.changeLanguage(e.target.value);
    setLanguagesValue(e.target.value as string);
  };
  const onThemeSelect = (e: SelectChangeEvent<"default" | "dark" | "green">) => {
    themeChange(e.target.value as typeof themeValue);
  };
  console.log(themeValue);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={Images.Logo} alt="Logo" />
          <Box sx={{ flexGrow: 1, justifyContent: "center", display: "flex", gap: "30px" }}>
            <NavMenuLink to="/">{t("menu_home")}</NavMenuLink>
            <NavMenuLink to="/about">{t("menu_about")}</NavMenuLink>
            <NavMenuLink to="/contact">{t("menu_contact")}</NavMenuLink>
          </Box>
          <Box>
            <Stack direction="row" spacing={2}>
              <Select
                sx={{ width: "120px" }}
                id="demo-simple-select"
                value={languagesValue}
                name="language"
                onChange={languagesChange}
                defaultValue={localStorage.getItem("language") || "en"}
              >
                {languages.map(({ code, name }) => {
                  return (
                    <MenuItem value={code} key={code}>
                      {name}
                    </MenuItem>
                  );
                })}
              </Select>

              <Select
                sx={{ width: "120px" }}
                id="demo-simple-select"
                value={themeValue}
                label="Age"
                variant="filled"
                onChange={onThemeSelect}
                placeholder="Theme"
              >
                <MenuItem value="default">Default</MenuItem>
                <MenuItem value="dark">Dark</MenuItem>
                <MenuItem value="green">Green</MenuItem>
              </Select>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
