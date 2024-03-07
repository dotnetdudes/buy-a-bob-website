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

  /* Posts */
  const fetchPosts = () => api.get('/posts');

  return {
    fetchPosts,
    setHeader: api.setHeader,
  };
};

export default {
  create,
};
