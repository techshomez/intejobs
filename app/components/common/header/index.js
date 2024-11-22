'use client';
import './header.css';
import Image from 'next/image';
import Link from 'next/link'
import { Menu__list } from '../../functions/menuData';
import {HiOutlineUser, HiOutlineMenu } from 'react-icons/hi'

function Header() {
  return (
    <>
    <div className="header">
        <a href='/'>
        <Image src='/images/logo.png' width={230} height={44} alt='' />
        </a>
        <div className="navbar">
            {Menu__list.map((m__item, index)=>{
            return(
               <Link href={m__item.path} key={index}>{m__item.title}</Link>
            );
        })}
        </div>
        <div className="cta">
            <Link href='/'>Login</Link>
            <Link href='/'><i><HiOutlineUser /></i>Signup</Link>
        </div>
        <div className="mobile">
            <i><HiOutlineMenu /></i>
        </div>
    </div>
    </>
  )
}

export default Header;