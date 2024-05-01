import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { Header } from '@/app/components/Header/Header';
import { Footer } from '@/app/components/Footer/Footer';
import { cn } from '@/app/lib/utils';
import { Suspense } from 'react';


export const metadata: Metadata = {
    title: 'Sinh Hoạt Hội',
    description: 'Mai Phương Project',
};

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['300', '500', '700'],
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Suspense>
            <html
                lang="en"
                suppressHydrationWarning
            >
                <body
                    className={cn(
                        'min-h-screen bg-background font-sans text-xl tracking-tight antialiased',
                        fontSans.variable,
                    )}
                >
                    <section className="flex min-h-screen flex-col justify-between gap-2">
                        <Header />
                        <div className="flex-1 relative">{children}</div>
                        <Footer />
                    </section>
                </body>
            </html>
        </Suspense>
    )
        ;
}
