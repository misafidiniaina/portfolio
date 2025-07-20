import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  // Detect if it's a touch device
  const isTouchDevice = () => {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  };

  // Cursor movement
  const move = (e) => {
    const touchEvent = e.touches ? e.touches[0] : null;
    const x = !isTouchDevice() ? e.clientX : touchEvent?.clientX || 0;
    const y = !isTouchDevice() ? e.clientY : touchEvent?.clientY || 0;

    setCursorX(x);
    setCursorY(y);

    const cursorBorder = document.getElementById("cursor-border");
    if (cursorBorder) {
      cursorBorder.style.left = `${x}px`;
      cursorBorder.style.top = `${y}px`;
    }
  };

  const handleMouseDown = () => setIsClicking(true);
  const handleMouseUp = () => setIsClicking(false);

  useEffect(() => {
    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", move);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Button hover detection
    const buttons = document.querySelectorAll("button, a, [data-cursor]");
    const addHover = () => setButtonHovered(true);
    const removeHover = () => setButtonHovered(false);

    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", addHover);
      btn.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      buttons.forEach((btn) => {
        btn.removeEventListener("mouseenter", addHover);
        btn.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <style>
        {`
        * {
          margin: 0;
          cursor: none;
        }
        #cursor {
          position: absolute;
          background-color: ${isClicking ? "crimson" : "crimson"};
          height: 10px;
          width: 10px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          transition: background-color 0.2s ease;
        }
        #cursor-border {
          position: absolute;
          width: 50px;
          height: 50px;
          background-color: transparent;
          border: 1px solid ${buttonHovered ? "red" : "#fff"};
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          transition: all 0.2s ease-out;
        }
      `}
      </style>
      <div id="cursor" style={{ left: `${cursorX}px`, top: `${cursorY}px` }} />
      <div id="cursor-border" />
    </>
  );
};

export default CustomCursor;
