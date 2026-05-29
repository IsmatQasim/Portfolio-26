import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: -100,
    y: -100,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target;

      setIsHovering(
        target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button")
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* INNER DOT */}
      <div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white z-[12000] pointer-events-none transition-transform duration-150 ease-out shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${
            isHovering ? 1.5 : 1
          })`,
        }}
      />

      {/* OUTER RING */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 z-[11999] pointer-events-none transition-all duration-200 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${
            isHovering ? 1.2 : 1
          })`,
          opacity: isHovering ? 0.8 : 0.4,
        }}
      />
    </>
  );
};

export default Cursor;