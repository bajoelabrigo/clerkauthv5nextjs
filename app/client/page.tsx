"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'

interface user {
    user: string;
}

const ClientPage = () => {
    const {isLoaded, isSignedIn, user:user} = useUser();

    if(!isLoaded || !isSignedIn) {
        return null;
    }
  return (
    <div className='h-full flex flex-col items-center justify-center text-2xl'>{`Hello, ${user.firstName}`}
    </div>
  )
}

export default ClientPage