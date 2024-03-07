import { styled } from "@mui/material/styles";

const Item = styled("div")(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

const GridItem = ({ children }) => {
  return (
    <Item>
      {children}
    </Item>
  );
}

export default GridItem;
