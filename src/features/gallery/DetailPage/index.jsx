// import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import GridItem from "../../../components/GridItem";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import HouseIcon from "@mui/icons-material/House";
// import { useSelector } from "react-redux";
// import { selectProductById } from "../../products/slice/selectors";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const DetailPage = () => {
  // const { id } = useParams();
  // const selectedItem = useSelector(selectProductById(id));

  const selectedItem = {
    Id: 1,
    Name: "Product 1",
    Price: 100,
    Description: "Description of the item",
    ImageUrl: "https://source.unsplash.com/random",
    Weight: 1,
    Width: 1,
    Depth: 1,
    Height: 1,
    Quantity: 1,
    Created: new Date().toUTCString(),
    Updated: null,
    IsSold: false,
    SoldDate: null,
    Deleted: null,
  };

  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <img
          src="https://source.unsplash.com/random"
          alt="random"
          className="detail-image"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <GridItem>
          {selectedItem ? (
            <>
              <Typography variant="h4">{selectedItem.Name}</Typography>
              <Divider sx={{ mb: 1, mt: 1 }} />
              <Typography variant="subtitle1">
                {selectedItem.Description}
              </Typography>
              <Divider sx={{ mb: 1, mt: 1 }} />
              <Grid container>
                <Grid item xs={6}>
                  <p>
                    <Typography variant="subtitle2">Weight:</Typography>
                    <Typography variant="body2">
                      {selectedItem.Weight}
                    </Typography>
                  </p>
                  <p>
                    <Typography variant="subtitle2">Width:</Typography>
                    <Typography variant="body2">
                      {selectedItem.Width}
                    </Typography>
                  </p>
                  <p>
                    <Typography variant="subtitle2">Height:</Typography>
                    <Typography variant="body2">
                      {selectedItem.Height}
                    </Typography>
                  </p>
                </Grid>
                <Grid item xs={6}>
                  <p>
                    <Typography variant="subtitle2">Depth:</Typography>
                    <Typography variant="body2">
                      {selectedItem.Depth}
                    </Typography>
                  </p>
                  <p>
                    <Typography variant="subtitle2">Quantity:</Typography>
                    <Typography variant="body2">
                      {selectedItem.Quantity}
                    </Typography>
                  </p>
                  <p>
                    <Typography variant="subtitle2">Created:</Typography>
                    <Typography variant="body2">
                      {selectedItem.Created}
                    </Typography>
                  </p>
                </Grid>
              </Grid>
              <p>
                <Typography variant="subtitle2">Price:</Typography>
                <Typography variant="body2">{selectedItem.Price}</Typography>
              </p>
            </>
          ) : (
            <Typography variant="h4">Item not found</Typography>
          )}
        </GridItem>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <GridItem>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h6">
                <LocalShippingIcon size="large" />
                &nbsp; Calculate shipping
              </Typography>
              <Divider sx={{ mb: 1, mt: 1 }} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="input-with-icon-textfield"
                label="Enter your destination to get a shipping estimate."
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HouseIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Calculate
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mt: 2 }}>Total: $100</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ mt: 4, mb: 2 }}
                fullWidth
              >
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </GridItem>
      </Grid>
    </Grid>
  );
};

export default DetailPage;
