import { useLayoutEffect, useRef, useState } from "react";

const StringContainer = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    // Initial width calculation
    handleResize();

    // Update width when the window is resized
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    // Update width whenever the text prop changes
    containerRef.current && setContainerWidth(containerRef.current.offsetWidth);
  }, [text]);

  return (
    <div
      ref={containerRef}
      style={{
        width: containerWidth,
        transition: "width 0.3s",
        outline: "1px solid red",
      }}
    >
      {text}
    </div>
  );
};

export default StringContainer;
