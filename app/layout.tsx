import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { GiLibra } from 'react-icons/gi'
import Link from 'next/link'
import { ClerkProvider, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Libra',
  description: 'Cash application using Next JS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
      <body className={poppins.className}>
        <nav className='bg-dark p-4 text-light h-20 flex items-center justify-between'>
          <Link href='/' className='logo text-grey-medium font-light text-2xl flex gap-1 items-center'>
            <GiLibra />Libra
          </Link>
          <div>
            <SignedOut>
              <div className='flex items-center'>
                <SignInButton />
                <SignUpButton />
              </div>
            </SignedOut>    
          </div>
        </nav>
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
