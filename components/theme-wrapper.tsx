'use client'

import { usePathname } from 'next/navigation'

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <main 
      className={
        `${
          isHome 
          ? 'bg-true-dark flex flex-col items-center justify-center min-h-[calc(100vh-80px)]' 
          : 'bg-light '
        }`
      }
    >
      {children}
    </main>
  )
}