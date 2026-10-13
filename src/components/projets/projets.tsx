import { PROJETS, ProjetType } from '@/utils/projets';
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Link from 'next/link';

export const Projets = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2>Projets</h2>
      <ol className="flex flex-col gap-8">
        {PROJETS.map((experience: ProjetType) => (
          <li
            key={experience.company}
            className="grid grid-cols-1 gap-1 sm:grid-cols-[7rem_1fr] sm:gap-6"
          >
            <time className="pt-0.5 text-sm text-neutral-500 tabular-nums">
              {experience.startDate}
            </time>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-medium text-balance text-neutral-100">
                <Link
                  href={experience.companyUrl}
                  target="_blank"
                  className="group/brandName cursor-pointer underline underline-offset-2 transition-colors duration-300 hover:text-white"
                >
                  {experience.company}
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={16}
                    className="ml-0.5 inline-block shrink-0 align-[-0.2em] text-neutral-400 transition-all duration-300 group-hover/brandName:scale-105 group-hover/brandName:text-white"
                  />
                </Link>
                {' - '}
                {experience.title}
              </h3>
              <p className="text-sm text-neutral-400">
                {experience.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
