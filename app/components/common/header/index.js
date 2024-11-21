'use client';
import './header.css';
import Image from 'next/image';
import Link from 'next/link'

function Header() {
  return (
    <>
    <div className="header">
        <a href='/'>
        <Image src='/images/logo.png' width={230} height={44} alt='' />
        </a>
        <div className="navbar">
            <Link href='/'>Home</Link>
            <Link href='/'>Home</Link>
            <Link href='/'>Home</Link>
            <Link href='/'>Home</Link>
            <Link href='/'>Home</Link>
            <Link href='/'>Home</Link>
        </div>
        <div className="cta">
            <Link href='/'>Login</Link>
            <Link href='/'>Signup</Link>
        </div>
    </div>
    </>
  )
}

export default Header;