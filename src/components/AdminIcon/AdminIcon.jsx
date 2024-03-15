import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const AdminIcon = () => {
  const navigate = useNavigate();
  const ShowAdmin = () => {
    navigate("/admin");
  };
  return (
    <Tooltip title="Go to Admin Dashboard" placement="bottom">
      <IconButton
        aria-label="Go to Admin Dashboard"
        color="inherit"
        size="small"
        onClick={ShowAdmin}
        value="dark"
      >
        <AdminPanelSettingsIcon fontSize="medium" />
      </IconButton>
    </Tooltip>
  );
};

export default AdminIcon;
