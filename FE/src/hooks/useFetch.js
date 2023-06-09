import { useState, useCallback, useEffect, useReducer } from 'react';

const fetchReducer = () => {};

<<<<<<< HEAD
const useFetch = (url, method = 'GET', body = null) => {
  const [fetchState, fetchDispatch] = useReducer(fetchReducer, {
    loading: false,
    data: null,
    error: false,
  });
=======
const useFetch = (url, method = 'GET', body = null, skip = false) => {
  // const [fetchState, fetchDispatch] = useReducer(fetchReducer, {
  //   loading: false,
  //   data: null,
  //   error: false,
  // });
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);

      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (method !== 'GET') {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Fetch failed for URL: ${url}`);
      }

      if (method !== 'DELETE') {
        const result = await response.json();

        setData(result.data);
      } else {
        setData(null);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url, method, body]);

  useEffect(() => {
<<<<<<< HEAD
    fetchData();
  }, []);

  return { data, error, loading };
=======
    if (skip) return;
    fetchData();
  }, []);

  return { fetchData, data, error, loading };
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)
};

export default useFetch;
