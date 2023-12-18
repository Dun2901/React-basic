import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // componentDidMount
  useEffect(() => {
    try {
      const fetchData = async () => {
        let res = await axios.get(url);
        let data = res && res.data ? res.data : []; // true or false
        setData(data);
        setIsLoading(false);
        setIsError(false);
      };

      setTimeout(() => {
        fetchData();
      }, [500]);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, isError };
};

export default useFetch;
