import { useEffect } from "react";

export function useKeyPressListener(keyName: string, action: () => void) {
  useEffect(() => {
    function callback(e: KeyboardEvent) {
      if (e.code === keyName) {
        action();
      }
    }

    document.addEventListener("keydown", callback);

    return () => document.removeEventListener("keydown", callback);
  }, [keyName, action]);
}
