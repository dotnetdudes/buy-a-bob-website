import SwipeGallery from "../../features/coverflow/SwipeGallery";
import Grid from '@mui/material/Grid';
import GridItemCenter from "../../components/GridItemCenter";
import HomeBob from "../../components/HomeBob";

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ mb: 6 }}>
        <SwipeGallery />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <GridItemCenter><HomeBob /></GridItemCenter>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <GridItemCenter><HomeBob /></GridItemCenter>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <GridItemCenter><HomeBob /></GridItemCenter>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <GridItemCenter><HomeBob /></GridItemCenter>
      </Grid>
    </Grid>
  );
};

export default Home;
