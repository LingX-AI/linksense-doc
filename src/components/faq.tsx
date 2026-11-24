'use client'

import { useId, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  MotionConfig,
  useReducedMotion,
} from 'motion/react'
import { cn } from '@/lib/cn'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const id = useId()
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full items-center justify-between gap-4 py-4 text-start text-base font-medium"
        >
          {question}
          <ChevronRight
            className={cn(
              'size-4 shrink-0 text-fd-muted-foreground transition-transform',
              open && 'rotate-90',
            )}
            aria-hidden
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            key="panel"
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.24, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-4 text-sm leading-6 text-fd-muted-foreground">
              {answer}
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Faq({
  items,
}: {
  items: { question: string; answer: string }[]
}) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <div className="flex flex-col">
          {items.map((item) => (
            <FaqItem key={item.question} {...item} />
          ))}
        </div>
      </LazyMotion>
    </MotionConfig>
  )
}
