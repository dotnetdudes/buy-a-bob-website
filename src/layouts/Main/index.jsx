import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GridItem from "../../components/GridItem";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const Main = styled("main")(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
}));

const Layout = () => {
  return (
    <Root>
      <Header />
      <Main>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <GridItem>
              <Outlet />
            </GridItem>
          </Grid>
        </Grid>
      </Main>
      <Footer />
      <ToastContainer position="bottom-center" autoClose={3000} theme="colored" />
    </Root>
  );
};

export default Layout;
