import api from "./api"

class DudesApiManager {
  constructor() {
    this.api = api.create()
  }

  static getInstance() {
    if (!DudesApiManager.instance) {
      DudesApiManager.instance = new DudesApiManager()
    }
    return DudesApiManager.instance
  }
}

export default DudesApiManager
