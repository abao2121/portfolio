import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import circuitSvg from "./circuit-background.svg?raw";
import styles from "./Home.module.css";

export const Landing = () => {
  const svgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    if (!svgRef.current) return;
    const container = svgRef.current;
    container.innerHTML = circuitSvg;
    const interactive = container.querySelector<SVGGElement>("#interactive-layer");
    const chips = container.querySelector<SVGGElement>("#chips");
    const pulses = container.querySelector<SVGGElement>("#pulses");
    const svg = container.querySelector<SVGSVGElement>("svg");
    const svgNS = "http://www.w3.org/2000/svg";
    let isVisible = true;
    let lastMove = 0;

    const getLengthAtClick = (
      path: SVGPathElement,
      x: number,
      y: number,
      precision = 2,
    ) => {
      const totalLength = path.getTotalLength();
      let bestDistance = 0;
      let minDiff = Infinity;

      for (let i = 0; i <= totalLength; i += precision) {
        const point = path.getPointAtLength(i);
        const dx = x - point.x;
        const dy = y - point.y;
        const diffSq = dx * dx + dy * dy;

        if (diffSq < minDiff) {
          minDiff = diffSq;
          bestDistance = i;
        }
      }

      return bestDistance;
    };

    const chipPulse = (chip: Element) => {
      const chipId = chip.getAttribute("id");
      if (!chipId) return;

      const chipPulses = container.querySelector<SVGElement>(
        `#${chipId}-pulses`,
      );
      chipPulses?.animate(
        [
          { strokeDashoffset: 60, offset: 0 },
          { strokeDashoffset: -1000, offset: 0.4 },
          { strokeDashoffset: -1000, offset: 1 },
        ],
        { duration: 3000 },
      );
    };

    const animatePulse = (
      clickedPath: SVGPathElement,
      clickedX: number,
      clickedY: number,
    ) => {
      if (!svg || !pulses || pulses.childElementCount > 20) return;

      const screenMatrix = svg.getScreenCTM();
      if (!screenMatrix) return;

      const pt = svg.createSVGPoint();
      pt.x = clickedX;
      pt.y = clickedY;
      const svgPoint = pt.matrixTransform(screenMatrix.inverse());

      const pathData = clickedPath.getAttribute("d");
      if (!pathData) return;

      const pathLength = clickedPath.getTotalLength();
      const pulseBegin = getLengthAtClick(clickedPath, svgPoint.x, svgPoint.y);
      const pulseWidth = 40;
      const newPulse = document.createElementNS(svgNS, "path");
      newPulse.setAttribute("d", pathData);
      newPulse.setAttribute("stroke", "#4e91fd8f");
      newPulse.setAttribute("filter", "url(#glow)");
      newPulse.setAttribute("stroke-width", "4");
      newPulse.setAttribute("stroke-linecap", "round");
      newPulse.setAttribute("fill", "none");
      newPulse.style.strokeDasharray = `${pulseWidth}, ${pathLength}`;

      pulses.appendChild(newPulse);

      const isFirstHalf = pulseBegin / pathLength < 0.5;
      const keyframes = isFirstHalf
        ? [
            { strokeDashoffset: -pulseBegin, strokeOpacity: 0, offset: 0 },
            { strokeOpacity: 0.3, offset: 0.05 },
            { strokeDashoffset: -pathLength, strokeOpacity: 0.3, offset: 1 },
          ]
        : [
            {
              strokeDashoffset: -pulseBegin + pulseWidth,
              strokeOpacity: 0,
              offset: 0,
            },
            { strokeOpacity: 0.3, offset: 0.05 },
            { strokeDashoffset: pulseWidth, strokeOpacity: 0.3, offset: 1 },
          ];
      const distance = isFirstHalf
        ? (pathLength - pulseBegin) * 1.5
        : pulseBegin * 1.5;
      const animation = newPulse.animate(keyframes, { duration: distance });
      animation.onfinish = () => newPulse.remove();
    };

    const getTargets = (event: MouseEvent) => {
      if (!interactive || !chips) return { pathTargets: [], chipTargets: [] };

      const allTargets = document.elementsFromPoint(event.clientX, event.clientY);
      const pathTargets = allTargets.filter(
        (target): target is SVGPathElement =>
          target instanceof SVGPathElement && interactive.contains(target),
      );
      const chipTargets = allTargets.filter((target) => chips.contains(target));

      return { pathTargets, chipTargets };
    };

    const handleClick = (event: MouseEvent) => {
      if (!isVisible) return;

      const { pathTargets, chipTargets } = getTargets(event);
      chipTargets.forEach(chipPulse);
      pathTargets.forEach((path) =>
        animatePulse(path, event.clientX, event.clientY),
      );
    };

    const handleMouseOver = (event: MouseEvent) => {
      if (!isVisible) return;

      const now = Date.now();
      if (now - lastMove < 100) return;
      lastMove = now;

      const { pathTargets } = getTargets(event);
      pathTargets.forEach((path) =>
        animatePulse(path, event.clientX, event.clientY),
      );
    };

    svg?.addEventListener("click", handleClick);
    svg?.addEventListener("mouseover", handleMouseOver);

        const observer = new IntersectionObserver(
        ([entry]) => {
        isVisible = entry.isIntersecting;
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

    return () => {
      observer.disconnect();
      svg?.removeEventListener("click", handleClick);
      svg?.removeEventListener("mouseover", handleMouseOver);
    };
    }, []);

  return (
    <div className={styles.container}>
      <div ref={svgRef} className={styles.background} />
      <h1 className={styles.greeting}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `Hello, it's <span class="${styles.name}"><i>Alan</i></span>.`,
              )
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
