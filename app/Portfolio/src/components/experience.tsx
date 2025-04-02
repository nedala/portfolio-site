'use client';

import 'react-vertical-timeline-component/style.min.css';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { experiencesData } from '@/lib/data';

export const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { ref: sectionRef } = useSectionInView('Experience');

  return (
    <section ref={sectionRef} id="experience" className="my-10 scroll-mt-28">
      <SectionHeading
        bheading="Career"
        heading="Experience"
      />
      <VerticalTimeline lineColor="hsl(var(--muted))">
        {experiencesData.map(({ title, description, location, date, important }) => (
          <VerticalTimelineElement
            key={title}
            visible={inView}
            contentStyle={{
              background: 'hsl(var(--muted))',
              color: 'hsl(var(--foreground))',
              boxShadow: 'none',
              padding: '20px',
            }}
            contentArrowStyle={{ display: 'none' }}
            date={date}
            dateClassName="!font-medium text-foreground"
            icon={<Icons.briefcase />}
            iconStyle={{
              boxShadow: 'none',
              border: '2px solid hsl(var(--foreground, 0.5))',
            }}
          >
            <h3
              ref={ref}
              className={`${important ? 'text-blue-500 font-extrabold text-lg' : 'font-bold text-lg'
                }`}
            >
              {title}
            </h3>
            <p
              className={`!mt-0 ${important ? 'text-blue-500 font-medium' : 'font-normal'
                }`}
            >
              {location}
            </p>
            <p className="text-muted-foreground !mt-1 !font-normal">
              {description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
