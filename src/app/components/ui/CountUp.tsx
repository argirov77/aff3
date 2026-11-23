'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

type Props = {
  /** Display value such as "£8.2M", "47%", "3.4x", "94/100" or "11 d". */
  value: string
  duration?: number
  className?: string
}

const PATTERN = /^([^\d]*)(\d+(?:\.\d+)?)(.*)$/

/**
 * Counts the numeric part of `value` up from zero the first time it scrolls into view.
 * Server-renders the final value, so the number is correct without JavaScript.
 */
export default function CountUp({ value, duration = 1.6, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const reduce = useReducedMotion()

  const match = value.match(PATTERN)
  const prefix = match?.[1] ?? ''
  const target = match ? parseFloat(match[2]) : 0
  const decimals = match?.[2].split('.')[1]?.length ?? 0
  const suffix = match?.[3] ?? ''

  useEffect(() => {
    const el = ref.current
    if (!el || !match || reduce) return
    if (!inView) {
      el.textContent = `${prefix}${(0).toFixed(decimals)}${suffix}`
      return
    }
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`
      },
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value])

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {value}
    </span>
  )
}
