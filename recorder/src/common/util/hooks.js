import { useState, useCallback } from 'react';

export function useLoadMore(callback) {
  const [loading, setLoading] = useState(true);
  return useCallback(() => {
    if (
      loading &&
      window.scrollY + document.body.clientHeight >=
        document.body.scrollHeight - 1200
    ) {
      setLoading(false);
      callback();
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    }
  }, [loading, callback]);
}
