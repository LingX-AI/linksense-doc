import type { ReactNode } from 'react'
import { ExternalLink } from 'lucide-react'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions, linkItems } from '@/lib/layout.shared'
import { docsPath, getMessages, installPath } from '@/lib/i18n'
import { repository } from '@/lib/product'

export function WebsiteLayout({
  lang,
  children,
}: {
  lang: string
  children: ReactNode
}) {
  const t = getMessages(lang)
  return (
    <HomeLayout
      {...baseOptions(lang)}
      links={[
        {
          type: 'main',
          text: t.docs,
          url: docsPath(lang),
        },
        {
          type: 'main',
          text: t.install,
          url: installPath(lang),
        },
        {
          type: 'main',
          text: (
            <span className="inline-flex items-center gap-1">
              {t.community}
              <ExternalLink className="size-3.5" aria-hidden />
            </span>
          ),
          url: `${repository}/discussions`,
          external: true,
        },
        ...linkItems,
      ]}
      className="flex-1"
    >
      {children}
    </HomeLayout>
  )
}
