import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='border-t'>
            <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
                <Link href='/'>
                    <Image 
                        src='/favicon.ico'
                        alt='logo'
                        width={100}
                        height={100}
                    />
                </Link>

                <p>
                    © 2024 | Coded with 💖 for Burma Spring Revolution ✊🏽
                </p>
            </div>
        </footer>
    )
}

export default Footer