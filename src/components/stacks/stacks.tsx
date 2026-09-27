import { STACKS, StackType } from '@/utils/stacks';

export const Stacks = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2>Stack</h2>
      <ol className="flex flex-col gap-8">
        {STACKS.map((stack: StackType) => (
          <li
            key={stack.title}
            className="grid grid-cols-1 gap-1 sm:grid-cols-[7rem_1fr] sm:gap-6"
          >
            <time className="pt-0.5 text-sm text-neutral-500 tabular-nums">
              {stack.title}
            </time>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-medium text-balance text-neutral-100">
                {stack.values.join(' · ')}
              </h3>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
