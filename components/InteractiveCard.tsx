import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface InteractiveCardProps {
  title: string
  description: string
  content: React.ReactNode
  className?: string
}

export function InteractiveCard({ title, description, content, className = "" }: InteractiveCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }
  
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <Card className="relative overflow-hidden border-gray-200 bg-white/90 backdrop-blur transition-shadow hover:shadow-2xl">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-0 transition-opacity hover:opacity-100"
          style={{
            transform: "translateZ(-50px)",
          }}
        />
        <CardHeader className="relative z-10">
          <CardTitle className="font-mono text-2xl">{title}</CardTitle>
          <CardDescription className="font-mono">{description}</CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          {content}
        </CardContent>
      </Card>
    </motion.div>
  )
}