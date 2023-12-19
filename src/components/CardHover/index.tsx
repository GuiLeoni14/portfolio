'use client'
import { ReactNode, useState } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 40,
}

interface CardHoverProps {
  className?: string
  children: ReactNode
}

export function CardHover({ className, children }: CardHoverProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = event.clientX
    const mouseY = event.clientY

    const relativePositionX = mouseX - centerX
    const relativePositionY = mouseY - centerY

    const rotationX = (relativePositionY / rect.height) * 30
    const rotationY = (relativePositionX / rect.width) * 30

    setRotateX(rotationX)
    setRotateY(rotationY)
    setLightPosition({ x: relativePositionX, y: relativePositionY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
    setLightPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      className={twMerge('', className)}
      whileHover={{ scale: 1.1 }}
      transition={spring}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
        position: 'relative',
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          backfaceVisibility: 'hidden',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          overflow: 'hidden',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && (
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100%',
              height: '100%',
              background:
                'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%)',
              borderRadius: '50%',
              transform: `translate(-50%, -50%) translate(${lightPosition.x}px, ${lightPosition.y}px)`,
            }}
          />
        )}
        {children}
      </motion.div>
    </motion.div>
  )
}
