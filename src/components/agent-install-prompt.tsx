'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { agentInstallUrl, type Edition, type Platform } from '@/lib/product'
import { formatMessage, getMessages } from '@/lib/i18n'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/cn'

const platforms: { value: Platform; label: string }[] = [
  { value: 'linux', label: 'Linux' },
  { value: 'macos', label: 'macOS' },
]

export function AgentInstallPrompt({
  lang,
  edition,
}: {
  lang: string
  edition: Edition
}) {
  const t = getMessages(lang)
  const [platform, setPlatform] = useState<Platform>('linux')
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle')
  const prompt = formatMessage(lang, 'agentPrompt', {
    edition: edition === 'core' ? 'Core' : 'Full',
    platform: platform === 'linux' ? 'Linux' : 'macOS',
    docs: agentInstallUrl,
  })

  async function copy() {
    try {
      await navigator.clipboard.writeText(prompt)
      setStatus('copied')
    } catch {
      setStatus('failed')
    }
  }

  return (
    <section className="mb-8 rounded-2xl border bg-fd-card p-5">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-base font-semibold text-fd-foreground">
          {t.agentTitle}
        </h2>
        <button
          type="button"
          className={cn(
            buttonVariants({ color: 'secondary', size: 'sm' }),
            'shrink-0',
          )}
          onClick={() => void copy()}
        >
          {status === 'copied' ? (
            <Check className="size-4" />
          ) : (
            <Copy className="size-4" />
          )}
          {status === 'copied' ? t.copied : t.agentCopy}
        </button>
      </div>
      <p className="mt-1.5 max-w-xl text-sm leading-6 text-fd-muted-foreground">
        {t.agentBody}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs text-fd-muted-foreground">{t.platform}</span>
        <div className="inline-flex rounded-full border bg-fd-background p-0.5">
          {platforms.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={platform === option.value}
              onClick={() => {
                setPlatform(option.value)
                setStatus('idle')
              }}
              className={cn(
                'rounded-full px-2.5 py-1 text-xs font-medium transition-colors',
                platform === option.value
                  ? 'bg-fd-primary/10 text-fd-primary'
                  : 'text-fd-muted-foreground hover:text-fd-foreground',
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <pre className="mt-3 max-h-40 overflow-auto rounded-xl border bg-fd-background p-4 text-xs leading-6 whitespace-pre-wrap select-all">
        <code>{prompt}</code>
      </pre>
      <p role="status" className="mt-2 text-xs text-fd-muted-foreground">
        {status === 'failed' ? t.copyFailed : ''}
      </p>
    </section>
  )
}
