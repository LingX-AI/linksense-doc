import Image from 'next/image'
import {
  ArrowUpRight,
  BookOpen,
  Check,
  Cpu,
  Layers3,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/cn'

const capabilities = [
  { label: 'Tools', Icon: Puzzle, className: 'left-[2.5%] top-[4%]' },
  { label: 'Knowledge', Icon: BookOpen, className: 'right-[2.5%] top-[4%]' },
  {
    label: 'Applications',
    Icon: Layers3,
    className: 'left-[2.5%] bottom-[4%]',
  },
  { label: 'Access', Icon: ShieldCheck, className: 'right-[2.5%] bottom-[4%]' },
]

const steps = [
  { label: 'Read 18 threads in Gmail', src: '/connectors/gmail.png' },
  { label: 'Matched 6 knowledge sources' },
  { label: 'Draft saved to Google Docs', src: '/connectors/google-docs.png' },
]

export function Hero() {
  return (
    <div
      className="ck-hero @container relative aspect-[480/368] w-full select-none overflow-hidden rounded-[20px] border-[1.5px]"
      aria-hidden
    >
      <div className="ck-hero-glow absolute inset-0" />
      <div className="ck-hero-dots absolute inset-0" />
      <div className="ck-hero-shade absolute inset-0" />

      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 480 368"
        aria-hidden
      >
        <circle
          cx="240"
          cy="184"
          r="120"
          className="fill-none stroke-white/25 dark:stroke-white/10"
        />
        <circle
          cx="240"
          cy="184"
          r="162"
          className="fill-none stroke-white/20 dark:stroke-white/10"
        />
        <circle
          cx="240"
          cy="184"
          r="204"
          className="fill-none stroke-white/15 dark:stroke-white/5"
        />
      </svg>

      {/* A workspace at work: one task moving through tools, knowledge and docs. */}
      <div className="absolute inset-x-[11%] top-[13%] bottom-[13%] flex flex-col overflow-hidden rounded-[14px] border border-white/70 bg-white/85 shadow-[0_24px_60px_-24px_rgb(31_38_36/0.35)] backdrop-blur-md dark:border-white/10 dark:bg-[#12121b]/90 dark:shadow-[0_24px_60px_-24px_rgb(0_0_0/0.8)]">
        <div className="flex h-9 shrink-0 items-center gap-2 border-b border-fd-border/70 px-3">
          <Image
            src="/favicon.svg"
            alt=""
            width={14}
            height={14}
            className="size-3.5 shrink-0"
            unoptimized
          />
          <span className="text-[10.5px] font-semibold tracking-[-0.01em] text-fd-foreground">
            LinkSense
          </span>
          <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-fd-border bg-fd-background/70 px-1.5 py-0.5 text-[8.5px] font-medium text-fd-muted-foreground">
            <span className="size-1 rounded-full bg-emerald-500" />
            Self-hosted
          </span>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-2 px-3 py-2.5">
          <div className="flex items-center gap-1.5 rounded-[8px] border border-fd-border bg-fd-muted/70 px-2 py-1.5">
            <Sparkles className="size-2.5 shrink-0 text-fd-primary" />
            <span className="truncate text-[9.5px] leading-4 text-fd-foreground/90">
              Summarize this week&apos;s customer threads
            </span>
            <ArrowUpRight className="ml-auto size-2.5 shrink-0 text-fd-muted-foreground" />
          </div>

          <div className="flex flex-col gap-1">
            {steps.map((step) => (
              <div
                key={step.label}
                className="flex items-center gap-1.5 rounded-[6px] bg-fd-background/50 px-1.5 py-1"
              >
                <span className="grid size-4.5 shrink-0 place-items-center rounded-[4px] border border-fd-border bg-fd-card">
                  {step.src ? (
                    <Image
                      src={step.src}
                      alt=""
                      width={11}
                      height={11}
                      className="size-2.5 object-contain"
                      unoptimized
                    />
                  ) : (
                    <BookOpen className="size-2.5 text-fd-primary" />
                  )}
                </span>
                <span className="truncate text-[9px] leading-4 text-fd-foreground/80">
                  {step.label}
                </span>
                <Check className="ml-auto size-2.5 shrink-0 text-emerald-500" />
              </div>
            ))}
          </div>

          <div className="mt-auto hidden items-center justify-between gap-2 border-t border-fd-border/60 pt-2 text-[8.5px] text-fd-muted-foreground @sm:flex">
            <span className="inline-flex items-center gap-1 rounded-full border border-fd-border bg-fd-background/60 px-1.5 py-0.5">
              <Cpu className="size-2.5 text-fd-primary" />
              Your models
            </span>
            <span className="inline-flex items-center gap-1">
              <Users className="size-2.5" />8 people · 2 groups
            </span>
          </div>
        </div>
      </div>

      {/* Capability labels float just outside the workspace corners. */}
      {capabilities.map(({ label, Icon, className }) => (
        <span
          key={label}
          className={cn(
            'absolute inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/70 px-2.5 py-1 text-[9px] font-medium text-fd-foreground shadow-[0_8px_20px_-8px_rgb(31_38_36/0.35)] backdrop-blur-sm dark:border-white/10 dark:bg-white/10 dark:text-white/85',
            className,
          )}
        >
          <Icon className="size-2.5 text-fd-primary" />
          {label}
        </span>
      ))}
    </div>
  )
}
