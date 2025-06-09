import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'

export function InteractiveHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const { x, y } = useMousePosition()
  
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(229 231 235)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <motion.div 
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4"
        style={{ opacity }}
      >
        <motion.div
          className="relative"
          style={{ y: textY }}
        >
          <h1 className="text-center font-mono text-6xl font-bold tracking-tighter text-gray-900 sm:text-8xl md:text-9xl">
            GRAY
            <span className="block text-gray-400">SCALE</span>
          </h1>
          
          <motion.div
            className="absolute -inset-4 bg-gray-900 mix-blend-multiply opacity-10 blur-2xl"
            animate={{
              x: typeof window !== 'undefined' ? (x - window.innerWidth / 2) * 0.05 : 0,
              y: typeof window !== 'undefined' ? (y - window.innerHeight / 2) * 0.05 : 0,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          />
        </motion.div>
        
        <motion.p
          className="mt-8 max-w-2xl text-center font-mono text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          デジタルとアナログの境界を再定義する
        </motion.p>
        
      </motion.div>
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </section>
  )
}