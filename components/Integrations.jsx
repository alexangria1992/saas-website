'use client';

import { delay, motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';
import button from './Button';

const icons = [
  {
    src: '/integrations/notion.svg',
  },
  {
    src: '/integrations/slack.svg',
  },
  {
    src: '/integrations/google_drive.svg',
  },
  {
    src: '/integrations/intercom.svg',
  },
  {
    src: '/integrations/jira.svg',
  },
  {
    src: '/integrations/dropbox.svg',
  },
  {
    src: '/integrations/stripe.svg',
  },
  {
    src: '/integrations/zapier.svg',
  },
  {
    src: '/integrations/figma.svg',
  },
  {
    src: '/integrations/confluence.svg',
  },
  {
    src: '/integrations/mailchimp.svg',
  },
  {
    src: '/integrations/whatsapp.svg',
  },
  {
    src: '/integrations/discord.svg',
  },
  {
    src: '/integrations/bitbucket.svg',
  },
  {
    src: '/integrations/invision.svg',
  },
  {
    src: '/integrations/evernote.svg',
  },
];

const iconAnimation = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

import { fadeInOnScroll } from '@/motion/motionvariants';
import { fadeInUpSpring } from '@/motion/motionvariants';
const Integrations = () => {
  return (
    <section className='py-24  min-h-[720px] xl:py-32 xl:mt-32 '>
      <div className='container mx-auto flex flex-col justify-center items-center gap-8 xl:gap-16'>
        {/* TEXT */}
        <motion.div
          variants={fadeInOnScroll(0.2, 0.6)}
          initial='hidden'
          whileInView='visible'
          className='text-center border-2 border-lime-400'
        >
          <h2 className='h2 mb-3'>Unified Workflows</h2>
          <p className='lead'>
            Integrate with top apps to create a seamless, connected experience.
          </p>
        </motion.div>
        {/* ICON  */}
        <div className='flex border-2 border-pink-400 flex-wrap gap-8 w-full max-w-[1024px] mx-auto place-content-center mb-8'>
          {icons.map((icon, index) => {
            return (
              <motion.div
                className='border-2 border-orange-400 relative w-[80px] h-[80px]'
                key={index}
                custom={index}
                variants={iconAnimation}
                whileInView='animate'
                initial='initial'
              >
                <Image src={icon.src} fill alt='' />
              </motion.div>
            );
          })}
        </div>
        {/* BTN */}
        <motion.div
          variants={fadeInUpSpring(0.6, 0.8)}
          initial='hidden'
          whileInView='visible'
        >
          <Button btnText='See All' />
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
