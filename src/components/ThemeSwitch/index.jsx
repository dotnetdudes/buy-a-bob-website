import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { changeTheme } from "../ThemeProvider/slice";
import { useDispatch, useSelector } from "react-redux";
import { saveTheme } from "../ThemeProvider/utils";
import { selectThemeKey } from "../ThemeProvider/slice/selectors";
import Tooltip from "@mui/material/Tooltip";

const ThemeSwitch = () => {
  // const { t } = useTranslation();
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch();

  const handleThemeChange = (event) => {
    const value = event.currentTarget.value;
    saveTheme(value);
    dispatch(changeTheme(value));
  };

  return (
    <>
      {theme === "light" || theme === "system" ? (
        <Tooltip title="Select Dark Theme" placement="bottom">
          <IconButton
            aria-label="Select Dark Theme"
            color="inherit"
            size="small"
            onClick={handleThemeChange}
            value="dark"
          >
            <Brightness4Icon fontSize="small" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Select Light Theme" placement="bottom">
          <IconButton
            aria-label="Select Light Theme"
            color="inherit"
            size="small"
            onClick={handleThemeChange}
            value="light"
          >
            <Brightness7Icon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default ThemeSwitch;
