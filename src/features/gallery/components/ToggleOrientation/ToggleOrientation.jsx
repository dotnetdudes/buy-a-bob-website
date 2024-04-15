import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import IconButton from "@mui/material/IconButton";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { toggleOrientation } from "../../slice";
import { selectOrientation } from "../../slice/selectors";

const ToggleOrientation = () => {
  const dispatch = useDispatch();
  const orientation = useSelector(selectOrientation);

  const handleToggle = (event) => {
    dispatch(toggleOrientation(event.target.value));
  };

  return (
    <>
      <Tooltip title="Change the orientation of gallery pictures">
        <IconButton
          aria-label="Change the orientation of gallery pictures"
          color="inherit"
          size="small"
          value="dark"
        >
          <HelpIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Change the orientation of gallery pictures">
        <ToggleButtonGroup
          color="primary"
          value={orientation}
          exclusive
          onChange={handleToggle}
          aria-label="Change the orientation of gallery pictures."
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="landscape">Landscape</ToggleButton>
          <ToggleButton value="portrait">Portrait</ToggleButton>
        </ToggleButtonGroup>
      </Tooltip>
    </>
  );
};

export default ToggleOrientation;
