import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const GalleryItem = ({ image, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            bgcolor: "rgba(0, 0, 0, 0.54)",
            color: "white",
            padding: "10px",
          }}
        >
          <Typography variant="h5">Lizard</Typography>
          <Typography variant="body2">Subtitle</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default GalleryItem;
