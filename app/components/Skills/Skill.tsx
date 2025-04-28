"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Reveal from "../Reveal";

type Props = {
  icon: string;
  name: string;
};

const Skill = ({ icon, name }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const maskStyle = useMotionTemplate`radial-gradient(120px 120px at ${mouseX}px ${mouseY}px, black 0%, transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <Reveal duration={1.2}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center gap-2 p-2 border border-primary rounded-lg h-[50px] overflow-hidden"
      >
        {/* Highlight effect (mask) */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none border-2 border-purple-500 dark:border-purple-300"
          style={{
            opacity: isHovered ? 1 : 0,
            WebkitMaskImage: maskStyle,
            maskImage: maskStyle,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />

        {/* Icon and name */}
        <img src={icon} alt={`${name} icon`} className="w-6 h-6" />
        <p className="text-lg">{name}</p>
      </div>
    </Reveal>
  );
};

export default Skill;
