import { useRef, useEffect } from "react";
export function useFocusWithKey(key: string, onTrigger?: () => void) {
  const inputEl = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (document.activeElement === inputEl.current) return;

      if (e.code === key && inputEl.current) {
        inputEl.current.focus();
        onTrigger?.();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [key, onTrigger]);

  return inputEl;
}
