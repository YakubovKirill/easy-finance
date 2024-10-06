'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import Button from './ui/common/Button/Button';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './ui/app.module.css';

export default function Home() {
    const router = useRouter();

    const addHandler = useCallback(() => {
        router.push('./operation/add');
    }, [router]);

    return (
        <main>
            <span>Welcome !</span>
            <Button onClick={addHandler}>
                <span>Add operation</span>
            </Button>
        </main>
    );
}
