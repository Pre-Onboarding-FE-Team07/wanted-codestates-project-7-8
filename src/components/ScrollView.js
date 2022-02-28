import { cloneElement, useEffect, useRef } from 'react';

export default function ScrollView({
  data,
  threshold = 0,
  className,
  renderItem,
  keyExtractor,
  onReachScrollEnd = () => {},
}) {
  const containerRef = useRef();

  useEffect(() => {
    const root = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting && onReachScrollEnd();
      },
      { root, rootMargin: `0px 0px ${threshold}px`, threshold: 1 },
    );
    if (data.length > 0) {
      observer.disconnect();
      observer.observe(containerRef.current.lastChild);
    }
    return () => observer?.disconnect();
  }, [data, threshold, onReachScrollEnd]);

  return (
    <ul className={className} ref={containerRef}>
      {data.map((item) => cloneElement(renderItem(item), { key: keyExtractor(item) }))}
    </ul>
  );
}
