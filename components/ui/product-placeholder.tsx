"use client"

import { useEffect, useRef } from 'react'

interface ProductPlaceholderProps {
  type: 'chemical' | 'equipment'
  width?: number
  height?: number
}

export function generatePlaceholder(
  canvas: HTMLCanvasElement,
  type: 'chemical' | 'equipment',
  width: number = 400,
  height: number = 300
) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Set canvas size
  canvas.width = width
  canvas.height = height

  // Background
  ctx.fillStyle = '#0F172A' // slate-900
  ctx.fillRect(0, 0, width, height)

  // Grid pattern
  ctx.strokeStyle = '#1E293B' // slate-800
  ctx.lineWidth = 1
  const gridSize = 20

  for (let x = 0; x <= width; x += gridSize) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
    ctx.stroke()
  }

  for (let y = 0; y <= height; y += gridSize) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }

  // Icon based on type
  ctx.fillStyle = '#0EA5E9' // cyan-500
  ctx.font = '48px "Font Awesome 5 Free"'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  
  const icon = type === 'chemical' ? '⚗️' : '🔬'
  ctx.fillText(icon, width / 2, height / 2)

  // Text
  ctx.font = '16px Inter'
  ctx.fillStyle = '#94A3B8' // slate-400
  ctx.fillText(type.toUpperCase(), width / 2, (height / 2) + 40)
}

export function ProductPlaceholder({ type, width = 400, height = 300 }: ProductPlaceholderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      generatePlaceholder(canvasRef.current, type, width, height)
    }
  }, [type, width, height])

  return <canvas ref={canvasRef} className="w-full h-full" />
} 