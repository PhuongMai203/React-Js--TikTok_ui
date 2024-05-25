import React, { useState } from 'react';
import YourComponent from './Icon/Link.js';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faFlag, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import LightSwitch from './Icon/Icon.js';
import Button from '~/components/Button';
import AccountItem from '~/components/SuggestedAccounts/AccountItem';
import video1 from '~/Videos/a.mp4';
import styles from './Home.module.scss';
import Video from '~/Videos/Video/Video.js';

const cx = classNames.bind(styles);

function Profile({ label }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <p className={cx('label')}>{label}</p>
                <AccountItem />

                <Button outline>Follow</Button>
            </div>
            <span className={cx('status')}> Gấu mẹ và gấu con</span>
            <Video />
            <YourComponent />
        </div>
    );
}

export default Profile;
