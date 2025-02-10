import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFetchData = (getDataFunc, params = []) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    getDataFunc(...params)
      .then((object) => {
        if (object.status === 404) {
          navigate("/error", { replace: true });
        } else {
          setData(object);
        }
      })
      .catch(() => {
        navigate("/error", { replace: true });
      })
      .finally(() => setLoading(false));
  }, [...params, getDataFunc, navigate]);

  return { loading, data };
};
