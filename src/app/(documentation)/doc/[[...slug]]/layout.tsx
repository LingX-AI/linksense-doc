import type { ReactNode } from 'react'
import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import { SiteRoot } from '@/components/site-root'
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
    <SiteRoot lang={lang} docs>
      <DocsHeader lang={lang} />
      <DocsLayout
        {...baseOptions(lang, true)}
        tree={source.pageTree[lang]}
        links={linkItems}
        sidebar={{
          defaultOpenLevel: 0,
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
    </SiteRoot>
  )
}
