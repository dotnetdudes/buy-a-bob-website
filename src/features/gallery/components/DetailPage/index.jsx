import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import GridItem from "../../../../components/GridItem";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import HouseIcon from "@mui/icons-material/House";
import { useSelector } from "react-redux";
import { addItem } from "../../../cart/slice";
import { selectProductById } from "../../../products/slice/selectors";
import { getItems } from "../../../cart/slice/selectors";
import CartItem from "../../../cart/slice/CartItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import dayjs from "../../../../utils/day";

const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(id);
  const selectedItem = useSelector(selectProductById(id));
  const cartItems = useSelector(getItems);
  // console.log(selectedItem);
  const handle = useFullScreenHandle();

  const addToCart = () => {
    // check if item is already in cart
    const itemInCart = cartItems.find((item) => item.id === selectedItem.id);
    if (itemInCart) {
      // dont add to cart if item is already in cart - show alert
      alert("Item is already in cart");
      return;
    }
    const newItem = CartItem.fromProduct(selectedItem);
    console.log(newItem);
    dispatch(addItem(newItem.toJSON()));
  }

  return (
    <Grid container>
      <Grid item xs={12} md={4}>
      <FullScreen handle={handle}>
        <img
          src={`${import.meta.env.VITE_IMAGE_SERVER_URL}/${selectedItem.imageUrl}` || "https://via.placeholder.com/300"}
          alt={selectedItem?.description || "Item"}
          className="detail-image"
          onClick={handle.enter}
        />
        </FullScreen>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <GridItem>
          {selectedItem ? (
            <>
              <Typography component={'span'} variant="h4">{selectedItem.name}</Typography>
              <Divider sx={{ mb: 1, mt: 1 }} />
              <Typography component={'span'} variant="subtitle1">
                {selectedItem.description}
              </Typography>
              <Divider sx={{ mb: 1, mt: 1 }} />
              <Grid container>
                <Grid item xs={6}>
                  <p>
                    <Typography component={'span'} variant="subtitle2">Weight: </Typography>
                    <Typography component={'span'} variant="body2">
                      {selectedItem.weight} g
                    </Typography>
                  </p>
                  <p>
                    <Typography component={'span'} variant="subtitle2">Width: </Typography>
                    <Typography component={'span'} variant="body2">
                      {selectedItem.width} cm
                    </Typography>
                  </p>
                  <p>
                    <Typography component={'span'} variant="subtitle2">Height: </Typography>
                    <Typography component={'span'} variant="body2">
                      {selectedItem.height} cm
                    </Typography>
                  </p>
                </Grid>
                <Grid item xs={6}>
                  <p>
                    <Typography component={'span'} variant="subtitle2">Depth: </Typography>
                    <Typography component={'span'} variant="body2">
                      {selectedItem.depth} cm
                    </Typography>
                  </p>
                  <p>
                    <Typography component={'span'} variant="subtitle2">Quantity: </Typography>
                    <Typography component={'span'} variant="body2">
                      {selectedItem.quantity}
                    </Typography>
                  </p>
                  <p>
                    <Typography component={'span'} variant="subtitle2">Created: </Typography>
                    <Typography component={'span'} variant="body2">
                      {selectedItem.created ? dayjs(selectedItem.created).format("lll") : ''}
                    </Typography>
                  </p>
                </Grid>
              </Grid>
              <p>
                <Typography component={'span'} variant="subtitle2">Price: </Typography>
                <Typography component={'span'} variant="body2">${selectedItem.price} AUD</Typography>
              </p>
            </>
          ) : (
            <Typography component={'span'} variant="h4">Item not found</Typography>
          )}
        </GridItem>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <GridItem>
          <Grid container>
            <Grid item xs={12}>
              <Typography component={'span'} variant="button" gutterBottom>
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
            <Grid item xs={12} container direction={'row'} justifyContent={'flex-end'} alignItems={'flex-end'}>
              <Typography component={'div'} variant="button" sx={{ mt: 6, mr: 1, width: 'auto', minWidth: 0, display: 'inline-block' }}>Total: $100</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ mt: 4, mb: 2 }}
                fullWidth
                onClick={addToCart}
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
