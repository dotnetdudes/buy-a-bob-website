import { useEffect } from "react";

const Silent = () => {
  useEffect(() => {
    parent.postMessage(location.href, location.origin);
  }, []);

  return null;
};

export default Silent;
