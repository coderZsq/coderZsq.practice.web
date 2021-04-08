import { useEffect, useCallback } from 'react';

export function useLoadMore(callback) {
  const onScroll = useCallback(() => {
    let loading = true;
    const buffer = 300;
    if (
      loading &&
      window.scrollY + document.body.clientHeight >=
        document.body.scrollHeight - buffer
    ) {
      loading = false;
      callback();
      setTimeout(() => {
        loading = true;
      }, 0);
    }
  }, [callback]);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
}
