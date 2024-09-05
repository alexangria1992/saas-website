import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href='/' className='relative w-[148px] h-[22px] flex'>
      <Image src='/logo.svg' fill className='object-contain' />
    </Link>
  );
};

export default Logo;
