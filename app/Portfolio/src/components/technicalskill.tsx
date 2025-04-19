'use client';

import { motion } from 'framer-motion';

type TProps = {
  category: string;
  items: readonly string[];
  index: number;
};

export const TechnicalSkill = ({ category, items, index }: TProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded p-5 flex flex-col"
    >
      {/* Lock header height */}
      <div className="min-h-[3.5rem] flex items-center text-center justify-center mb-4">
        <h3 className="text-xl font-bold text-blue-500 text-center mt-0">{category}</h3>
      </div>

      <ul className="space-y-2 text-md text-muted-foreground flex-1">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="pl-3 border-l border-dotted border-blue-500 text-left"
          >
            <span className="block pl-2">{item}</span>
          </li>
        ))}
      </ul>
      <div className="mb-6"></div>
    </motion.div>
  );
};

