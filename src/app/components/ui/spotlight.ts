import type { MouseEvent } from 'react'

/** Feeds the pointer position into --mx / --my so `.spot` cards can draw a glow under the cursor. */
export function trackPointer(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  el.style.setProperty('--my', `${e.clientY - rect.top}px`)
}
