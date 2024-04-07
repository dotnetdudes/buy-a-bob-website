import { Route, Redirect } from "react-router-dom";
import KeycloakApiManager from "../../services/keycloak";

const AdminRoute = ({ component: Component, ...rest }) => {
  const keycloak = KeycloakApiManager.getInstance().keycloak;

  return (
    <Route
      {...rest}
      render={(props) =>
        keycloak.hasResourceRole("bobadmin") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default AdminRoute;
