import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Boxes,
  Clock,
  Github,
  Layers3,
  Puzzle,
  ShieldCheck,
} from 'lucide-react'
import { Hero } from './hero'
import { Footer } from './footer'
import { Faq } from './faq'
import { docsPath, getMessages, installPath } from '@/lib/i18n'
import { demoUrl, repository } from '@/lib/product'
import type { MessageKey } from '@/content/messages'

const topics = [
  { title: 'install', body: 'coreBody', path: 'deploy/', Icon: Boxes },
  {
    title: 'tools',
    body: 'connectBody',
    path: 'user-guide/mcp/connect-and-manage/',
    Icon: Puzzle,
  },
  {
    title: 'knowledge',
    body: 'fullNote',
    path: 'user-guide/knowledge-bases/',
    Icon: BookOpen,
  },
  {
    title: 'governance',
    body: 'ownBody',
    path: 'admin-guide/overview/',
    Icon: ShieldCheck,
  },
  {
    title: 'sharedApp',
    body: 'open',
    path: 'developer-guide/interactive-application/',
    Icon: Layers3,
  },
  {
    title: 'scheduled',
    body: 'ctaBody',
    path: 'user-guide/automations/create-and-manage/',
    Icon: Clock,
  },
] as const satisfies readonly {
  title: MessageKey
  body: MessageKey
  path: string
  Icon: typeof Boxes
}[]

const paths = [
  {
    title: 'pathDeploy',
    body: 'pathDeployBody',
    path: 'deploy/',
    Icon: Boxes,
  },
  {
    title: 'pathUse',
    body: 'pathUseBody',
    path: 'user-guide/overview/',
    Icon: BookOpen,
  },
  {
    title: 'pathAdmin',
    body: 'pathAdminBody',
    path: 'admin-guide/overview/',
    Icon: ShieldCheck,
  },
  {
    title: 'pathBuild',
    body: 'pathBuildBody',
    path: 'developer-guide/interactive-application/',
    Icon: Layers3,
  },
  {
    title: 'pathArchitecture',
    body: 'pathsBody',
    path: 'deploy/architecture/',
    Icon: ArrowUpRight,
  },
] as const satisfies readonly {
  title: MessageKey
  body: MessageKey
  path: string
  Icon: typeof Boxes
}[]

const connectors = [
  { name: 'Google Docs', image: '/connectors/google-docs.png' },
  { name: 'Gmail', image: '/connectors/gmail.png' },
  { name: 'Outlook', image: '/connectors/outlook.svg' },
  { name: 'OneDrive', image: '/connectors/onedrive.svg' },
  { name: 'SharePoint', image: '/connectors/sharepoint.svg' },
]

const card =
  'group flex h-full w-full items-start gap-3.5 rounded-xl border border-fd-border bg-fd-card p-5 text-sm transition-colors hover:bg-fd-accent/40 focus-visible:ring-2 focus-visible:ring-fd-ring focus-visible:outline-none'
const cardIcon =
  'flex size-6 shrink-0 items-center justify-center text-fd-primary'
const cardTitle =
  'line-clamp-1 text-base leading-6 font-semibold text-fd-foreground'
const cardBody =
  'line-clamp-2 text-sm leading-normal text-fd-muted-foreground'

export function HomePage({ lang }: { lang: string }) {
  const t = getMessages(lang)
  return (
    <div className="mx-auto flex w-full max-w-[72rem] flex-col gap-16 px-5 pt-12 pb-24 md:px-8 md:pt-16">
      <section
        aria-labelledby="home-title"
        className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-14"
      >
        <div className="min-w-0">
          <h1
            id="home-title"
            className="text-[2.5rem] leading-[1.04] font-normal tracking-[-0.03em] text-balance md:text-[3.5rem]"
          >
            {t.hero1}
            <br />
            <span className="ck-gradient-text font-medium">{t.hero2}</span>
          </h1>
          <p className="mt-5 max-w-[34rem] text-lg leading-[1.5] text-fd-muted-foreground">
            {t.heroBody}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-transparent bg-fd-foreground px-5 text-sm font-medium text-fd-background transition-opacity hover:opacity-90"
            >
              {t.try}
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <Link
              href={installPath(lang)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-fd-border bg-fd-card/60 px-4 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-accent"
            >
              <Boxes className="size-4" aria-hidden />
              {t.install}
            </Link>
            <a
              href={repository}
              className="hidden h-11 items-center justify-center gap-2 rounded-full px-3 text-sm font-medium text-fd-muted-foreground transition-colors hover:text-fd-foreground sm:inline-flex"
            >
              <Github className="size-4" aria-hidden />
              GitHub
            </a>
          </div>
        </div>
        <Hero />
      </section>
      <section
        aria-labelledby="home-guides"
        className="flex flex-col gap-5"
      >
        <h2
          id="home-guides"
          className="text-2xl leading-tight font-medium tracking-[-0.03em]"
        >
          {t.docs}
        </h2>
        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map(({ title, body, path, Icon }) => (
            <Link key={path} href={docsPath(lang, path)} className={card}>
              <span className={cardIcon}>
                <Icon className="size-[22px]" aria-hidden />
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className={cardTitle}>{t[title]}</span>
                <span className={cardBody}>{t[body]}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section
        aria-labelledby="home-paths"
        className="flex flex-col gap-5"
      >
        <h2
          id="home-paths"
          className="text-2xl leading-tight font-medium tracking-[-0.03em]"
        >
          {t.pathsTitle}
        </h2>
        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map(({ title, body, path, Icon }) => (
            <Link key={path} href={docsPath(lang, path)} className={card}>
              <span className={cardIcon}>
                <Icon className="size-[22px]" aria-hidden />
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className={cardTitle}>{t[title]}</span>
                <span className={cardBody}>{t[body]}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section
        aria-labelledby="home-connections"
        className="flex flex-col gap-5"
      >
        <h2
          id="home-connections"
          className="text-2xl leading-tight font-medium tracking-[-0.03em]"
        >
          {t.connectTitle}
        </h2>
        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {connectors.map(({ name, image }) => (
            <div
              key={name}
              className="flex h-full w-full items-center gap-3.5 rounded-xl border border-fd-border bg-fd-card p-5"
            >
              <Image
                src={image}
                alt=""
                width={24}
                height={24}
                className="size-[22px] shrink-0 object-contain"
                loading="lazy"
              />
              <span className="text-base leading-6 font-semibold">{name}</span>
            </div>
          ))}
        </div>
      </section>
      <section
        aria-labelledby="home-faq"
        className="flex flex-col gap-5"
      >
        <h2
          id="home-faq"
          className="text-2xl leading-tight font-medium tracking-[-0.03em]"
        >
          {t.faqTitle}
        </h2>
        <Faq
          items={[
            ['faq1', 'faq1a'],
            ['faq2', 'faq2a'],
            ['faq3', 'faq3a'],
            ['faq4', 'faq4a'],
          ].map(([question, answer]) => ({
            question: t[question as MessageKey],
            answer: t[answer as MessageKey],
          }))}
        />
      </section>
      <Footer lang={lang} />
    </div>
  )
}
