import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import circuitSvg from "./circuit-background.svg?raw";
import "./landing.css";

export const Landing = () => {
  const svgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    if (!svgRef.current) return;
    svgRef.current.innerHTML = circuitSvg;

    setTimeout(() => {
        svgRef.current?.querySelectorAll("script").forEach((oldScript) => {
        const newScript = document.createElement("script");
        newScript.textContent = oldScript.textContent;
        document.body.appendChild(newScript);
        document.body.removeChild(newScript);
        });
    }, 0);

        const observer = new IntersectionObserver(
        ([entry]) => {
        const animatedEls = svgRef.current?.querySelectorAll<SVGElement>(
            "#round-1, #round-2, #round-3, #round-4"
        );
        animatedEls?.forEach((el) => {
            el.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
        });
        },
        { threshold: 0 }
    );

    if (svgRef.current) observer.observe(svgRef.current);

    return () => observer.disconnect();
    }, []);

  return (
    <div className="landing-container">
      <div ref={svgRef} className="circuit-bg" />
      <h1 className="greetingtext">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello, it's Alan.")
              .pauseFor(4000)
              .callFunction(() => {
                // hide the blinking cursor once done
                const cursor = document.querySelector(".Typewriter__cursor");
                if (cursor) (cursor as HTMLElement).style.display = "none";
              })
              .start();
          }}
          options={{
            loop: false,
            autoStart: true,
            cursor: "_",
          }}
      />
      </h1>
    </div>
  );
};