import KeycloakApiManager from "../../../../services/keycloak";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../slice/selectors";

const AdminAccess = ({ component: Component, ...rest }) => {
  const keycloak = KeycloakApiManager.getInstance().keycloak;
  const isAuthenticated = useSelector(selectIsAuthenticated);

  console.log(keycloak.hasResourceRole("bobadmin"));

  return isAuthenticated && keycloak.hasResourceRole("bobadmin") ? <Component {...rest} /> : null;
};

export default AdminAccess;
