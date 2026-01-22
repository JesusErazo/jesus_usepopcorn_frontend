import { useEffect, useRef } from "react";

export function useDocumentTitle(
  title: string,
  defaultTitle: string = "usePopcorn",
) {
  const defaultTitleRef = useRef(defaultTitle);

  useEffect(() => {
    document.title = title;

    //Reset the title when component unmounts
    return () => {
      document.title = defaultTitleRef.current;
    };
  }, [title]);
}
