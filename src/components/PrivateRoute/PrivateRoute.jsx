import KeycloakApiManager from "../../services/keycloak";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../features/auth/slice/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const keycloak = KeycloakApiManager.getInstance().keycloak;

 
        return isAuthenticated && keycloak.hasResourceRole("bobadmin") ? <Component />: <Navigate to="/" replace />
};

export default PrivateRoute;
