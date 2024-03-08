import KeycloakApiManager from "../../../../services/keycloak";

const Login = () => {
  const keycloak = KeycloakApiManager.getInstance().keycloak;
  const handleLogin = async (event) => {
    event.preventDefault();
    await keycloak.login();
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    await keycloak.logout();
  };

  return !keycloak.authenticated ? (
    <div onClick={handleLogin}>Login</div>
  ) : (
    <div onClick={handleLogout}>Logout</div>
  );
};

export default Login;
