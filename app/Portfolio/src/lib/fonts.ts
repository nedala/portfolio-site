import { Open_Sans } from 'next/font/google';

const fontSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fonts = [fontSans.variable];