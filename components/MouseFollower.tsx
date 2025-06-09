import React, { useEffect, useState } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'

export function MouseFollower() {
  const { x, y } = useMousePosition()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(600px at ${x}px ${y}px, rgba(0, 0, 0, 0.05), transparent 80%)`,
        }}
      />
      <div
        className="pointer-events-none fixed z-50 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-900 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0})`,
        }}
      />
    </>
  )
}