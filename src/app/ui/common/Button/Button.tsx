import React, { memo } from 'react';

import { getJoinedString } from '@/app/utils/string-utils';

import styles from './button.module.css';

export enum ButtonType {
    Main = 'main',
    MainSimple = 'mainSimple',
}

export type ButtonProps = {
    children: React.ReactNode;
    type?: ButtonType,
    className?: string;
    onClick?: VoidFunction;
}

const Button = memo(({ children, type = ButtonType.MainSimple, className = '', onClick }: ButtonProps) => {
    const buttonClasses = getJoinedString(styles.content, styles[`content__${type}`], className);

    return (
        <div className={buttonClasses} onClick={onClick}>
            <button className={styles.button}>
                {children}
            </button>
        </div>
    );});

export default Button;
