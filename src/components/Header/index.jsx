import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../../images/logo.png";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import ThemeSwitch from "../ThemeSwitch";
import CartIcon from "../../features/cart/components/CartIcon";
import UserIcon from "../../features/auth/components/UserIcon";
import GalleryIcon from "../GalleryIcon";
import AdminIcon from "../AdminIcon";
import AdminAccess from "../../features/auth/components/AdminAccess";

const HeaderMain = styled("div")({
  display: "flex",
  flexGrow: 1,
});

const LogoLink = styled(Link)({
  alignItems: "center",
  textDecoration: "none",
  color: "inherit",
});

const LogoImg = styled("img")(() => ({
  width: 312,
  height: 70,
  marginRight: 10,

  "@media (max-width:640px)": {
    width: 177,
    height: 40,
  },
}));

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ bgcolor: "#171717" }}>
        <HeaderMain>
          <LogoLink component={RouterLink} to="/">
            <LogoImg src={Logo} alt="Buy a Bob logo" />
          </LogoLink>
        </HeaderMain>
        <AdminAccess component={AdminIcon} />
        <GalleryIcon />
        <UserIcon />
        <CartIcon />
        <ThemeSwitch />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
