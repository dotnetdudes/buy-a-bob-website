import keycloak from './keycloak'

class KeycloakApiManager {
  constructor() {
    this.keycloak = keycloak
  }

  static getInstance() {
    if (!KeycloakApiManager.instance) {
      KeycloakApiManager.instance = new KeycloakApiManager()
    }
    return KeycloakApiManager.instance
  }
}

export default KeycloakApiManager
