'use client'

import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const FONT_SIZE = 18
    const CHARS = ['D', 'J', 'T', 'S']
    let drops: number[] = []
    let animId: ReturnType<typeof setInterval>

    const init = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      const cols = Math.floor(canvas.width / FONT_SIZE)
      drops = Array.from({ length: cols }, () => Math.random() * -50)
    }

    // 約8fps（120ms間隔）で文字が読めるスピードに
    const INTERVAL = 120

    const draw = () => {
      // フェードアウト用：背景色で薄く塗りつぶす
      ctx.fillStyle = 'rgba(23, 26, 32, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${FONT_SIZE}px "Courier New", monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const x = i * FONT_SIZE
        const y = drops[i] * FONT_SIZE

        // 先頭の文字は明るく、後続はやや暗く
        const isFront = drops[i] > 0 && drops[i] * FONT_SIZE < canvas.height
        ctx.fillStyle = isFront
          ? 'rgba(0, 230, 80, 0.85)'
          : 'rgba(0, 180, 60, 0.4)'

        ctx.fillText(char, x, y)

        // 画面下端を超えたらランダムなタイミングでリセット
        if (y > canvas.height && Math.random() > 0.97) {
          drops[i] = 0
        }
        drops[i] += 1
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
