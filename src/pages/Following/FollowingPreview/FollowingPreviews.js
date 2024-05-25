import React from 'react';
import classNames from 'classnames/bind';
import styles from './Following.modulePriview.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function FollowingPreviews({ label }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar-wrapper')}>
                <img className={cx('avatar')} src="hi.jpg" alt="" />
            </div>
            <p className={cx('nickname')}>
                <strong>Btpmai203</strong>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
        </div>
    );
}

export default FollowingPreviews;
