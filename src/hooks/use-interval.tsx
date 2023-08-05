import { useEffect, useRef } from 'react';

export function useInterval<C extends CallableFunction>(
  callback: C,
  delay: number | null,
): void {
  const saveCallback = useRef<C>();

  // Remeber the latest callback.
  useEffect(() => {
    saveCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (saveCallback.current) saveCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
