import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { useErrorHandler } from "react-error-boundary";

axios.defaults.baseURL = "https://web-task-api.herokuapp.com";

export const useAxios = (axiosParams: AxiosRequestConfig) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState(true);
  const handleError = useErrorHandler();

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [response, loading];
};
