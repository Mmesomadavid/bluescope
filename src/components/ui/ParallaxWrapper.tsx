"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxProps {
  children: ReactNode
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
  offset?: number
}

export default function ParallaxWrapper({
  children,
  speed = 0.5,
  direction = "up",
  className = "",
  offset = 100,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate movement based on direction
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? [offset, -offset] : direction === "right" ? [-offset, offset] : [0, 0],
  )

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [offset, -offset] : direction === "down" ? [-offset, offset] : [0, 0],
  )

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{
          y,
          x,
          scale: useTransform(scrollYProgress, [0, 1], [1, 1 + speed * 0.1]),
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
