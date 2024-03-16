import FullGallery from "../../features/gallery/components/FullGallery";
import Grid from "@mui/material/Grid";

const Gallery = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <FullGallery />
      </Grid>
    </Grid>
  );
};

export default Gallery;
