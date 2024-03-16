import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Product from "../../../../services/dudesApi/classes/Product";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const GalleryNew = () => {
  const [formData, setFormData] = useState(new Product());

  // Handler function for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your logic to handle form submission
    console.log(formData);
  };

  // Handler function for form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
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
              // label="Image URL"
              name="imageUrl"
              type="file"
              //value={formData.imageUrl}
              //onChange={handleChange}
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
            {/* You can add more fields here */}
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default GalleryNew;
