import IconButton from "@mui/material/IconButton";
import CollectionsIcon from "@mui/icons-material/Collections";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

const GalleryIcon = () => {
  const navigate = useNavigate();
  const ShowGallery = () => {
    navigate("/gallery");
  };

  return (
    <Tooltip title="Go to Gallery" placement="bottom">
      <IconButton
        aria-label="Go to Gallery"
        color="inherit"
        size="small"
        onClick={ShowGallery}
        value="dark"
        sx={{ ml: 1 }}
      >
        <CollectionsIcon fontSize="medium" />
      </IconButton>
    </Tooltip>
  );
};

export default GalleryIcon;
