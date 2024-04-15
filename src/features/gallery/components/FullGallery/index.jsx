import Grid from "@mui/material/Grid";
import ToggleOrientation from "../ToggleOrientation";
import GridItem from "../../../../components/GridItem";
import { selectOrientation } from "../../../gallery/slice/selectors";
import { selectActiveProductsByOrientation } from "../../../products/slice/selectors";
import Gallery from "./Gallery";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../products/slice";


function FullGallery() {
  const dispatch = useDispatch();
  const orientation = useSelector(selectOrientation);
  const items = useSelector(selectActiveProductsByOrientation(orientation));

  // get items from api if not in store
  useEffect(() => {
  if (items.length === 0) {
    dispatch(fetchProducts());
  }
  });

  return (
    <Grid container>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <GridItem>
          <ToggleOrientation />
        </GridItem>
      </Grid>
      <Grid item xs={12}>
        <Gallery itemData={items} />
      </Grid>
    </Grid>
  );
}

export default FullGallery;
