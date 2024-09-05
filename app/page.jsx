'use client';

import Hero from '@/components/Hero';
import { ReactLenis } from 'lenis/dist/lenis-react';
import Brands from '@/components/Brands';
import Features from '@/components/Features';

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <Brands />
        <Features />
        {/* temporary div */}
        {/* <div className='h-[8000px]'></div> */}
      </ReactLenis>
    </>
  );
}
