import { Experiences } from '@/components/experiences/experiences';
import { JsonLd } from '@/components/json-ld';
import { SEO_SOCIALS } from '@/utils/socials';
import { profilePageJsonLd } from '@/utils/structured-data';
import { HugeiconsIcon } from '@hugeicons/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-150 grow flex-col gap-10 px-4 py-25 md:px-0">
      <JsonLd data={profilePageJsonLd} />
      <header className="flex flex-col gap-6">
        <div className="flex flex-row items-start justify-between">
          <div className="relative h-16 w-16 overflow-hidden rounded-lg">
            <Image
              priority
              src="/assets/me.jpg"
              alt="Quentin Truffy"
              fill
              draggable={false}
              className="scale-125 cursor-pointer transition-transform duration-300 hover:scale-100"
            />
          </div>
          <div className="flex flex-row items-center gap-4">
            {SEO_SOCIALS.map(social => (
              <Link
                href={social.url}
                key={social.name}
                target="_blank"
                className="text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                <HugeiconsIcon icon={social.icon} size={18} />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h1>Quentin Truffy</h1>
          <p>Software Engineer</p>
        </div>
        <p className="text-white">
          Intermediate Software Engineer with 6+ years of experience.
        </p>
        <a
          href="mailto:pro.quentint@gmail.com"
          className="w-fit cursor-pointer rounded-full bg-white px-2.5 py-1 text-xs font-medium whitespace-nowrap text-[#111111] transition-colors duration-300 hover:bg-neutral-200"
        >
          Contact me
        </a>
      </header>
      <Experiences />
    </div>
  );
}
