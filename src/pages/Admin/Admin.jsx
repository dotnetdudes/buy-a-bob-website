import ImageButtonBase from "../../components/ImageButtonBase";
import adminImages from "./adminImages.json";
import Grid from "@mui/material/Grid";

const Admin = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <ImageButtonBase image={adminImages.images[0]} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ImageButtonBase image={adminImages.images[1]} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ImageButtonBase image={adminImages.images[2]} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ImageButtonBase image={adminImages.images[3]} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ImageButtonBase image={adminImages.images[4]} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ImageButtonBase image={adminImages.images[5]} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ImageButtonBase image={adminImages.images[6]} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ImageButtonBase image={adminImages.images[7]} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ImageButtonBase image={adminImages.images[8]} />
      </Grid>
    </Grid>
  );
};

export default Admin;
