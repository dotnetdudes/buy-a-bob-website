import SwipeGallery from "../../features/gallery/components/SwipeGallery";
import Grid from "@mui/material/Grid";
import GridItemCenter from "../../components/GridItemCenter";
import HomeBob from "../../components/HomeBob";
import HomeBobBio from "../../components/HomeBobBio";
import { selectRandomActiveProduct, selectLatestProduct } from "../../features/products/slice/selectors";
import { useSelector } from "react-redux";

const Home = () => {
  const featured = useSelector(selectRandomActiveProduct);
  const latest = useSelector(selectLatestProduct);
  
  return (
    <Grid container>
      <Grid item xs={12} sx={{ mb: 6 }}>
        <SwipeGallery />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <GridItemCenter>
          <HomeBob
            title="Latest"
            imgUrl={latest && `${import.meta.env.VITE_IMAGE_SERVER_URL}/${latest.imageUrl}`}
            imgAlt="latest painting"
            description="The most recent painting striaght from the easel to the gallery for sale."
            action="View Details"
            actionLink={`/gallery/${latest && latest.id}`}
          />
        </GridItemCenter>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <GridItemCenter>
          <HomeBob
            title="Featured"
            imgUrl={featured && `${import.meta.env.VITE_IMAGE_SERVER_URL}/${featured.imageUrl}`}
            imgAlt="Featured painting"
            description="Check out the featured painting, we think it's definitely worth a second look!"
            action="View Details"
            actionLink={`/gallery/${featured && featured.id}`}
          />
        </GridItemCenter>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <GridItemCenter>
          <HomeBob
            title="Membership"
            imgUrl="/images/membership.png"
            imgAlt="Buy a Bob membership"
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
