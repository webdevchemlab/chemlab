import { createCanvas } from 'canvas'
import * as fs from 'fs'
import * as path from 'path'

function generatePlaceholder(
  type: 'chemical' | 'equipment',
  width: number = 400,
  height: number = 300
): Buffer {
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

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
  ctx.font = '48px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  
  const icon = type === 'chemical' ? '⚗' : '⚙'
  ctx.fillText(icon, width / 2, height / 2)

  // Text
  ctx.font = '16px Arial'
  ctx.fillStyle = '#94A3B8' // slate-400
  ctx.fillText(type.toUpperCase(), width / 2, (height / 2) + 40)

  return canvas.toBuffer('image/jpeg')
}

// Ensure directories exist
const placeholderDir = path.join(process.cwd(), 'public', 'images', 'products', 'placeholder')
if (!fs.existsSync(placeholderDir)) {
  fs.mkdirSync(placeholderDir, { recursive: true })
}

// Generate placeholders
const types: Array<'chemical' | 'equipment'> = ['chemical', 'equipment']
types.forEach(type => {
  const buffer = generatePlaceholder(type)
  fs.writeFileSync(
    path.join(placeholderDir, `placeholder-${type}.jpg`),
    buffer
  )
  console.log(`Generated placeholder-${type}.jpg`)
})

console.log('Placeholder generation complete!') 