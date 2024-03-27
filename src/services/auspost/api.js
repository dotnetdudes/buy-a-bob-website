import apisauce from "apisauce";

const create = () => {
  const api = apisauce.create({
    baseURL: import.meta.env.VITE_AUSPOST_API,
    // 10 second timeout...
    timeout: 10000,
    headers: {
      Accept: "application/json",
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  /* Postcode */
  const fetchPostcode = (postcode) => api.get(`/postcode/${postcode}`);

  return {
    fetchPostcode,
  };
};

export default {
  create,
};
