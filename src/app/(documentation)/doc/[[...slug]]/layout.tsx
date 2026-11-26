import type { ReactNode } from 'react'
import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import { DocsHeader } from '@/components/docs-header'
import { source } from '@/lib/source'
import { baseOptions, linkItems } from '@/lib/layout.shared'
import { resolveDocRoute } from '@/lib/i18n'

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ slug?: string[] }>
}) {
  const { lang } = resolveDocRoute((await params).slug)
  return (
    <>
      <DocsHeader lang={lang} />
      <DocsLayout
        {...baseOptions(lang, true)}
        tree={source.pageTree[lang]}
        links={linkItems}
        sidebar={{
          defaultOpenLevel: 0,
          prefetch: false,
          tabs: false,
          footer: (
            <a
              href="/llms.txt"
              className="text-xs text-fd-muted-foreground transition-colors hover:text-fd-foreground"
            >
              llms.txt
            </a>
          ),
        }}
      >
        {children}
      </DocsLayout>
    </>
  )
}
