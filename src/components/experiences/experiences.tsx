import { EXPERIENCES, ExperienceType } from '@/utils/experiences';
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Link from 'next/link';

export const Experiences = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2>Work Experience</h2>
      <ol className="flex flex-col gap-8">
        {EXPERIENCES.map((experience: ExperienceType) => (
          <li
            key={experience.company}
            className="grid grid-cols-1 gap-1 sm:grid-cols-[7rem_1fr] sm:gap-6"
          >
            <time className="pt-0.5 text-sm text-neutral-500 tabular-nums">
              {experience.startDate} - {experience.endDate ?? 'Now'}
            </time>
            <div className="flex flex-col gap-1">
              <h3 className="flex flex-row items-center gap-1 text-sm font-medium text-neutral-100">
                {experience.title} at{' '}
                <Link
                  href={experience.companyUrl}
                  target="_blank"
                  className="group/brandName flex cursor-pointer flex-row items-center gap-0.5 underline transition-colors duration-300 hover:text-white"
                >
                  {experience.company}{' '}
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={16}
                    className="text-neutral-400 transition-all duration-300 group-hover/brandName:scale-105 group-hover/brandName:text-white"
                  />
                </Link>
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
