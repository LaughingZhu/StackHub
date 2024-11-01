/*
 * @Date: 2024-10-28 11:33:48
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-29 14:34:54
 * @Description:
 */
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import logo from '/public/stackhub.png';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export const metadata: Metadata = {
  title: 'StackHub',
  description: 'Generated by create next app'
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' type='image/svg+xml' href={logo.src} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-y-auto overflow-x-hidden antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          <div className='m-auto flex min-h-screen max-w-screen-xl flex-col items-center justify-start'>
            <Header />
            <div className='flex h-full w-full items-start px-[2em]'>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
