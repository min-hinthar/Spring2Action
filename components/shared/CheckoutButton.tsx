'use client'

import { IEvent } from '@/lib/database/models/event.model'
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Checkout from './Checkout'

const CheckoutButton = ({ event }: { event: IEvent }) => {

    const { user } = useUser();
    const userId = user?.publicMetadata.userId as string;
    const hasEventEnded = new Date(event.endDateTime) < new Date()

  return (

    <div className='flex items-center gap-3'>
        {/* CHECK IF EVENT ENDED */}
        {hasEventEnded ? (
            <p className='p-2 text-red-400 p-bold-20 rounded-full bg-grey-500/10 text-center'>
                Sorry, Event Has Ended! Tickets Unavailable For Purchase!
            </p>
        ) : (
            <>
                <SignedOut>
                    <Button 
                        asChild
                        className='button rounded-full'
                        size='lg'
                    >
                        <Link
                            href='/sign-in'
                        >
                            Get Tickets!
                        </Link>
                    </Button>
                </SignedOut>

                <SignedIn>
                    <Checkout 
                        event={event}
                        userId={userId}
                    />
                </SignedIn>
            </>
        )}
    </div>
  )
}

export default CheckoutButton