import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { FAKE_USER } from './mocks/fakeUser';
import { PROJECT } from './text/constants';
import Header from './ui/header/header';
import { getJoinedString } from './utils/string-utils';

import './ui/globals.css';
import styles from './ui/app.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title:       PROJECT.NAME,
    description: PROJECT.DESCRIPTION,
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={getJoinedString(inter.className, styles.container)}>
                <div className={styles.header}>
                    <Header userName={FAKE_USER.NAME} />
                </div>
                <div className={styles.content}>
                    <div className={styles.wrapper}>{children}</div>
                </div>
            </body>
        </html>
    );
}
