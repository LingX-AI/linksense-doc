import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { docsPath, getMessages, homePath, installPath } from '@/lib/i18n'
import { getDocsUI } from '@/content/docs-ui'
import { repository } from '@/lib/product'

export function DocsHeader({ lang }: { lang: string }) {
  const t = getMessages(lang)
  const docs = getDocsUI(lang)
  return (
    <header className="fixed inset-x-0 top-0 z-40 hidden h-14 bg-ck-frame md:block">
      <div className="grid h-full grid-cols-[268px_minmax(0,1fr)_auto] items-center">
        <Link
          href={homePath(lang)}
          className="inline-flex items-center gap-2.5 ps-5.5 text-[15px] font-semibold tracking-tight"
        >
          <Image
            src="/favicon.svg"
            alt=""
            width={20}
            height={20}
            className="size-5"
            priority
            unoptimized
          />
          LinkSense
        </Link>
        <nav className="flex min-w-0 items-center gap-1 ps-5 text-sm">
          <Link
            href={docsPath(lang)}
            className="rounded-md p-2 font-medium text-fd-foreground"
          >
            {docs.gettingStarted}
          </Link>
          <Link
            href={installPath(lang)}
            className="rounded-md p-2 text-fd-muted-foreground transition-colors hover:text-fd-foreground"
          >
            {t.install}
          </Link>
          <a
            href={`${repository}/discussions`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md p-2 text-fd-muted-foreground transition-colors hover:text-fd-foreground"
          >
            {t.community}
            <ExternalLink className="size-3.5" aria-hidden />
          </a>
        </nav>
        <div className="flex items-center gap-2 pe-3">
          <ThemeToggle />
          <a
            href={repository}
            aria-label="GitHub"
            className="inline-flex size-8 items-center justify-center rounded-md text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-foreground"
          >
            <Github className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </header>
  )
}
