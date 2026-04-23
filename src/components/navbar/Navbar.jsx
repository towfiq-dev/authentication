"use client"
import React from 'react';
import { Link } from "@heroui/react";
import ThemeSwitch from '../toggleTheme/ThemeSwitch';
import Structure from './Structure';
const Navbar = () => {
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
    <div>
    <ThemeSwitch></ThemeSwitch>
  </div>
  </header>
</nav>
    </div>
  );
};

export default Navbar;