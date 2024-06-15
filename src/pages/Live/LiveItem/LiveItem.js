import React from 'react';
import AccountItem from '~/components/SuggestedAccounts/AccountItem';
import LiveCamera from '~/pages/Live/LiveCamera/LiveCamera.js'; // Import LiveCamera component
import styles from './LiveItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LiveItem() {
    return (
        <div className={cx('video-container')}>
            <div className={cx('item-wrapper')}>
                <AccountItem />
                <LiveCamera style={{ width: '370px', height: '200px' }} />
            </div>
            <div className={cx('item-wrapper')}>
                <AccountItem />
                <LiveCamera style={{ width: '370px', height: '200px' }} />
            </div>
        </div>
    );
}

export default LiveItem;
