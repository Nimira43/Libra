'use client'

import { UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { GiLibra } from 'react-icons/gi'

export default function UserDropdown() {
  const router = useRouter()
  return (
    <UserButton
      showName
      appearance={{
        elements: {
          userButtonOuterIdentifier: {
            color: '#999'
          }
        }
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Action
          label='Dashboard'
          labelIcon={<GiLibra size={16} />}
          onClick={() => {
            router.push('/dashboard')  
          }}
        />
      </UserButton.MenuItems>
    </UserButton>
  )
}