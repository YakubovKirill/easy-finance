import React from 'react';
import { FaCoins } from 'react-icons/fa';
import Image from 'next/image';

import { ALT_TEXT, PROJECT } from '@/app/text/constants';

import styles from './header.module.css';

type HeaderProps = {
    userName: string,
}

const USER_AVATAR = '/noavatar.png';

const Header = ({ userName }: HeaderProps) => {
    const imageSize = 40;

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <FaCoins size={25} />
                    <h2 className={styles.logoText}>{PROJECT.NAME}</h2>
                </div>
                <div className={styles.user}>
                    <Image
                        width={imageSize}
                        height={imageSize}
                        alt={ALT_TEXT.HEADER_USER_IMAGE}
                        src={USER_AVATAR}
                        className={styles.userImage}
                    />
                    <span>{userName}</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
