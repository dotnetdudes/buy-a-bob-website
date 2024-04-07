import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import HistoryIcon from "@mui/icons-material/History";
import Logout from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeycloakApiManager from "../../../../services/keycloak";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { loginSuccess, loginFailure } from "../../slice";

const UserIcon = () => {
  const dispatch = useDispatch();
  const keycloak = KeycloakApiManager.getInstance().keycloak;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const init = async () => {
      keycloak.onAuthSuccess = () => {
        dispatch(loginSuccess());
      }
      keycloak.onAuthError = () => {
        dispatch(loginFailure());
      }
      keycloak.onAuthRefreshSuccess = () => {
        dispatch(loginSuccess());
      }
    };
    init();
  }
  , [keycloak, dispatch]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await keycloak.login();
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      await keycloak.logout();
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };
  return (
    <>
      <Tooltip title="User Settings" placement="bottom">
        <IconButton
          onClick={handleClick}
          color="inherit"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            sx={{ bgcolor: "inherit", color: "inherit" }}
            variant="square"
          >
            <AccountBoxIcon />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 20,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {keycloak.authenticated && (
          <MenuItem onClick={handleClose}>
            <Avatar /> My account
          </MenuItem>
        )}
        {keycloak.authenticated ? (
          <MenuItem onClick={handleClose}>
            <Avatar>
              <HistoryIcon />
            </Avatar>
            My order history
          </MenuItem>
        ) : (
          <MenuItem onClick={handleClose}>
            <Avatar>
              <HowToRegIcon />
            </Avatar>
            Sign up
          </MenuItem>
        )}
        <Divider />
        {!keycloak.authenticated ? (
          <MenuItem onClick={handleLogin}>
            <ListItemIcon>
              <LoginIcon fontSize="small" />
            </ListItemIcon>
            Login
          </MenuItem>
        ) : (
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default UserIcon;
