import SwipeGallery from "../../features/gallery/components/SwipeGallery";
import Grid from "@mui/material/Grid";
import GridItemCenter from "../../components/GridItemCenter";
import HomeBob from "../../components/HomeBob";
import HomeBobBio from "../../components/HomeBobBio";

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ mb: 6 }}>
        <SwipeGallery />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <GridItemCenter>
          <HomeBob
            title="Latest"
            imgUrl="https://source.unsplash.com/random"
            imgAlt="latest painting"
            description="The most recent painting to be added to the gallery for sale."
            action="View Details"
            actionLink="/gallery/1"
          />
        </GridItemCenter>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <GridItemCenter>
          <HomeBob
            title="Featured"
            imgUrl="https://source.unsplash.com/random"
            imgAlt="Featured painting"
            description="Check out the featured painting, definitely worth a second look!"
            action="View Details"
            actionLink="/gallery/2"
          />
        </GridItemCenter>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <GridItemCenter>
          <HomeBob
            title="Membership"
            imgUrl="https://source.unsplash.com/random"
            imgAlt="Random image"
            description="You don't have to sign up to order but there are benefits to joining this community!"
            action="Learn More"
          />
        </GridItemCenter>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <GridItemCenter>
          <HomeBobBio />
        </GridItemCenter>
      </Grid>
    </Grid>
  );
};

export default Home;
