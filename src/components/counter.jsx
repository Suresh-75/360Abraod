import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Counter({ num, duration, isInViewport }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [viewedOnce, setViewedOnce] = useState(false);
  useEffect(() => {
    if (isInViewport) {
      setViewedOnce(true);
    }
  }, [isInViewport]);
  useEffect(() => {
    if (viewedOnce) {
      var animation = animate(count, num, {
        duration: duration,
      });
    }
    return animation?.stop;
  }, [viewedOnce, count]);
  return (
    <span>
      <motion.span className="abtNumberCard">{rounded}</motion.span>
    </span>
  );
}
