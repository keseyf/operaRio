import type { FC, ReactNode } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  dkt:boolean;
}

export const Accordion: FC<AccordionProps> = ({ title, children, dkt }) => {
  return (
    <details className={`${dkt ? "bg-neutral-950 border-neutral-800/50" : "bg-white border-gray-700/50"} group border rounded-xl p-4 shadow-sm hover:shadow-md transition-all`}>
      <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-accent1-700">
        <span>{title}</span>
        <span className="icon text-accent1-600">⌄</span>
      </summary>

      <div className={`content mt-3 text-base ${dkt ? "text-gray-300" : "text-gray-700"} leading-relaxed duration-150`}>
        {children}
      </div>
    </details>
  );
};
