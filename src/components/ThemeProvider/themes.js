import options from "./themes/light";
import darkOptions from "./themes/dark";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const getThemeOptions = (name) => {
  let themeOptions;
  switch (name) {
    case "light":
      themeOptions = options;
      break;
    case "dark":
      themeOptions = darkOptions;
      break;
    default:
      themeOptions = options;
  }
  return themeOptions;
};

export const generateTheme = (name) => {
  const options = getThemeOptions(name);
  let theme = createTheme(options);
  theme = responsiveFontSizes(theme);
  return theme;
};
