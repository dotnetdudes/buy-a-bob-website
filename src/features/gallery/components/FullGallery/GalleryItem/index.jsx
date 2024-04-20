import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";

const GalleryItem = ({ image, title, id }) => {
  const navigate = useNavigate();

  const gotoDetail = (event) => {
    navigate(`/gallery/${event.currentTarget.dataset.pic}`);
  };

  return (
    <Card
      sx={{ maxWidth: 345, cursor: "pointer" }}
      onClick={gotoDetail}
      data-pic={id}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={`${import.meta.env.VITE_IMAGE_SERVER_URL}/${image}`}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            bgcolor: "rgba(0, 0, 0, 0.54)",
            color: "white",
            padding: "6px",
          }}
        >
          <Typography variant="subtitle2">{title}</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default GalleryItem;
