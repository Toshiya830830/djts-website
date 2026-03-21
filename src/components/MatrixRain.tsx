'use client'

import { useEffect, useRef } from 'react'

const CHARS = 'DJTS'

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const FONT_SIZE = 22
    const INTERVAL = 80 // ms（約12fps）

    type Drop = {
      y: number       // 現在のy位置（行数）
      speed: number   // 列ごとのスピード差
      length: number  // トレイルの長さ
    }

    let drops: Drop[] = []
    let animId: ReturnType<typeof setInterval>

    const init = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      const cols = Math.floor(canvas.width / FONT_SIZE)
      drops = Array.from({ length: cols }, () => ({
        y: Math.random() * -(canvas.height / FONT_SIZE),
        speed: 0.4 + Math.random() * 0.6,   // 列ごとに速度を変える
        length: 8 + Math.floor(Math.random() * 16), // トレイルの長さ
      }))
    }

    const draw = () => {
      // 純黒で薄く塗りつぶす（残像効果）
      ctx.fillStyle = 'rgba(0, 0, 0, 0.18)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        const { y, speed, length } = drops[i]
        const x = i * FONT_SIZE

        // トレイル（後続文字）を長さ分描画
        for (let j = 1; j <= length; j++) {
          const ty = (y - j) * FONT_SIZE
          if (ty < 0) continue
          const char = CHARS[Math.floor(Math.random() * CHARS.length)]
          // 先端から離れるほど暗く
          const alpha = (1 - j / length) * 0.8
          ctx.fillStyle = `rgba(0, 255, 65, ${alpha})`
          ctx.font = `${FONT_SIZE}px monospace`
          ctx.fillText(char, x, ty)
        }

        // 先頭文字は白く輝く
        const headY = y * FONT_SIZE
        if (headY > 0 && headY < canvas.height) {
          const headChar = CHARS[Math.floor(Math.random() * CHARS.length)]
          ctx.fillStyle = '#ffffff'
          ctx.font = `bold ${FONT_SIZE}px monospace`
          ctx.fillText(headChar, x, headY)
        }

        // 移動
        drops[i].y += speed

        // 画面下端を超えたらリセット
        if (drops[i].y * FONT_SIZE > canvas.height && Math.random() > 0.96) {
          drops[i].y = Math.random() * -20
          drops[i].speed = 0.4 + Math.random() * 0.6
          drops[i].length = 8 + Math.floor(Math.random() * 16)
        }
      }
    }

    init()
    animId = setInterval(draw, INTERVAL)

    const onResize = () => {
      clearInterval(animId)
      init()
      animId = setInterval(draw, INTERVAL)
    }
    window.addEventListener('resize', onResize)

    return () => {
      clearInterval(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  )
}
