import React from 'react'

export default function SectionHeader({ kicker, title, body }: { kicker?: string; title: string; body?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker ? (
        <div className="text-[12px] tracking-[0.28em] text-ink-700/70 font-semibold">{kicker.toUpperCase()}</div>
      ) : null}
      <h2 className="mt-3 font-display text-[34px] leading-[1.15] text-ink-900 md:text-[42px]">{title}</h2>
      {body ? <p className="mt-4 text-[15px] leading-7 text-ink-800/80">{body}</p> : null}
    </div>
  )
}
