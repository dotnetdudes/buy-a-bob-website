import api from "./api"

class PaypalApiManager {
  constructor() {
    this.api = api.create()
  }

  static getInstance() {
    if (!PaypalApiManager.instance) {
      PaypalApiManager.instance = new PaypalApiManager()
    }
    return PaypalApiManager.instance
  }
}

export default PaypalApiManager
