import type { Metadata } from 'next';
import localFont from 'next/font/local';
// import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const adnocSans = localFont({
  src: [
    {
      path: '../public/fonts/ADNOCSans_A_Lt.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/ADNOCSans_A_Md.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-adnoc-sans',
});

const helveticaNeueLTArabic = localFont({
  src: [
    {
      path: '../public/fonts/HelveticaNeueLTArabic-Light_2.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/HelveticaNeueLTArabic-Bold_2.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica-neue-lt-arabic',
});

export const metadata: Metadata = {
  title: 'Zones Tech Passport',
  description: '',
  // Add this for Android/Chrome status bar color (use any valid CSS color, e.g., hex, rgb, or named)
  themeColor: '#0021B0', // Example: black; replace with your desired color
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Optional: For iOS, add this meta tag in a <head> element to influence status bar style
                  (options: 'default' for white with black text, 'black' for black with white text,
                  or 'black-translucent' for translucent black). This works best for PWAs. */}
      <head>
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>
      <body
        className={`$ ${adnocSans.variable} ${helveticaNeueLTArabic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
