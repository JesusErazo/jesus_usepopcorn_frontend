import { useEffect } from "react";
export function useLocalStorage(key: string, value: string) {
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
}
