"use client";
import { cn } from "@/lib/utils";
import { useRef, useState, useEffect } from "react";
import {
  IconArrowLeft,
  IconArrowRight,
} from '@tabler/icons-react';

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
  const [showArrows, setShowArrows] = useState(false);
  const [autoPaused, setAutoPaused] = useState(false);

  useEffect(() => {
    autoPausedRef.current = autoPaused;
  }, [autoPaused]);
  const [cardWidth, setCardWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const rafRef = useRef<number>();
  const startXRef = useRef(0);
  const startTranslateRef = useRef(0);
  const cycleWidth = useRef(0);
  const autoPausedRef = useRef(false);

  // Calculate container width for centering
  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    
    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);
    return () => window.removeEventListener('resize', updateContainerWidth);
  }, []);

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
          setCardWidth(width);
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

  useEffect(() => {
    const checkMobile = () => {
      setShowArrows(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleStart = (e: React.PointerEvent<HTMLDivElement>) => {
      if (showArrows || !isReady) return;
      const container = containerRef.current;
      if (!container || isDragging) return;

      e.preventDefault();
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
    if (showArrows || !isDragging || !scrollerRef.current || totalWidth === 0) return;
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
    if (container && !showArrows) {
      container.style.cursor = "grab";
      container.style.userSelect = "";
    }
  };

  // Auto-scroll with RAF
  useEffect(() => {
    const animate = () => {
      const shouldMove = !isDragging && !(pauseOnHover && isHovering) && !(showArrows && autoPausedRef.current) && totalWidth > 0 && isReady;
      if (shouldMove) {
        const delta = 0.75; // faster speed
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
        rafRef.current = requestAnimationFrame(animate);
      } else {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = undefined;
        }
      }
    };

    if (isReady) {
      rafRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isDragging, isHovering, direction, totalWidth, pauseOnHover, isReady, showArrows, autoPaused]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,var(--background)_20%,var(--background)_80%,transparent)]",
        !showArrows && "cursor-grab select-none touch-none",
        className
      )}
      onPointerDown={!showArrows ? handleStart : undefined}
      onPointerMove={!showArrows ? handleMove : undefined}
      onPointerUp={!showArrows ? handleEnd : undefined}
      onPointerLeave={!showArrows ? handleEnd : undefined}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
        {showArrows && items.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (!isReady || cardWidth === 0) return;
                
                // Calculate the target translation to center the previous card
                // Find the current center position and move to the previous card's center position
                const containerCenter = containerWidth / 2;
                const currentCardIndex = Math.round(-translateRef.current / (cardWidth + 16));
                const targetCardIndex = currentCardIndex - 1;
                
                // Calculate the translation needed to center the target card
                let newTranslate = -(targetCardIndex * (cardWidth + 16)) + containerCenter - cardWidth / 2;
                
                // Adjust for the duplicated items structure - ensure we're working within the middle cycle
                const cycle = cycleWidth.current;
                if (newTranslate > 0) {
                  newTranslate -= cycle;
                } else if (newTranslate < -2 * cycle) {
                  newTranslate += cycle;
                }
                
                translateRef.current = newTranslate;
                if (scrollerRef.current) {
                  scrollerRef.current.style.transform = `translateX(${newTranslate}px)`;
                }
                setAutoPaused(true);
                autoPausedRef.current = true;
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/30 text-primary p-3 rounded-full opacity-60 hover:opacity-100 transition-all duration-200 z-40 shadow-lg [touch-action:auto]"
            >
              <IconArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (!isReady || cardWidth === 0) return;
                
                // Calculate the target translation to center the next card
                // Find the current center position and move to the next card's center position
                const containerCenter = containerWidth / 2;
                const currentCardIndex = Math.round(-translateRef.current / (cardWidth + 16));
                const targetCardIndex = currentCardIndex + 1;
                
                // Calculate the translation needed to center the target card
                let newTranslate = -(targetCardIndex * (cardWidth + 16)) + containerCenter - cardWidth / 2;
                
                // Adjust for the duplicated items structure - ensure we're working within the middle cycle
                const cycle = cycleWidth.current;
                if (newTranslate > 0) {
                  newTranslate -= cycle;
                } else if (newTranslate < -2 * cycle) {
                  newTranslate += cycle;
                }
                
                translateRef.current = newTranslate;
                if (scrollerRef.current) {
                  scrollerRef.current.style.transform = `translateX(${newTranslate}px)`;
                }
                setAutoPaused(true);
                autoPausedRef.current = true;
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/30 text-primary p-3 rounded-full opacity-60 hover:opacity-100 transition-all duration-200 z-40 shadow-lg [touch-action:auto]"
            >
              <IconArrowRight className="w-5 h-5" />
            </button>
          </>
        )}
      <ul
        ref={scrollerRef}
        className="flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4"
      >
        {duplicatedItems.map((item, idx) => (
          <li
            className="relative w-[400px] max-w-full shrink-0 rounded-2xl border border-border bg-card px-6 py-4 md:w-[500px] shadow-lg hover:shadow-xl transition-shadow duration-225 flex flex-col min-h-[180px]"
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