import React from 'react'
import Container from '../components/Container'
import { NAV } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-parchment-grid border-t border-ink-900/10">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="font-display text-[22px] text-ink-900">Dream Wild</div>
            <p className="mt-3 text-[14px] leading-7 text-ink-800/75">
              Dream Wild is our working principle. It reflects our belief that expansive thinking and disciplined execution
              belong together. Creative and strategic ideas are examined thoroughly and shaped into clear direction.
            </p>
            <p className="mt-3 text-[14px] leading-7 text-ink-800/75">
              At Ingenium, imagination is given room to develop, supported by the discipline required to carry it forward.
              It informs how our teams approach complex challenges and assures our clients that bold ideas translate into
              measurable progress.
            </p>
          </div>

          <div className="rounded-2xl border border-ink-900/10 bg-parchment-50/70 shadow-soft p-6">
            <div className="text-[12px] tracking-[0.28em] text-ink-700/70 font-semibold">NAVIGATION</div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-[13px]">
              {NAV.map((it) => (
                <a key={it.id} href={`#${it.id}`} className="text-ink-800/75 hover:text-ink-900">
                  {it.label}
                </a>
              ))}
              <a href="#initiate" className="text-ink-800/75 hover:text-ink-900">Initiate</a>
            </div>
            <div className="mt-6 h-px bg-ink-900/10" />
            <div className="mt-6 text-[13px] text-ink-800/70">
              <div className="font-semibold text-ink-900">Global Contact</div>
              <div className="mt-2">hello@ingenium.example</div>
              <div>+1 (000) 000-0000</div>
              <div className="mt-4 text-[12px] text-ink-700/60">Legal links • Privacy • Terms</div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-[12px] text-ink-700/60">© {new Date().getFullYear()} Ingenium. All rights reserved.</div>
      </Container>
    </footer>
  )
}
