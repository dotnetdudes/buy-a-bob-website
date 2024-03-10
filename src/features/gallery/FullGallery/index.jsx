import GalleryItem from "./GalleryItem";
import Grid from "@mui/material/Grid";
import ToggleOrientation from "../ToggleOrientation";
import GridItem from "../../../components/GridItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../products/slice";
import { selectProductState } from "../../products/slice/selectors";
import { useEffect } from "react";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    cols: 2,
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      {itemData.map((item) => (
        <GalleryItem
          key={item.img}
          image={item.img}
          title={item.title}
          description={item.author}
        />
      ))}
    </div>
  );
};

function FullGallery() {
  const dispatch = useDispatch();
  const { items, selectedItem, loading, error } = useSelector(selectProductState);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }
  , [dispatch]);

  return (
    <Grid container>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <GridItem>
          <ToggleOrientation />
        </GridItem>
      </Grid>
      <Grid item xs={12}>
        <Gallery />
      </Grid>
    </Grid>
  );
}

export default FullGallery;
