import type { ReactNode } from 'react'
import localFont from 'next/font/local'
import { defineI18nUI } from 'fumadocs-ui/i18n'
import { docsI18n, homeLocales, i18n } from '@/lib/i18n'
import { languageNames } from '@/content/messages'
import { getDocsUI } from '@/content/docs-ui'
import { Provider } from './provider'
import '@/app/global.css'

const translations = {
  ...Object.fromEntries(
    Object.entries(homeLocales).map(([lang, locale]) => [
      lang,
      { displayName: languageNames[locale], ...getDocsUI(lang) },
    ]),
  ),
}

const homeUI = defineI18nUI(i18n, { translations })
const docsUI = defineI18nUI(docsI18n, { translations })

const sans = localFont({
  src: '../fonts/plus-jakarta-sans-latin.woff2',
  weight: '200 800',
  style: 'normal',
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const mono = localFont({
  src: '../fonts/spline-sans-mono-latin.woff2',
  weight: '300 700',
  style: 'normal',
  variable: '--font-spline-mono',
  display: 'swap',
})

export function SiteRoot({
  lang,
  docs = false,
  children,
}: {
  lang: string
  docs?: boolean
  children: ReactNode
}) {
  return (
    <html
      lang={homeLocales[lang as keyof typeof homeLocales] ?? 'en-US'}
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="describedby" type="text/plain" href="/llms.txt" />
      </head>
      <body>
        <Provider i18n={(docs ? docsUI : homeUI).provider(lang)}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
