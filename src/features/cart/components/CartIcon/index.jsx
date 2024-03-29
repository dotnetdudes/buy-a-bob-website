import { useSelector } from "react-redux";
import { getCartCount } from "../../slice/selectors";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip from "@mui/material/Tooltip";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const CartIcon = () => {
  const cartCount = useSelector(getCartCount);
  return (
    <Tooltip title="Go to Cart" placement="bottom">
      <IconButton aria-label="cart" color="inherit" size="small">
        <StyledBadge badgeContent={cartCount} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Tooltip>
  );
};

export default CartIcon;
