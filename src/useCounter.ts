import { useCallback, useState } from "react";
import type { UseCounterResult } from "./types";

export function useCounter(initialValue = 0): UseCounterResult {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((value) => value + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((value) => value - 1);
  }, []);

  return { count, increment, decrement };
}
