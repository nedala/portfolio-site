import { ReactNode } from 'react';

type TProps = {
  bheading: string | undefined;
  heading: string | undefined;
  content?: string | ReactNode | undefined;
};

export const SectionHeading = ({ bheading, heading, content }: TProps) => {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-4xl font-bold tracking-tighter"><span className="text-blue-500">{bheading}</span> {heading}</h2>
      {content && (
        <div className="mt-2 text-sm">{content}</div>
      )}
    </div>
  );
};