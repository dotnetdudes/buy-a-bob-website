import apisauce from 'apisauce';

const create = () => {
  const api = apisauce.create({
    baseURL: import.meta.env.VITE_DUDES_API,
    // 10 second timeout...
    timeout: 10000,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  /* Anti Forgery Token */
  const fetchAntiForgeryToken = () => api.get('/api/antiforgery/token');

  /* Address */
  const fetchAddresses = () => api.get('/address');
  const fetchAddress = (id) => api.get(`/address/${id}`);
  const createAddress = (address) => api.post('/address', address);
  const updateAddress = (address) => api.put(`/address/${address.id}`, address);
  const deleteAddress = (id) => api.delete(`/address/${id}`);

  /* Cart */
  const fetchCarts = () => api.get('/cart');
  const fetchCart = (id) => api.get(`/cart/${id}`);
  const createCart = (cart) => api.post('/cart', cart);
  const updateCart = (cart) => api.put(`/cart/${cart.id}`, cart);
  const deleteCart = (id) => api.delete(`/cart/${id}`);

  /* Cart Item */
  const fetchCartItems = () => api.get('/cartitem');
  const fetchCartItem = (id) => api.get(`/cartitem/${id}`);
  const createCartItem = (cartItem) => api.post('/cartitem', cartItem);
  const updateCartItem = (cartItem) => api.put(`/cartitem/${cartItem.id}`, cartItem);
  const deleteCartItem = (id) => api.delete(`/cartitem/${id}`);

  /* Category */
  const fetchCategories = () => api.get('/category');
  const fetchCategory = (id) => api.get(`/category/${id}`);
  const createCategory = (category) => api.post('/category', category);
  const updateCategory = (category) => api.put(`/category/${category.id}`, category);
  const deleteCategory = (id) => api.delete(`/category/${id}`);
  
  /* Customers */
  const fetchCustomers = () => api.get('/customers');
  const fetchCustomer = (id) => api.get(`/customers/${id}`);
  const createCustomer = (customer) => api.post('/customers', customer);
  const updateCustomer = (customer) => api.put(`/customers/${customer.id}`, customer);
  const deleteCustomer = (id) => api.delete(`/customers/${id}`);

  /* Orders */
  const fetchOrders = () => api.get('/orders');
  const fetchOrder = (id) => api.get(`/orders/${id}`);
  const createOrder = (order) => api.post('/orders', order);
  const updateOrder = (order) => api.put(`/orders/${order.id}`, order);
  const deleteOrder = (id) => api.delete(`/orders/${id}`);
  
  /* Products */
  const fetchProducts = () => api.get('/products');
  const fetchProduct = (id) => api.get(`/products/${id}`);
  const createProduct = (product) => api.post('/products', product);
  const updateProduct = (product) => api.put(`/products/${product.id}`, product);
  const deleteProduct = (id) => api.delete(`/products/${id}`);

  /* Product Category */
  const fetchProductCategories = () => api.get('/productcategory');
  const fetchProductCategory = (id) => api.get(`/productcategory/${id}`);
  const createProductCategory = (productCategory) => api.post('/productcategory', productCategory);
  const updateProductCategory = (productCategory) => api.put(`/productcategory/${productCategory.id}`, productCategory);
  const deleteProductCategory = (id) => api.delete(`/productcategory/${id}`);

  /* Product Tags */
  const fetchProductTags = () => api.get('/producttags');
  const fetchProductTag = (id) => api.get(`/producttags/${id}`);
  const createProductTag = (productTag) => api.post('/producttags', productTag);
  const updateProductTag = (productTag) => api.put(`/producttags/${productTag.id}`, productTag);
  const deleteProductTag = (id) => api.delete(`/producttags/${id}`);

  /* Shipping Address */
  const fetchShippingAddresses = () => api.get('/shippingaddress');
  const fetchShippingAddress = (id) => api.get(`/shippingaddress/${id}`);
  const createShippingAddress = (shippingAddress) => api.post('/shippingaddress', shippingAddress);
  const updateShippingAddress = (shippingAddress) => api.put(`/shippingaddress/${shippingAddress.id}`, shippingAddress);
  const deleteShippingAddress = (id) => api.delete(`/shippingaddress/${id}`);

  /* Shipping Type */
  const fetchShippingTypes = () => api.get('/shippingtype');
  const fetchShippingType = (id) => api.get(`/shippingtype/${id}`);
  const createShippingType = (shippingType) => api.post('/shippingtype', shippingType);
  const updateShippingType = (shippingType) => api.put(`/shippingtype/${shippingType.id}`, shippingType);
  const deleteShippingType = (id) => api.delete(`/shippingtype/${id}`);

  /* Status */
  const fetchStatuses = () => api.get('/status');
  const fetchStatus = (id) => api.get(`/status/${id}`);
  const createStatus = (status) => api.post('/status', status);
  const updateStatus = (status) => api.put(`/status/${status.id}`, status);
  const deleteStatus = (id) => api.delete(`/status/${id}`);

  /* Tags */
  const fetchTags = () => api.get('/tags');
  const fetchTag = (id) => api.get(`/tags/${id}`);
  const createTag = (tag) => api.post('/tags', tag);
  const updateTag = (tag) => api.put(`/tags/${tag.id}`, tag);
  const deleteTag = (id) => api.delete(`/tags/${id}`);

  return {
    fetchAntiForgeryToken,
    fetchAddresses,
    fetchAddress,
    createAddress,
    updateAddress,
    deleteAddress,
    fetchCarts,
    fetchCart,
    createCart,
    updateCart,
    deleteCart,
    fetchCartItems,
    fetchCartItem,
    createCartItem,
    updateCartItem,
    deleteCartItem,
    fetchCategories,
    fetchCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    fetchCustomers,
    fetchCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    fetchOrders,
    fetchOrder,
    createOrder,
    updateOrder,
    deleteOrder,
    fetchProducts,
    fetchProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    fetchProductCategories,
    fetchProductCategory,
    createProductCategory,
    updateProductCategory,
    deleteProductCategory,
    fetchProductTags,
    fetchProductTag,
    createProductTag,
    updateProductTag,
    deleteProductTag,
    fetchShippingAddresses,
    fetchShippingAddress,
    createShippingAddress,
    updateShippingAddress,
    deleteShippingAddress,
    fetchShippingTypes,
    fetchShippingType,
    createShippingType,
    updateShippingType,
    deleteShippingType,
    fetchStatuses,
    fetchStatus,
    createStatus,
    updateStatus,
    deleteStatus,
    fetchTags,
    fetchTag,
    createTag,
    updateTag,
    deleteTag,
    setHeader: api.setHeader,
  };
};

export default {
  create,
};
