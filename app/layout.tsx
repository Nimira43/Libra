import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { GiLibra } from 'react-icons/gi'
import Link from 'next/link'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import UserDropdown from './user-dropdown'
import { Toaster } from '@/components/ui/toaster'
import ThemeWrapper from '@/components/theme-wrapper'

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
        <nav className='bg-dark p-4 h-20 flex items-center justify-between'>
          <Link href='/' className='logo text-grey-medium font-light text-2xl flex gap-1 items-center'>
            <GiLibra />Libra
          </Link>
          <div>
            <SignedOut>
              <div className='flex items-center'>
                <Button asChild variant='link' className='link-btn'>
                  <SignInButton />
                </Button>
                <Button asChild variant='link' className='link-btn'>
                  <SignUpButton />
                </Button>
              </div>
            </SignedOut>
            <SignedIn>
              <UserDropdown/>
            </SignedIn>  
          </div>
        </nav>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  )
}
