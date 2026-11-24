'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/cn'

/**
 * Light/dark switch with a sliding active block. The thumb position is driven
 * by the `.dark` class (next-themes), so it renders correctly before hydration.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme } = useTheme()

  return (
    <button
      type="button"
      data-theme-toggle=""
      aria-label="Toggle Theme"
      onClick={() => {
        const dark = document.documentElement.classList.contains('dark')
        setTheme(dark ? 'light' : 'dark')
      }}
      className={cn(
        'relative inline-flex items-center rounded-full border border-fd-foreground/20 bg-fd-background/30 p-1',
        className,
      )}
    >
      <span
        aria-hidden
        className="tt-indicator pointer-events-none absolute inset-y-1 left-1 size-6.5 rounded-full bg-fd-foreground transition-transform duration-300 ease-out motion-reduce:transition-none"
      />
      <Sun
        aria-hidden
        fill="currentColor"
        className="tt-sun relative size-6.5 p-1.5 transition-colors duration-300"
      />
      <Moon
        aria-hidden
        fill="currentColor"
        className="tt-moon relative size-6.5 p-1.5 transition-colors duration-300"
      />
    </button>
  )
}
