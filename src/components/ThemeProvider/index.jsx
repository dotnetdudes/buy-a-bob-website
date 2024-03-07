import { selectTheme } from "./slice/selectors";
import { ThemeProvider as OriginalThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";

export const ThemeProvider = ({ children }) => {
  const theme = useSelector(selectTheme);
  console.log(theme);
  return (
    <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
  );
};
