'use client';
import './header.css';
import Image from 'next/image';
import Link from 'next/link'
import { Menu__list } from '../../functions/menuData';
import {HiOutlineUser, HiOutlineMenu, HiOutlineX} from 'react-icons/hi';
import { useState } from 'react';


function Header() {

    const [click, setClick]=useState(false);
    const [mobileToggle, setMobileToggle]=useState(false);

    const toggleMenu = () => {
        setClick(!click);
        setMobileToggle(!mobileToggle);
      };



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
        <div className={click ? "mobile__close" : "mobile__button"} onClick={toggleMenu}>
            <i>{click?<HiOutlineX />:<HiOutlineMenu />}</i>
        </div>

        {mobileToggle && (
            <div className="mobile__nav">
                {Menu__list.map((m__item, index)=>{
                return(
                   <Link href={m__item.path} key={index}>{m__item.title}</Link>
                );
            })}
            </div>
        )}
    </div>
    </>
  )
}

export default Header;