import axios from 'axios';
import  { useCallback, useState } from 'react'

export const useHttp = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError ] = useState(null);
   const [succes, setSucces ] = useState(false);

   const request = async (url, method = 'GET', data = null, headers = {'Content-Type': 'application/json'}) => {
      
     
      try {
        setLoading(true);
        setSucces(false)
          const res = await axios(url, {method, data, headers});
          setLoading(false);
          setSucces(true)
          return res.data;
      } catch(e) {
          setLoading(false);
          setError(e.message);
          throw e;
      }
  };

  const clearError = useCallback(() => setError(null), []);

  return {loading, request, error, clearError,succes}
 
}