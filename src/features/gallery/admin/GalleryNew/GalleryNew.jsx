import { useEffect } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import BackButton from "../../../../components/BackButton";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import Product from "../../../../services/dudesApi/classes/Product";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { fetchToken } from "../../../antiforgery/slice";
import { addProduct } from "../../../products/slice";
import { selectProductState } from "../../../products/slice/selectors";
import { useSelector } from "react-redux";

const GalleryNew = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectProductState);
  const [formData, setFormData] = useState(new Product());

  useEffect(() => {
    dispatch(fetchToken());
  }, [dispatch]);

  // Handler function for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const artwork = event.target.imageUrl.files[0];
    // // create form data
    const postData = new FormData();
    // iterate formData object
    for (const prop in formData) {
      postData.append(prop, formData[prop]);
    }
    // attach file
    postData.append("file", artwork, artwork.name);

    dispatch(addProduct(postData));
  };

  // Handler function for form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Add artwork
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <fieldset>
            <legend>Upload Image</legend>
            <TextField
              name="imageUrl"
              type="file"
              required
              fullWidth
              margin="normal"
            />
          </fieldset>
          <TextField
            label="Weight"
            name="weight"
            type="number"
            value={formData.weight}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Width"
            name="width"
            type="number"
            value={formData.width}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Depth"
            name="depth"
            type="number"
            value={formData.depth}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Height"
            name="height"
            type="number"
            value={formData.height}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Quantity"
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <LoadingButton
              color="secondary"
              type="submit"
              loading={loading}
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="contained"
            >
              <span>Save</span>
            </LoadingButton>
            <BackButton />
          </ButtonGroup>
        </form>
      </Grid>
    </Grid>
  );
};

export default GalleryNew;
