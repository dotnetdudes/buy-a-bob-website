import Keycloak from "keycloak-js"

const keycloak = new Keycloak({
  url: import.meta.env.VITE_AUTH_SERVER_URL,
  realm: import.meta.env.VITE_AUTH_SERVER_REALM,
  clientId: import.meta.env.VITE_AUTH_SERVER_CLIENT_ID,
});

try {
  const authenticated = await keycloak.init({
    onLoad: 'check-sso',
    promiseType: 'native',    
  });
  console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
} catch (error) {
  console.error('Failed to initialize adapter:', error);
}

export default keycloak;
