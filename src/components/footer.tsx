import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { docsPath, getMessages, homePath, installPath } from '@/lib/i18n'
import { repository } from '@/lib/product'

export function Footer({ lang }: { lang: string }) {
  const t = getMessages(lang)
  const links = [
    { label: t.docs, href: docsPath(lang) },
    { label: t.install, href: installPath(lang) },
    { label: t.community, href: `${repository}/discussions`, external: true },
  ]
  return (
    <footer className="border-t border-fd-border pt-8 text-sm text-fd-muted-foreground">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link
          href={homePath(lang)}
          className="me-auto inline-flex min-h-11 items-center gap-2 font-semibold text-fd-foreground"
        >
          <Image
            src="/favicon.svg"
            alt=""
            width={20}
            height={20}
            className="size-5"
            unoptimized
          />
          LinkSense
        </Link>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-fd-foreground"
          >
            {link.label}
            {link.external && (
              <ExternalLink className="size-3.5" aria-hidden />
            )}
          </Link>
        ))}
        <a
          href="/llms.txt"
          className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-fd-foreground"
        >
          llms.txt
        </a>
        <a
          href={repository}
          className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-fd-foreground"
        >
          <Github className="size-4" aria-hidden />
          GitHub
        </a>
      </div>
    </footer>
  )
}
