"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatsCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function StatsCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Easing out function
      const easeOutQuart = 1 - Math.pow(1 - Math.min(progress / duration, 1), 4);
      
      const currentCount = Math.floor(easeOutQuart * end);
      setCount(currentCount);

      if (progress < duration) {
        animationFrameId = window.requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, isInView]);

  // Format large numbers (e.g., 100000 -> 100K)
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    if (num >= 1000) return (num / 1000).toFixed(num >= 100000 ? 0 : 1).replace(/\.0$/, "") + "K";
    return num.toString();
  };

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
