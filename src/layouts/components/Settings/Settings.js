import React from 'react';
import classNames from 'classnames/bind';
import styles from './Setting.module.scss';

const cx = classNames.bind(styles);

function Settings() {
    return (
        <div className={cx('settings')}>
            <h1>Settings Page</h1>
            {/* Your Settings content goes here */}
        </div>
    );
}

export default Settings;
