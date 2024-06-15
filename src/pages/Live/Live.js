import React, { useRef } from 'react';
import AccountItem from '~/components/SuggestedAccounts/AccountItem';
import Button from '~/components/Button';
import styles from './Live.module.scss';
import classNames from 'classnames/bind';
import LiveCamera from './LiveCamera/LiveCamera'; // Import LiveCamera component
import LiveItem from './LiveItem'; // Import LiveItem component

const cx = classNames.bind(styles);

function Live() {
    const refForYou = useRef(null);
    const refFollowing = useRef(null);
    const refTrending = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className={cx('wrapper')}>
                <Button rounded onClick={() => scrollToSection(refForYou)}>
                    Dành cho bạn
                </Button>
                <Button rounded onClick={() => scrollToSection(refFollowing)}>
                    Đang Follow
                </Button>
                <Button rounded onClick={() => scrollToSection(refTrending)}>
                    Xu hướng
                </Button>
            </div>
            <div ref={refForYou}>
                <LiveCamera style={{ width: '800px', height: '480px' }} />
                <p className={cx('more-btn')}>Dành cho bạn</p>
                <LiveItem />
            </div>
            <div ref={refFollowing}>
                <p className={cx('more-btn')}>Đang Follow</p>
                <LiveItem />
            </div>
            <div ref={refTrending}>
                <p className={cx('more-btn')}>Xu hướng</p>
                <LiveItem />
            </div>
        </div>
    );
}

export default Live;
