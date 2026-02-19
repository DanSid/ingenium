import React from 'react'
import Container from './Container'
import Button from './Button'
import { NavItem } from '../data/site'
import { cn } from './utils'
import logo from '../assets/logo.jpeg'

export default function NavBar({
  items,
  activeId,
  onInitiate,
}: {
  items: NavItem[]
  activeId?: string
  onInitiate: () => void
}) {
  return (
    <div className="sticky top-0 z-40 bg-parchment-100/70 backdrop-blur-md border-b border-ink-900/10">
      <Container className="flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Ingenium" className="h-8 w-28 object-cover rounded-md shadow-insetLine" />
          <span className="sr-only">Ingenium</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={cn(
                'text-[13px] tracking-wide text-ink-800/75 hover:text-ink-900 transition',
                activeId === it.id && 'text-ink-900 font-semibold'
              )}
            >
              {it.label}
            </a>
          ))}
          <a
            href="#initiate"
            className={cn(
              'text-[13px] tracking-wide text-ink-800/75 hover:text-ink-900 transition',
              activeId === 'initiate' && 'text-ink-900 font-semibold'
            )}
          >
            Initiate
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button size="sm" onClick={onInitiate}>
            Initiate
          </Button>
        </div>
      </Container>
    </div>
  )
}
