"use client"
import React from 'react';
import { Button, Link } from "@heroui/react";
import ThemeSwitch from '../toggleTheme/ThemeSwitch';
import Structure from './Structure';
import { authClient, signOut, useSession } from '@/lib/auth-client';
import { toast } from 'react-toastify';
const Navbar = () => {
  const {data, isPending} = useSession()
  if (isPending) {
    return(
      <div>
        <h3 className='text-center text-[20px] font-bold'>
        Please Wait Data is loading...
        </h3>
      </div>
    )
  }
  const user = data?.user
  const logOut=()=>{
    authClient.signOut()
    toast('Sign Out successfully')
  }
  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
  <header className="flex h-16 items-center justify-between px-6">
    <div className="flex items-center gap-3">
      <p className="font-bold">ACME</p>
    </div>
    <ul className="flex items-center gap-4">
      <Structure href={'/'}>Home</Structure>
      <Structure href={'/navLink/dashboard'}>Dashboard</Structure>
      <Structure href={'/navLink/contact'}>Contact</Structure>
    </ul>
    <div className='flex items-center gap-3'>
    <ThemeSwitch></ThemeSwitch>
    <div>
      {
      user? 
      <>
      
      <Link href='/'>
      <p>{user?.name}</p>
      <Button onClick={()=>logOut()}>Log Out</Button>
      </Link>
      </>
      :
      <>
      <Link href='/auth/signin'>Sign In</Link>
      </>
    }
    </div>
  </div>
  </header>
</nav>
    </div>
  );
};

export default Navbar;