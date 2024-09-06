'use client';

import Hero from '@/components/Hero';
import { ReactLenis } from 'lenis/dist/lenis-react';
import Brands from '@/components/Brands';
import Features from '@/components/Features';
import Integrations from '@/components/Integrations';
export default function Home() {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <Brands />
        <Features />
        <Integrations />
        {/* temporary div */}
        {/* <div className='h-[8000px]'></div> */}
      </ReactLenis>
    </>
  );
}
