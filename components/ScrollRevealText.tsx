import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollRevealTextProps {
  text: string
  className?: string
}

export function ScrollRevealText({ text, className = "" }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"]
  })

  const words = text.split(' ')

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div className="flex flex-wrap">
        {words.map((word, i) => {
          const start = i / words.length
          const end = start + (1 / words.length)
          
          return (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
            >
              {word}
            </Word>
          )
        })}
      </motion.div>
    </div>
  )
}

interface WordProps {
  children: string
  progress: any
  range: [number, number]
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0, 1])
  const y = useTransform(progress, range, [40, 0])

  return (
    <span className="mr-3 overflow-hidden">
      <motion.span
        style={{ opacity, y }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  )
}