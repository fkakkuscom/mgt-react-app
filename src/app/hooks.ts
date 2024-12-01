import { useEffect, useRef, useState } from "react";

export default function useOnScreen(ref: React.RefObject<HTMLElement>) {
  const observerRef = useRef<IntersectionObserver>();
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    );
  }, []);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    observerRef.current?.observe(ref.current);
    return () => {
      observerRef.current?.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
