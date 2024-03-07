import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../images/logo.png';
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { NavLink, Link as RouterLink } from "react-router-dom";
import Link from '@mui/material/Link';
import ThemeSwitch from '../ThemeSwitch';

const LogoLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  flexGrow: 1,
});

const LogoImg = styled('img')(() => ({ 
  width: 86,
  height: 60,
  marginRight: 10,

  "@media (max-width:640px)": {
    width: 43,
    height: 30,
  },
}));

const HeaderLink = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  textDecoration: 'none',
  color: 'inherit',
}));

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <LogoLink component={RouterLink} to="/">
          <LogoImg src={Logo} alt="Buy a Bob logo" />
          <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'flex' } }}>IOD Blog Team</Typography>
        </LogoLink>
        <nav>
          <HeaderLink component={NavLink} to="/">Home</HeaderLink>
          <HeaderLink component={NavLink} to="/users">Users</HeaderLink>
          <HeaderLink component={NavLink} to="/posts">Blog</HeaderLink>
        </nav>
        <ThemeSwitch />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
