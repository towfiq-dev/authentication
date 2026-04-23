"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Structure = ({children, href, className}) => {
  const pathName = usePathname()
  const isActive = pathName
  return (
    <li>
      <Link href={href} className={`px-3 py-2 shadow-md rounded-xl ${className} ${isActive === href? 'bg-green-500' : ''}`}>
        {children}
      </Link>
    </li>
  );
};

export default Structure;