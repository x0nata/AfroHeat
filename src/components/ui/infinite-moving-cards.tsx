"use client";
import { cn } from "@/lib/utils";
import { useRef, useState, useEffect } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const translateRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [totalWidth, setTotalWidth] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const rafRef = useRef<number>();
  const startXRef = useRef(0);
  const startTranslateRef = useRef(0);
  const cycleWidth = useRef(0);

  // Three copies for bi-directional infinite scroll
  const duplicatedItems = [...items, ...items, ...items];

  // Measure widths and initialize after mount
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const scroller = scrollerRef.current;
      if (!scroller || items.length === 0) return;

      requestAnimationFrame(() => {
        const firstItem = scroller.children[0] as HTMLElement;
        if (firstItem) {
          const width = firstItem.offsetWidth;
          const gap = 16; // gap-4
          const total = items.length * (width + gap) - gap;
          setTotalWidth(total);
          cycleWidth.current = total;

          // Initial position: -total to show the middle set
          const initialTranslate = -total;
          translateRef.current = initialTranslate;
          if (scroller) {
            scroller.style.transform = `translateX(${initialTranslate}px)`;
          }
          setIsReady(true);
        }
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [items.length]);

  const handleStart = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isReady) return;
    const container = containerRef.current;
    if (!container || isDragging) return;
    container.setPointerCapture(e.pointerId);
    setIsDragging(true);
    startXRef.current = e.clientX;
    startTranslateRef.current = translateRef.current;
    if (container) {
      container.style.cursor = "grabbing";
      container.style.userSelect = "none";
    }
  };

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollerRef.current || totalWidth === 0) return;
    const deltaX = e.clientX - startXRef.current;
    let newTranslate = startTranslateRef.current + deltaX;
    const cycle = cycleWidth.current;

    // Infinite reposition during drag
    if (newTranslate > 0) {
      newTranslate -= cycle;
      startTranslateRef.current -= cycle;
    } else if (newTranslate < -2 * cycle) {
      newTranslate += cycle;
      startTranslateRef.current += cycle;
    }

    translateRef.current = newTranslate;
    if (scrollerRef.current) {
      scrollerRef.current.style.transform = `translateX(${newTranslate}px)`;
    }
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const container = containerRef.current;
    if (container) {
      container.style.cursor = "grab";
      container.style.userSelect = "";
    }
  };

  // Auto-scroll with RAF
  useEffect(() => {
    const animate = () => {
      if (!isDragging && !(pauseOnHover && isHovering) && totalWidth > 0 && isReady) {
        const delta = 0.6; // slow speed
        const moveDir = direction === "left" ? -1 : 1;
        let newTranslate = translateRef.current + delta * moveDir;
        const cycle = cycleWidth.current;

        // Infinite reposition during auto-scroll
        if (newTranslate > 0) {
          newTranslate -= cycle;
        } else if (newTranslate < -2 * cycle) {
          newTranslate += cycle;
        }

        translateRef.current = newTranslate;
        if (scrollerRef.current) {
          scrollerRef.current.style.transform = `translateX(${newTranslate}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    if (isReady) {
      rafRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isDragging, isHovering, direction, totalWidth, pauseOnHover, isReady]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,var(--background)_20%,var(--background)_80%,transparent)] cursor-grab select-none",
        className
      )}
      onPointerDown={handleStart}
      onPointerMove={handleMove}
      onPointerUp={handleEnd}
      onPointerLeave={handleEnd}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <ul
        ref={scrollerRef}
        className="flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4"
      >
        {duplicatedItems.map((item, idx) => (
          <li
            className="relative w-[400px] max-w-full shrink-0 rounded-2xl border border-border bg-card px-6 py-4 md:w-[500px] shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[180px]"
            key={idx}
          >
            <blockquote className="flex flex-col h-full">
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-foreground font-poppins flex-grow">
                {item.quote}
              </span>
              <div className="relative z-20 mt-auto pt-4 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-muted-foreground font-poppins">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-muted-foreground font-poppins">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};