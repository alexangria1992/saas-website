'use client';

import Hero from '@/components/Hero';
import Image from 'next/image';
import { ReactLenis } from 'lenis/dist/lenis-react';
export default function Home() {
  return (
    <>
      <ReactLenis root>
        <Hero />
        {/* temporary div */}
        <div className='h-[8000px]'></div>
      </ReactLenis>
    </>
  );
}
