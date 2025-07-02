import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-[1300px] items-center justify-between sm:px-10 pt-4">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/images/favicon.png" alt="Logo" width={50} height={50} />
      </Link>
      <div className="flex">
        <div className="hidden md:flex md:items-center md:justify-end md:gap-4">
          <Navbar />
        </div>

        <div className="flex items-center justyify-end gap-4 md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
