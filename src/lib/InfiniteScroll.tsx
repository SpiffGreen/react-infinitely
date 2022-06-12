import { ReactElement, useEffect, useRef, useState } from "react";

const OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 0.05
};

const EmptyDisplay = <div></div>;

const InfiniteScroll = ({
  loader,
  endDisplay,
  onEnd,
  hasMore,
  children
}: { loader: ReactElement, endDisplay: ReactElement, hasMore: Boolean, onEnd: () => void, children: ReactElement[] }) => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();
  observer.current = new IntersectionObserver(
    handleObserver,
    OPTIONS
  );
  const [isIntersecting, setIsIntersecting] = useState(false);

  function handleObserver(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;
    if(!entry.isIntersecting) return setIsIntersecting(false);
    setIsIntersecting(true);
  }

  useEffect(() => {
    // Perform fetch operation if loader container is in view
    if(isIntersecting) {
      hasMore && onEnd(); // call onEnd method if more content exist
    };
  }, [isIntersecting]);

  useEffect(() => {
    // initialize observer
    window.addEventListener("DOMContentLoaded", () => {
      const { current } = loadingRef;
      observer.current?.observe(current as HTMLElement);
    });
    return () => {
      observer.current?.disconnect();
    }
  }, [loadingRef]);
  
  return (
    <div className="infinite-scroll__container">
      <div className="infinite-scroll__items">
        {children}
      </div>
      <div className="infinite-scroll__loader-container" ref={loadingRef}>
        {hasMore ? loader : endDisplay}
      </div>
    </div>
  );
}

InfiniteScroll.defaultProps = {
  endDisplay: EmptyDisplay,
  loader: EmptyDisplay
}

export default InfiniteScroll;