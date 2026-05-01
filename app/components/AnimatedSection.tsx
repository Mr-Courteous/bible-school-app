"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

// Entrance animations disabled
export function AnimatedSection({
  children,
  className = "",
}: AnimatedSectionProps) {
  return <div className={className}>{children}</div>;
}

export function StaggerContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}) {
  return <div className={className}>{children}</div>;
}

export function FadeIn({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function ScaleIn({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}

// BUBBLES - KEPT as requested
export function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 25 }).map(() => ({
      width: Math.random() * 150 + 60,
      height: Math.random() * 150 + 60,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      x: [0, Math.random() * 100 - 50, 0],
      duration: Math.random() * 10 + 6,
      delay: Math.random() * 5,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full backdrop-blur-[2px] border shadow-lg ${
            i % 2 === 0 
              ? 'bg-[#570013]/30 border-[#570013]/40 shadow-[#570013]/20' 
              : 'bg-[#775a19]/30 border-[#775a19]/40 shadow-[#775a19]/20'
          }`}
          style={{
            width: bubble.width,
            height: bubble.height,
            left: bubble.left,
            top: bubble.top,
          }}
          animate={{
            y: [0, -150, 0],
            x: bubble.x,
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Interactive animations disabled
export function LiveIcon({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`inline-block ${className}`}>{children}</div>;
}

export function PulseCircle({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.5, 0, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeOut",
      }}
      className={`absolute inset-0 rounded-full border-2 border-[#775a19] ${className}`}
    />
  );
}

export function MovingGradient() {
  return (
    <motion.div
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-0 opacity-30 pointer-events-none z-0"
      style={{
        background: "linear-gradient(-45deg, #570013, #775a19, #faf9f5, #e0bfbf)",
        backgroundSize: "400% 400%",
      }}
    />
  );
}

export function Floating({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function HoverCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function AnimatedIcon({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`inline-block ${className}`}>{children}</div>;
}
