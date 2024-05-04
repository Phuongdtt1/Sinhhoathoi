import type {Metadata} from 'next';
import {Inter as FontSans} from 'next/font/google';
import './globals.css';
import {Header} from '@/app/components/Header/Header';
import {Footer} from '@/app/components/Footer/Footer';
import {cn} from '@/app/lib/utils';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

export const metadata: Metadata = {
    title: 'Sinh hoat hội - Hội phụ nữ Bộ đội Biên phòng tỉnh Nghệ An',
    description: 'Design by Đồn Biên phòng CKQT Nậm Cắn',
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
        <html
            lang="en"
        >
        <body
            className={cn(
                'min-h-screen bg-background font-sans text-xl tracking-tight antialiased',
                fontSans.variable,
            )}
            suppressHydrationWarning
        >
        <section className="flex min-h-screen flex-col justify-between">
            <Header/>
            <div className="flex-1 relative">{children}</div>
            <Footer/>
        </section>
        <ToastContainer
            limit={2}
            autoClose={2000}
            position="top-center"
            theme="colored"
        />
        </body>
        </html>
    )
        ;
}
