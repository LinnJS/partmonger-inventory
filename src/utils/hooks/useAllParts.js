import { useState, useEffect, useCallback } from 'react';

const useAllParts = () => {
  const [parts, setParts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getParts = useCallback(async () => {
    setIsLoading(true);
    const res = await fetch('http://localhost:9001/parts');
    const parts = await res.json();

    return parts;
  }, []);

  useEffect(() => {
    getParts()
      .then((parts) => {
        const partsWithoutInActive = parts.filter((part) => part.isActive);

        return setParts(partsWithoutInActive) && setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  }, [getParts]);

  return [parts, isLoading, error];
};

export default useAllParts;
