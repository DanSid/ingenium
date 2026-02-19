import { AnimatePresence, motion } from 'framer-motion'
import React, { useMemo, useState } from 'react'
import { useInterval } from './utils'

export default function MorphingInWord({
  words,
  intervalMs = 2200,
  className,
}: {
  words: string[]
  intervalMs?: number
  className?: string
}) {
  const safeWords = useMemo(() => (words.length ? words : ['Ingenium']), [words])
  const [i, setI] = useState(0)

  useInterval(() => setI((v) => (v + 1) % safeWords.length), intervalMs)

  return (
    <span className={className} aria-label={`In ${safeWords[i]}`}>
      <span className="inline-block font-semibold">In</span>
      <span className="inline-block w-[0.2ch]" />
      <span className="relative inline-block align-baseline">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={safeWords[i]}
            initial={{ opacity: 0, y: 10, filter: 'blur(2px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(2px)' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="inline-block"
          >
            {safeWords[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  )
}
