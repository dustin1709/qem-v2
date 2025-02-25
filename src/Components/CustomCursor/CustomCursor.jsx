import { useEffect } from "react";
import gsap from "gsap";
import "./CustomCursor.scss";

const CustomCursor = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      cursorMovingAnimation(event);
      cursorMovingAnimation2(event);
    };

    const cursorMovingAnimation = (event) => {
      try {
        const timing = gsap.timeline({
          defaults: {
            x: event.clientX,
            y: event.clientY,
          },
        });

        timing.to(
          ".cs_cursor_sm",
          {
            x: event.clientX,
            y: event.clientY,
            ease: "power2.out",
          },
          "-=0.01"
        );
      } catch (err) {
        console.log(err);
      }
    };

    const cursorMovingAnimation2 = (event) => {
      try {
        const timing = gsap.timeline({
          defaults: {
            x: event.clientX,
            y: event.clientY,
          },
        });
        timing.to(
          ".cs_cursor_lg",
          {
            x: event.clientX,
            y: event.clientY,
            ease: "power2.out",
          },
          "-=0.01"
        );
      } catch (err) {
        console.log(err);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <span className="cs_cursor_lg d"></span>
      <span className="cs_cursor_sm"></span>
    </>
  );
};

export default CustomCursor;
