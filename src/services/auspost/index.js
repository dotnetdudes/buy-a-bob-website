import api from "./api"

class AusPostApiManager {
  constructor() {
    this.api = api.create()
  }

  static getInstance() {
    if (!AusPostApiManager.instance) {
        AusPostApiManager.instance = new AusPostApiManager()
    }
    return AusPostApiManager.instance
  }
}

export default AusPostApiManager
