import { navLinks } from '@/constants';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex w-full items-center">
      <ul className="flex w-full cursor-pointer flex-col items-start gap-5 font-semibold text-sm tracking-wider md:flex-row md:items-center md:justify-between">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
