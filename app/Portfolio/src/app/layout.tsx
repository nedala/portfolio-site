import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { ActiveSectionProvider } from '@/components/active-section-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Edala | Portfolio',
  description: "Seshu Edala's portfolio website",
  keywords: [
    'portfolio',
    'cloud',
    'founder',
    'artificial intelligence',
    'machine learning',
    'full stack',
    'analytics',
    'big data',
    'accessibility',
    'cloud computing',
    'data science',
    'data engineering',
    'data visualization',
    'data analysis',
    'data'],
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  verification: {
    google: '',
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <ThemeProvider attribute="class">
          <ActiveSectionProvider>
            {children}
            <Toaster position="bottom-left" />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
